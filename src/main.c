#include <pebble.h>
#include "window.h"
#include "loadscreen.h"
#include "appmessagekeys.h"
#include "gopro.h"

static bool initialized = false;

// Called when a message is received from PebbleKitJS
static void in_received_handler(DictionaryIterator *received, void *context) {
	if(gopro_init(received)) {   
    if (!initialized) {
      initialized = true;
      hide_loadscreen();
      show_window();
    }
    window_update();
	}
  else {
    if (initialized) {
      initialized = false;
      hide_window();
      show_loadscreen();
    }
    set_loadText(gopro_cam_connect_status);
  }
}

// Called when an incoming message from PebbleKitJS is dropped
static void in_dropped_handler(AppMessageResult reason, void *context) {	
  APP_LOG(APP_LOG_LEVEL_DEBUG, "dropped"); 
}

// Called when PebbleKitJS does not acknowledge receipt of a message
static void out_failed_handler(DictionaryIterator *failed, AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "failed"); 
}

static void init(void) {  
  show_loadscreen();
  
  // Register AppMessage handlers
  app_message_register_inbox_received(in_received_handler); 
  app_message_register_inbox_dropped(in_dropped_handler); 
  app_message_register_outbox_failed(out_failed_handler);

  // Initialize AppMessage inbox and outbox buffers with a suitable size
  //const int inbox_size = 128;
  //const int outbox_size = 128;
  //app_message_open(inbox_size, outbox_size);
  app_message_open(app_message_inbox_size_maximum(), app_message_outbox_size_maximum());
}

static void deinit(void) {
  if (initialized)
    hide_window();
  else
    hide_loadscreen();
  app_message_deregister_callbacks();
}

int main(void) {
	init();
	app_event_loop();
	deinit();
}
