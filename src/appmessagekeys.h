#pragma once
#include <pebble.h>
// Keys for AppMessage Dictionary
enum {
  key_cam_connect_error = 99,
  key_camera_command_msg = 200,
  key_camera_update_msg = 201,
  key_camera_last_image = 202,
  key_cam_connect_status = 300,
  key_cam_version = 301,
  key_cam_status = 302,
  key_cam_menus = 303,
  key_mode = 321,
  key_photo_count = 323,
  key_video_count = 324,
  key_photo_remaining = 325,
  key_video_remaining = 326,
  key_recording = 327,
  key_video_progress = 328,
  key_photo_progress = 329
};