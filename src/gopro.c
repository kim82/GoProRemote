#include <pebble.h>
#include "appmessagekeys.h"
#include "gopro.h"

const char *VIDEORES[] = {"4K SV","2.7K SV","4K","2.7K","2.7K 4:3", "1440", "1080 SV", "1080", "960", "720 SV", "720", "WVGA"};
const char *PHOTORES[] = {"10MP W", "8MP M", "5MP W", "5MP M", "7MP W", "12MP W", "7MP M"};
const char *FPS[] = {"12","15","24","25","30","48","50","60","80","90","100","120","240","?","?"};
const char* FOV[] = {"W","M","N"};
const char* BURSTRATE[] = {"3/1 S","5/1 S","10/1 S","10/2 S","10/3 S","30/1 S","30/2 S","30/3 S","30/6 S"};
const char *TIMELAPSEINTERVAL[] = {"0.5 S","1 S","2 S","5 S","10 S","30 S","60 S"};

void sendCommand(uint8_t setting, uint8_t value) {
  uint16_t message = setting << 8 | value;
  
  DictionaryIterator *iter;	
	app_message_outbox_begin(&iter);
  dict_write_int16(iter, key_camera_command_msg, message);
	dict_write_end(iter);
  app_message_outbox_send();
}
int intValue(DictionaryIterator *received, int dict) {
  Tuple *tuple;
  tuple = dict_find(received, dict);
	if (tuple) {
		return (int)tuple->value->uint32;
	} 
  return -1;
}

bool gopro_init(DictionaryIterator *received) {
  gopro_cam_connect_status = intValue(received, key_cam_connect_status);
  
  Tuple *tuple = dict_find(received, key_cam_status);  
	if (tuple) {
    uint8_t *data = tuple->value->data; 
    memcpy(gopro_cam_status, data, ARRAY_LENGTH(gopro_cam_status));    
    
    uint8_t recordingBefore = gopro_recording;
    gopro_recording = intValue(received, key_recording);
    gopro_mode = intValue(received, key_mode);
    gopro_video_count = intValue(received, key_video_count);
    gopro_video_progress = intValue(received, key_video_progress);
    gopro_video_remaining = intValue(received, key_video_remaining);
    gopro_photo_count = intValue(received, key_photo_count);
    gopro_photo_progress = intValue(received, key_photo_progress);
    gopro_photo_remaining = intValue(received, key_photo_remaining);
    
    if (gopro_recording != recordingBefore) {
      vibes_double_pulse();
    }
    
    return true;
  }
  
  return false;
}
//when clicked on SELECT-button
void gopro_select(ClickRecognizerRef recognizer, void *context) {
  if (gopro_mode != MODE_SETUP) {
    if (gopro_cam_connect_status == 0) {
      sendCommand(SETTING_POWER, POWER_ON);
    }
    else {
      sendCommand(SETTING_SHUTTER, gopro_recording ? SHUTTER_OFF : SHUTTER_ON);
    }
  }
}
//when clicked on DOWN-button
void gopro_next(ClickRecognizerRef recognizer, void *context) {
  int mode = gopro_mode - 1;
  if (mode < MODE_VIDEO)
    mode = MODE_TIMELAPSE;

  sendCommand(SETTING_MODE, mode);
}
//when clicked on UP-button
void gopro_previous(ClickRecognizerRef recognizer, void *context) {
  int mode = gopro_mode + 1;
  if (mode > MODE_TIMELAPSE)
    mode = MODE_VIDEO;
  sendCommand(SETTING_MODE, mode);
}

//Sets the resolution text
void gopro_settingText(char* currentText, int8_t length) {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "SETTING_BURSTRATE: %d", gopro_cam_status[SETTING_BURSTRATE]); 
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "SETTING_BURSTTIMELAPSE: %d", gopro_cam_status[SETTING_BURSTTIMELAPSE]); 
  
  switch (gopro_mode) {
    case MODE_VIDEO:
        snprintf(currentText, length, "%s - %s", VIDEORES[gopro_cam_status[SETTING_VIDEORES]], FPS[gopro_cam_status[SETTING_FPS]]);
      break;
    
    case MODE_PHOTO:   
      snprintf(currentText, length, "%s", PHOTORES[gopro_cam_status[SETTING_PHOTORES]]);
      break;
    
    case MODE_BURST:
      snprintf(currentText, length, "%s - %s", PHOTORES[gopro_cam_status[SETTING_PHOTORES]], BURSTRATE[gopro_cam_status[SETTING_BURSTRATE]]);
      break;
    
    case MODE_TIMELAPSE:
      snprintf(currentText, length, "%s - %s", PHOTORES[gopro_cam_status[SETTING_PHOTORES]], TIMELAPSEINTERVAL[gopro_cam_status[SETTING_BURSTTIMELAPSE]]);
      break;
    
    default:
      snprintf(currentText, length, " ");
      break;
  }
}
//sets the progress time/count text
void gopro_currentText(char* currentText, int8_t length) {
  int progressMinutes = gopro_video_progress % 60;
  int progressHours = (gopro_video_progress - progressMinutes) / 60;
  
  switch (gopro_mode) {
    case MODE_SETUP:
      snprintf(currentText, length, "SETUP");
      break;
    
    case MODE_VIDEO:
      if (gopro_recording)
        snprintf(currentText, length, "%02d:%02d", progressHours, progressMinutes);
      else
        snprintf(currentText, length, "%d", gopro_video_count);
      break;
    
    default:        
      snprintf(currentText, length, "%d", gopro_photo_count);
      break;
  }
}
//sets the remaining text
void gopro_remainText(char* remainText, int8_t length) {
  int remainingMinutes = gopro_video_remaining % 60;
  int remainingHours = (gopro_video_remaining - remainingMinutes) / 60;
  
  switch (gopro_mode) {
    case MODE_SETUP:
      snprintf(remainText, length, " ");
      break;
    
    case MODE_VIDEO:
      snprintf(remainText, length, "%02d:%02d", remainingHours, remainingMinutes);
      break;
    
    default:        
      snprintf(remainText, length, "%d", gopro_photo_remaining);
      break;
  }
}