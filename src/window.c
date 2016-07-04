#include <pebble.h>
#include "window.h"
#include "appmessagekeys.h"
#include "gopro.h"

const uint32_t battery_resource[] = {RESOURCE_ID_battery0, RESOURCE_ID_battery1, RESOURCE_ID_battery2, RESOURCE_ID_battery3, RESOURCE_ID_battery4};
static GBitmap *s_res_cameraicon;
static GBitmap *s_res_bursticon;
static GBitmap *s_res_timelapseicon;
static GBitmap *s_res_setupicon;
static char currentText[10];
static char remainText[10];
static char settingText[20];
static Layer *s_canvas_layer;

// BEGIN AUTO-GENERATED UI CODE; DO NOT MODIFY
static Window *s_window;
static GBitmap *s_res_videoicon;
static GFont s_res_bitham_42_bold;
static GBitmap *s_res_battery2;
static GFont s_res_gothic_18;
static GFont s_res_gothic_14;
static GFont s_res_gothic_24;
static BitmapLayer *mode_iconlayer;
static TextLayer *current_textlayer;
static BitmapLayer *battery_iconlayer;
static TextLayer *remain_textlayer;
static TextLayer *setting_textlayer;
static TextLayer *timer_layer;

static void initialise_ui(void) {
  s_window = window_create();
  window_set_background_color(s_window, GColorBlack);
  #ifndef PBL_SDK_3
    window_set_fullscreen(s_window, true);
  #endif
  
  s_res_videoicon = gbitmap_create_with_resource(RESOURCE_ID_videoIcon);
  s_res_bitham_42_bold = fonts_get_system_font(FONT_KEY_BITHAM_42_BOLD);
  s_res_battery2 = gbitmap_create_with_resource(RESOURCE_ID_battery2);
  s_res_gothic_18 = fonts_get_system_font(FONT_KEY_GOTHIC_18);
  s_res_gothic_14 = fonts_get_system_font(FONT_KEY_GOTHIC_14);
  s_res_gothic_24 = fonts_get_system_font(FONT_KEY_GOTHIC_24);
  // mode_iconlayer
  mode_iconlayer = bitmap_layer_create(GRect(60, 15, 60, 34));
  bitmap_layer_set_bitmap(mode_iconlayer, s_res_videoicon);
  layer_add_child(window_get_root_layer(s_window), (Layer *)mode_iconlayer);
  
  // current_textlayer
  current_textlayer = text_layer_create(GRect(0, 65, 180, 50));
  text_layer_set_background_color(current_textlayer, GColorClear);
  text_layer_set_text_color(current_textlayer, GColorWhite);
  text_layer_set_text(current_textlayer, "00/0000");
  text_layer_set_text_alignment(current_textlayer, GTextAlignmentCenter);
  text_layer_set_font(current_textlayer, s_res_bitham_42_bold);
  layer_add_child(window_get_root_layer(s_window), (Layer *)current_textlayer);
  
  // battery_iconlayer
  battery_iconlayer = bitmap_layer_create(GRect(95, 124, 38, 19));
  bitmap_layer_set_bitmap(battery_iconlayer, s_res_battery2);
  layer_add_child(window_get_root_layer(s_window), (Layer *)battery_iconlayer);
  
  // remain_textlayer
  remain_textlayer = text_layer_create(GRect(26, 121, 60, 24));
  text_layer_set_background_color(remain_textlayer, GColorClear);
  text_layer_set_text_color(remain_textlayer, GColorWhite);
  text_layer_set_text(remain_textlayer, "00H00");
  text_layer_set_text_alignment(remain_textlayer, GTextAlignmentRight);
  text_layer_set_font(remain_textlayer, s_res_gothic_18);
  layer_add_child(window_get_root_layer(s_window), (Layer *)remain_textlayer);
  
  // setting_textlayer
  setting_textlayer = text_layer_create(GRect(0, 50, 180, 15));
  text_layer_set_background_color(setting_textlayer, GColorClear);
  text_layer_set_text_color(setting_textlayer, GColorWhite);
  text_layer_set_text(setting_textlayer, "-");
  text_layer_set_text_alignment(setting_textlayer, GTextAlignmentCenter);
  text_layer_set_font(setting_textlayer, s_res_gothic_14);
  layer_add_child(window_get_root_layer(s_window), (Layer *)setting_textlayer);
  
  // timer_layer
  timer_layer = text_layer_create(GRect(68, 142, 45, 24));
  text_layer_set_background_color(timer_layer, GColorClear);
  text_layer_set_text_color(timer_layer, GColorWhite);
  text_layer_set_text(timer_layer, "00:00");
  text_layer_set_text_alignment(timer_layer, GTextAlignmentCenter);
  text_layer_set_font(timer_layer, s_res_gothic_24);
  layer_add_child(window_get_root_layer(s_window), (Layer *)timer_layer);
}

