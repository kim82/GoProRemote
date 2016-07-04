#include <pebble.h>
#include "loadscreen.h"
#include "appmessagekeys.h"
#include "gopro.h"

static GBitmap *s_res_power;

// BEGIN AUTO-GENERATED UI CODE; DO NOT MODIFY
static Window *s_window;
static GFont s_res_roboto_condensed_21;
static GBitmap *s_res_nowifi;
static TextLayer *s_textlayer_1;
static BitmapLayer *s_bitmaplayer_1;

static void initialise_ui(void) {
  s_window = window_create();
  window_set_background_color(s_window, GColorBlack);
  #ifndef PBL_SDK_3
    window_set_fullscreen(s_window, true);
  #endif
  
  s_res_roboto_condensed_21 = fonts_get_system_font(FONT_KEY_ROBOTO_CONDENSED_21);
  s_res_nowifi = gbitmap_create_with_resource(RESOURCE_ID_nowifi);
  // s_textlayer_1
  s_textlayer_1 = text_layer_create(GRect(18, 122, 140, 25));
  text_layer_set_background_color(s_textlayer_1, GColorClear);
  text_layer_set_text_color(s_textlayer_1, GColorWhite);
  text_layer_set_text(s_textlayer_1, "No connection");
  text_layer_set_text_alignment(s_textlayer_1, GTextAlignmentCenter);
  text_layer_set_font(s_textlayer_1, s_res_roboto_condensed_21);
  layer_add_child(window_get_root_layer(s_window), (Layer *)s_textlayer_1);
  
  // s_bitmaplayer_1
  s_bitmaplayer_1 = bitmap_layer_create(GRect(40, 16, 99, 103));
  bitmap_layer_set_bitmap(s_bitmaplayer_1, s_res_nowifi);
  layer_add_child(window_get_root_layer(s_window), (Layer *)s_bitmaplayer_1);
}

static void destroy_ui(void) {
  window_destroy(s_window);
  text_layer_destroy(s_textlayer_1);
  bitmap_layer_destroy(s_bitmaplayer_1);
  gbitmap_destroy(s_res_nowifi);
}
// END AUTO-GENERATED UI CODE
void set_loadText(int status) {
  if (status == 0) {
    text_layer_set_text(s_textlayer_1, "Press select");
    bitmap_layer_set_bitmap(s_bitmaplayer_1, s_res_power);
  }
  else {
    text_layer_set_text(s_textlayer_1, "No connection");
    bitmap_layer_set_bitmap(s_bitmaplayer_1, s_res_nowifi);
  }
  layer_mark_dirty((Layer *)s_bitmaplayer_1);
}

static void up_click_handler(ClickRecognizerRef recognizer, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "UP");
}

static void down_click_handler(ClickRecognizerRef recognizer, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "DOWN");
}

static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, gopro_select);
  window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
}
static void handle_window_unload(Window* window) {
  destroy_ui();
  gbitmap_destroy(s_res_power);
}

void show_loadscreen(void) {
  initialise_ui();
  s_res_power = gbitmap_create_with_resource(RESOURCE_ID_power);
  
  window_set_window_handlers(s_window, (WindowHandlers) {
    .unload = handle_window_unload,
  });
  window_stack_push(s_window, true);
  
  // Use this provider to add button click subscriptions
  window_set_click_config_provider(s_window, click_config_provider); 
}

void hide_loadscreen(void) {
  window_stack_remove(s_window, true);
}
