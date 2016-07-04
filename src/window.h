#pragma once
#include <pebble.h>

void show_window(void);
void hide_window(void);

void window_update();
void window_setMode(int mode, int recording);
void window_set_backgroundColor(GColor color);
void window_setBattery(int pct);
void window_set_text();
//void sendCommand(uint8_t settting, uint8_t value);
//void text(int recording, int battery, char* remainText, char* recTimeText, char* videoCountText);
//char* tupleStr(DictionaryIterator *received, int dict);
//int tupleInt(DictionaryIterator *received, int dict);