static void destroy_ui(void) {
  window_destroy(s_window);
  bitmap_layer_destroy(mode_iconlayer);
  text_layer_destroy(current_textlayer);
  bitmap_layer_destroy(battery_iconlayer);
  text_layer_destroy(remain_textlayer);
  text_layer_destroy(setting_textlayer);
  text_layer_destroy(timer_layer);
  gbitmap_destroy(s_res_videoicon);
  gbitmap_destroy(s_res_battery2);
}
// END AUTO-GENERATED UI CODE

// Change GUI -->
void window_update() {
  window_setBattery(gopro_cam_status[SETTING_BATTERY]);
  window_setMode(gopro_mode, gopro_recording);
  
  gopro_currentText(currentText, sizeof currentText);
  gopro_remainText(remainText, sizeof remainText);
  gopro_settingText(settingText, sizeof settingText);
  window_set_text();
}
void window_setMode(int mode, int recording) {
  if(recording == 1)
    window_set_background_color(s_window, GColorRed);
  else
    window_set_background_color(s_window, GColorBlack);
  
  switch (mode) {
    case 0:
      bitmap_layer_set_bitmap(mode_iconlayer, s_res_videoicon);
      break;

    case 1: 
      bitmap_layer_set_bitmap(mode_iconlayer, s_res_cameraicon);
      break;
    
    case 2:
      bitmap_layer_set_bitmap(mode_iconlayer, s_res_bursticon);
      break;
    
    case 3:
      bitmap_layer_set_bitmap(mode_iconlayer, s_res_timelapseicon);
      break;
    
    case 7:
      bitmap_layer_set_bitmap(mode_iconlayer, s_res_setupicon);
      break;
    
  }
  layer_mark_dirty((Layer *)mode_iconlayer); //refresh image
}
void window_setBattery(int battery) {
  gbitmap_destroy(s_res_battery2);
  s_res_battery2 = gbitmap_create_with_resource(battery_resource[battery]);  
  bitmap_layer_set_bitmap(battery_iconlayer, s_res_battery2);
  layer_mark_dirty((Layer *)battery_iconlayer);
}
void window_set_text() { 
  text_layer_set_text(current_textlayer, currentText);
  text_layer_set_text(remain_textlayer, remainText);
  text_layer_set_text(setting_textlayer, settingText);
}
// Change GUI <--

// Events -->
static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, gopro_select);
  window_single_click_subscribe(BUTTON_ID_UP, gopro_previous);
  window_single_click_subscribe(BUTTON_ID_DOWN, gopro_next);
}
static void canvas_update_proc(Layer *layer, GContext *ctx) {
  // Custom drawing happens here!
  graphics_context_set_stroke_color(ctx, GColorWhite);
  graphics_context_set_stroke_width(ctx, 2);
  // Draw a line
  GRect bounds = layer_get_bounds(window_get_root_layer(s_window));
  graphics_draw_line(ctx, GPoint(0, bounds.size.h - 60),  GPoint(bounds.size.w, bounds.size.h - 60));
}
static void update_time() {
  // Get a tm structure
  time_t temp = time(NULL);
  struct tm *tick_time = localtime(&temp);

  // Write the current hours and minutes into a buffer
  static char s_buffer[8];
  strftime(s_buffer, sizeof(s_buffer), clock_is_24h_style() ? "%H:%M" : "%I:%M", tick_time);

  // Display this time on the TextLayer
  text_layer_set_text(timer_layer, s_buffer);
}

static void tick_handler(struct tm *tick_time, TimeUnits units_changed) {
  update_time();
}
// Events <-- 

static void init_ui(void) {
  update_time();
  
  // Register with TickTimerService
  tick_timer_service_subscribe(MINUTE_UNIT, tick_handler);
  
  // Use this provider to add button click subscriptions
  window_set_click_config_provider(s_window, click_config_provider); 
  
  //set transparency
  bitmap_layer_set_compositing_mode(battery_iconlayer, GCompOpSet);
  bitmap_layer_set_compositing_mode(mode_iconlayer, GCompOpSet);
  
  s_res_cameraicon    = gbitmap_create_with_resource(RESOURCE_ID_camera);
  s_res_bursticon     = gbitmap_create_with_resource(RESOURCE_ID_burst);
  s_res_timelapseicon = gbitmap_create_with_resource(RESOURCE_ID_timelapse);
  s_res_setupicon     = gbitmap_create_with_resource(RESOURCE_ID_setup);
  
  GRect bounds = layer_get_bounds(window_get_root_layer(s_window));
  s_canvas_layer = layer_create(bounds);
  // Assign the custom drawing procedure
  layer_set_update_proc(s_canvas_layer, canvas_update_proc);
  
  // Add to Window
  layer_add_child(window_get_root_layer(s_window), s_canvas_layer);
}

static void handle_window_unload(Window* window) {
  destroy_ui();
  gbitmap_destroy(s_res_cameraicon);
  gbitmap_destroy(s_res_bursticon);
  gbitmap_destroy(s_res_timelapseicon);
  gbitmap_destroy(s_res_setupicon);
}

void show_window(void) {
  initialise_ui();
  init_ui();
  window_set_window_handlers(s_window, (WindowHandlers) {
    .unload = handle_window_unload,
  });
  window_stack_push(s_window, true);
}

void hide_window(void) {
  window_stack_remove(s_window, true);
}
