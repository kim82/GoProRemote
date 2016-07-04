var LOG_LEVEL = 1; //0= ALL, 1=ONLY ERRORS
var SETTINGS = {
    SETTING_MAIN: 0,
    SETTING_VIDEOSETTINGS: 1,
    SETTING_PHOTOSETTINGS: 2,
    SETTING_BURSTSETTINGS: 3,
    SETTING_OTHERSETTINGS: 4,
    SETTING_MODE: 5,
    MODE_VIDEO: 0,
    MODE_PHOTO: 1,
    MODE_BURST: 2,
    MODE_TIMELAPSE: 3,
    SETTING_XMODE: 6,
    SETTING_VIDEOSUBMODE: 7,
    VIDEOSUBMODE_VIDEO: 0,
    VIDEOSUBMODE_VIDEO_TIMELAPSE: 1,
    VIDEOSUBMODE_VIDEO_plus_PHOTO: 2,
    VIDEOSUBMODE_LOOPING: 3,
    SETTING_PHOTOSUBMODE: 8,
    PHOTOSUBMODE_SINGLE: 0,
    PHOTOSUBMODE_CONTINUOUS: 1,
    PHOTOSUBMODE_NIGHT: 2,
    SETTING_BURSTSUBMODE: 9,
    BURSTSUBMODE_BURST: 0,
    BURSTSUBMODE_TIMELAPSE: 1,
    BURSTSUBMODE_NIGHTLAPSE: 2,
    SETTING_VIDEORES: 10,
    VIDEORES_4K_SUPERVIEW: 0,
    VIDEORES_2_7K_SUPERVIEW: 1,
    VIDEORES_4K: 2,
    VIDEORES_2_7K: 3,
    VIDEORES_2_7K_4_3: 4,
    VIDEORES_1440: 5,
    VIDEORES_1080_SUPERVIEW: 6,
    VIDEORES_1080: 7,
    VIDEORES_960: 8,
    VIDEORES_720_SUPERVIEW: 9,
    VIDEORES_720: 10,
    VIDEORES_WVGA: 11,
    SETTING_PHOTORES: 11,
    PHOTORES_10_MP_WIDE: 0,
    PHOTORES_8_MP_MED: 1,
    PHOTORES_5_MP_WIDE: 2,
    PHOTORES_5_MP_MED: 3,
    PHOTORES_7_MP_WIDE: 4,
    PHOTORES_12_MP_WIDE: 5,
    PHOTORES_7_MP_MED: 6,
    SETTING_BURSTRES: 12,
    BURSTRES_11_MP_WIDE: 0,
    BURSTRES_8_MP_MED: 1,
    BURSTRES_5_MP_WIDE: 2,
    BURSTRES_5_MP_MED: 3,
    BURSTRES_7_MP_WIDE: 4,
    BURSTRES_12_MP_WIDE: 5,
    BURSTRES_7_MP_MED: 6,
    SETTING_VIDEOMODE_GP2: 13,
    VIDEOMODE_GP2_1080_30: 0,
    VIDEOMODE_GP2_960_60: 1,
    VIDEOMODE_GP2_960_30: 2,
    VIDEOMODE_GP2_720_60: 3,
    VIDEOMODE_GP2_720_30: 4,
    VIDEOMODE_GP2_WVGA_120: 5,
    VIDEOMODE_GP2_WVGA_60: 6,
    SETTING_FPS: 14,
    FPS_12_FPS: 0,
    FPS_15_FPS: 1,
    FPS_24_FPS: 2,
    FPS_25_FPS: 3,
    FPS_30_FPS: 4,
    FPS_48_FPS: 5,
    FPS_50_FPS: 6,
    FPS_60_FPS: 7,
    FPS_80_FPS: 8,
    FPS_90_FPS: 9,
    FPS_100_FPS: 10,
    FPS_120_FPS: 11,
    FPS_240_FPS: 12,
    SETTING_FOV: 15,
    FOV_WIDE: 0,
    FOV_MEDIUM: 1,
    FOV_NARROW: 2,
    SETTING_PHOTOCONTINUOUSRATE: 16,
    PHOTOCONTINUOUSRATE_SINGLE: 0,
    PHOTOCONTINUOUSRATE_3_FPS: 1,
    PHOTOCONTINUOUSRATE_5_FPS: 2,
    PHOTOCONTINUOUSRATE_10_FPS: 3,
    SETTING_PHOTOSHUTTER: 17,
    PHOTOSHUTTER_AUTO: 0,
    PHOTOSHUTTER_2_SEC: 1,
    PHOTOSHUTTER_5_SEC: 2,
    PHOTOSHUTTER_10_SEC: 3,
    PHOTOSHUTTER_15_SEC: 4,
    PHOTOSHUTTER_20_SEC: 5,
    PHOTOSHUTTER_30_SEC: 6,
    SETTING_BURSTRATE: 18,
    BURSTRATE_3_1_SEC: 0,
    BURSTRATE_5_1_SEC: 1,
    BURSTRATE_10_1_SEC: 2,
    BURSTRATE_10_2_SEC: 3,
    BURSTRATE_10_3_SEC: 4,
    BURSTRATE_30_1_SEC: 5,
    BURSTRATE_30_2_SEC: 6,
    BURSTRATE_30_3_SEC: 7,
    BURSTRATE_30_6_SEC: 8,
    SETTING_BURSTTIMELAPSE: 19,
    BURSTTIMELAPSE_1_PHOTO___0_5_SEC: 0,
    BURSTTIMELAPSE_1_PHOTO___1_SEC: 1,
    BURSTTIMELAPSE_1_PHOTO___2_SEC: 2,
    BURSTTIMELAPSE_1_PHOTO___5_SEC: 3,
    BURSTTIMELAPSE_1_PHOTO___10_SEC: 4,
    BURSTTIMELAPSE_1_PHOTO___30_SEC: 5,
    BURSTTIMELAPSE_1_PHOTO___60_SEC: 6,
    SETTING_BURSTSHUTTER: 20,
    BURSTSHUTTER_AUTO: 0,
    BURSTSHUTTER_2_SEC: 1,
    BURSTSHUTTER_5_SEC: 2,
    BURSTSHUTTER_10_SEC: 3,
    BURSTSHUTTER_15_SEC: 4,
    BURSTSHUTTER_20_SEC: 5,
    BURSTSHUTTER_30_SEC: 6,
    SETTING_BURSTINTERVAL: 21,
    BURSTINTERVAL_CONTINUOUS: 0,
    BURSTINTERVAL_4_SEC: 1,
    BURSTINTERVAL_5_SEC: 2,
    BURSTINTERVAL_10_SEC: 3,
    BURSTINTERVAL_15_SEC: 4,
    BURSTINTERVAL_20_SEC: 5,
    BURSTINTERVAL_30_SEC: 6,
    BURSTINTERVAL_1_MIN: 7,
    BURSTINTERVAL_2_MIN: 8,
    BURSTINTERVAL_5_MIN: 9,
    BURSTINTERVAL_30_MIN: 10,
    BURSTINTERVAL_60_MIN: 11,
    SETTING_SPOTMETER: 22,
    SPOTMETER_ON: 0,
    SPOTMETER_OFF: 1,
    SETTING_VIDEOPHOTOINTERVAL: 23,
    VIDEOPHOTOINTERVAL_OFF: 0,
    VIDEOPHOTOINTERVAL_1___5S: 1,
    VIDEOPHOTOINTERVAL_1___10S: 2,
    VIDEOPHOTOINTERVAL_1___30S: 3,
    VIDEOPHOTOINTERVAL_1___60S: 4,
    SETTING_LOOPVIDEO: 24,
    LOOPVIDEO_OFF: 0,
    LOOPVIDEO_5_MIN: 1,
    LOOPVIDEO_20_MIN: 2,
    LOOPVIDEO_60_MIN: 3,
    LOOPVIDEO_120_MIN: 4,
    LOOPVIDEO_MAX: 5,
    SETTING_PROTUNE: 25,
    PROTUNE_ON: 0,
    PROTUNE_OFF: 1,
    SETTING_WHITEBALANCE: 26,
    WHITEBALANCE_AUTO: 0,
    WHITEBALANCE_3000K: 1,
    WHITEBALANCE_5500K: 2,
    WHITEBALANCE_6500K: 3,
    WHITEBALANCE_CAM_RAW: 4,
    SETTING_COLOR: 27,
    COLOR_GOPRO_COLOR: 0,
    COLOR_FLAT: 1,
    SETTING_ISO: 28,
    ISO_6400: 0,
    ISO_1600: 1,
    ISO_400: 2,
    SETTING_SHARPNESS: 29,
    SHARPNESS_HIGH: 0,
    SHARPNESS_MEDIUM: 1,
    SHARPNESS_LOW: 2,
    SETTING_EXPOSURE: 30,
    EXPOSURE__2_0: 0,
    EXPOSURE__1_5: 1,
    EXPOSURE__1_0: 2,
    EXPOSURE__0_5: 3,
    EXPOSURE_0: 4,
    EXPOSURE__plus_0_5: 5,
    EXPOSURE__plus_1_0: 6,
    EXPOSURE__plus_1_5: 7,
    EXPOSURE__plus_2_0: 8,
    SETTING_SPOTMETERVIDEO: 31,
    SPOTMETERVIDEO_ON: 0,
    SPOTMETERVIDEO_OFF: 1,
    SETTING_PROTUNEVIDEO: 32,
    PROTUNEVIDEO_ON: 0,
    PROTUNEVIDEO_OFF: 1,
    SETTING_WHITEBALANCEVIDEO: 33,
    WHITEBALANCEVIDEO_AUTO: 0,
    WHITEBALANCEVIDEO_3000K: 1,
    WHITEBALANCEVIDEO_5500K: 2,
    WHITEBALANCEVIDEO_6500K: 3,
    WHITEBALANCEVIDEO_CAM_RAW: 4,
    SETTING_COLORVIDEO: 34,
    COLORVIDEO_GOPRO_COLOR: 0,
    COLORVIDEO_FLAT: 1,
    SETTING_ISOVIDEO: 35,
    ISOVIDEO_6400: 0,
    ISOVIDEO_1600: 1,
    ISOVIDEO_400: 2,
    SETTING_SHARPNESSVIDEO: 36,
    SHARPNESSVIDEO_HIGH: 0,
    SHARPNESSVIDEO_MEDIUM: 1,
    SHARPNESSVIDEO_LOW: 2,
    SETTING_EXPOSUREVIDEO: 37,
    EXPOSUREVIDEO__2_0: 0,
    EXPOSUREVIDEO__1_5: 1,
    EXPOSUREVIDEO__1_0: 2,
    EXPOSUREVIDEO__0_5: 3,
    EXPOSUREVIDEO_0: 4,
    EXPOSUREVIDEO__plus_0_5: 5,
    EXPOSUREVIDEO__plus_1_0: 6,
    EXPOSUREVIDEO__plus_1_5: 7,
    EXPOSUREVIDEO__plus_2_0: 8,
    SETTING_SPOTMETERPHOTO: 38,
    SPOTMETERPHOTO_ON: 0,
    SPOTMETERPHOTO_OFF: 1,
    SETTING_PROTUNEPHOTO: 39,
    PROTUNEPHOTO_ON: 0,
    PROTUNEPHOTO_OFF: 1,
    SETTING_WHITEBALANCEPHOTO: 40,
    WHITEBALANCEPHOTO_AUTO: 0,
    WHITEBALANCEPHOTO_3000K: 1,
    WHITEBALANCEPHOTO_5500K: 2,
    WHITEBALANCEPHOTO_6500K: 3,
    WHITEBALANCEPHOTO_CAM_RAW: 4,
    SETTING_COLORPHOTO: 41,
    COLORPHOTO_GOPRO_COLOR: 0,
    COLORPHOTO_FLAT: 1,
    SETTING_ISOPHOTO: 42,
    ISOPHOTO_6400: 0,
    ISOPHOTO_1600: 1,
    ISOPHOTO_400: 2,
    SETTING_SHARPNESSPHOTO: 43,
    SHARPNESSPHOTO_HIGH: 0,
    SHARPNESSPHOTO_MEDIUM: 1,
    SHARPNESSPHOTO_LOW: 2,
    SETTING_EXPOSUREPHOTO: 44,
    EXPOSUREPHOTO__2_0: 0,
    EXPOSUREPHOTO__1_5: 1,
    EXPOSUREPHOTO__1_0: 2,
    EXPOSUREPHOTO__0_5: 3,
    EXPOSUREPHOTO_0: 4,
    EXPOSUREPHOTO__plus_0_5: 5,
    EXPOSUREPHOTO__plus_1_0: 6,
    EXPOSUREPHOTO__plus_1_5: 7,
    EXPOSUREPHOTO__plus_2_0: 8,
    SETTING_SPOTMETERBURST: 45,
    SPOTMETERBURST_ON: 0,
    SPOTMETERBURST_OFF: 1,
    SETTING_PROTUNEBURST: 46,
    PROTUNEBURST_ON: 0,
    PROTUNEBURST_OFF: 1,
    SETTING_WHITEBALANCEBURST: 47,
    WHITEBALANCEBURST_AUTO: 0,
    WHITEBALANCEBURST_3000K: 1,
    WHITEBALANCEBURST_5500K: 2,
    WHITEBALANCEBURST_6500K: 3,
    WHITEBALANCEBURST_CAM_RAW: 4,
    SETTING_COLORBURST: 48,
    COLORBURST_GOPRO_COLOR: 0,
    COLORBURST_FLAT: 1,
    SETTING_ISOBURST: 49,
    ISOBURST_6400: 0,
    ISOBURST_1600: 1,
    ISOBURST_400: 2,
    SETTING_SHARPNESSBURST: 50,
    SHARPNESSBURST_HIGH: 0,
    SHARPNESSBURST_MEDIUM: 1,
    SHARPNESSBURST_LOW: 2,
    SETTING_EXPOSUREBURST: 51,
    EXPOSUREBURST__2_0: 0,
    EXPOSUREBURST__1_5: 1,
    EXPOSUREBURST__1_0: 2,
    EXPOSUREBURST__0_5: 3,
    EXPOSUREBURST_0: 4,
    EXPOSUREBURST__plus_0_5: 5,
    EXPOSUREBURST__plus_1_0: 6,
    EXPOSUREBURST__plus_1_5: 7,
    EXPOSUREBURST__plus_2_0: 8,
    SETTING_ORIENTATION: 52,
    ORIENTATION_UP: 0,
    ORIENTATION_DOWN: 1,
    ORIENTATION_AUTO: 2,
    SETTING_VIDEOREGION: 53,
    VIDEOREGION_NTSC: 0,
    VIDEOREGION_PAL: 1,
    SETTING_VOLUME: 54,
    VOLUME_100_: 0,
    VOLUME_70_: 1,
    VOLUME_OFF: 2,
    SETTING_LED: 55,
    LED_4: 0,
    LED_2: 1,
    LED_OFF: 2,
    SETTING_AUTOLOWLIGHT: 56,
    AUTOLOWLIGHT_ON: 0,
    AUTOLOWLIGHT_OFF: 1,
    SETTING_SHUTTER: 57,
    SHUTTER_ON: 0,
    SHUTTER_OFF: 1,
    SETTING_BATTERY: 58,
    BATTERY_EMPTY: 0,
    BATTERY_LOW: 1,
    BATTERY_HIGH: 2,
    BATTERY_FULL: 3,
    BATTERY_CHARGING: 4,
    SETTING_VIDEOTIMELAPSEINTERVAL: 59,
    VIDEOTIMELAPSEINTERVAL_0_5_SEC: 0,
    VIDEOTIMELAPSEINTERVAL_1_SEC: 1,
    VIDEOTIMELAPSEINTERVAL_2_SEC: 2,
    VIDEOTIMELAPSEINTERVAL_5_SEC: 3,
    VIDEOTIMELAPSEINTERVAL_10_SEC: 4,
    VIDEOTIMELAPSEINTERVAL_30_SEC: 5,
    VIDEOTIMELAPSEINTERVAL_60_SEC: 6,
    SETTING_END: 60,
    SETTING_POWER: 100,
    POWER_ON: 101,
    POWER_OFF: 102
};
var configurationgp3 = [
{
    setting: [1, SETTINGS.SETTING_MODE],
    command_name: "CM",
    states: [
        [0, SETTINGS.MODE_VIDEO],
        [1, SETTINGS.MODE_PHOTO],
        [2, SETTINGS.MODE_BURST],
        [3, SETTINGS.MODE_TIMELAPSE]
    ]
}, {
    setting: [9, SETTINGS.SETTING_VIDEOMODE_GP2],
    command_name: "VR",
    states: [
        [6, SETTINGS.VIDEOMODE_GP2_1080_30],
        [5, SETTINGS.VIDEOMODE_GP2_960_60],
        [4, SETTINGS.VIDEOMODE_GP2_960_30],
        [3, SETTINGS.VIDEOMODE_GP2_720_60],
        [2, SETTINGS.VIDEOMODE_GP2_720_30],
        [1, SETTINGS.VIDEOMODE_GP2_WVGA_120],
        [0, SETTINGS.VIDEOMODE_GP2_WVGA_60]
    ]
}, {
    setting: [50, SETTINGS.SETTING_VIDEORES],
    command_name: "VV",
    states: [
        [8, SETTINGS.VIDEORES_4K_SUPERVIEW],
        [7, SETTINGS.VIDEORES_2_7K_SUPERVIEW],
        [6, SETTINGS.VIDEORES_4K],
        [5, SETTINGS.VIDEORES_2_7K],
        [4, SETTINGS.VIDEORES_1440],
        [9, SETTINGS.VIDEORES_1080_SUPERVIEW],
        [3, SETTINGS.VIDEORES_1080],
        [2, SETTINGS.VIDEORES_960],
        [10, SETTINGS.VIDEORES_720_SUPERVIEW],
        [1, SETTINGS.VIDEORES_720],
        [0, SETTINGS.VIDEORES_WVGA]
    ]
}, {
    setting: [51, SETTINGS.SETTING_FPS],
    command_name: "FS",
    states: [
        [10, SETTINGS.FPS_240_FPS],
        [9, SETTINGS.FPS_120_FPS],
        [8, SETTINGS.FPS_100_FPS],
        [7, SETTINGS.FPS_60_FPS],
        [6, SETTINGS.FPS_50_FPS],
        [5, SETTINGS.FPS_48_FPS],
        [4, SETTINGS.FPS_30_FPS],
        [3, SETTINGS.FPS_25_FPS],
        [2, SETTINGS.FPS_24_FPS],
        [1, SETTINGS.FPS_15_FPS],
        [0, SETTINGS.FPS_12_FPS]
    ]
}, {
    setting: [7, SETTINGS.SETTING_FOV],
    command_name: "FV",
    states: [
        [0, SETTINGS.FOV_WIDE],
        [1, SETTINGS.FOV_MEDIUM],
        [2, SETTINGS.FOV_NARROW]
    ]
}, {
    setting: [37, SETTINGS.SETTING_LOOPVIDEO],
    command_name: "LO",
    states: [
        [0, SETTINGS.LOOPVIDEO_OFF],
        [1, SETTINGS.LOOPVIDEO_5_MIN],
        [2, SETTINGS.LOOPVIDEO_20_MIN],
        [3, SETTINGS.LOOPVIDEO_60_MIN],
        [4, SETTINGS.LOOPVIDEO_120_MIN],
        [5, SETTINGS.LOOPVIDEO_MAX]
    ]
}, {
    setting: [36, SETTINGS.SETTING_VIDEOPHOTOINTERVAL],
    command_name: "PN",
    states: [
        [0, SETTINGS.VIDEOPHOTOINTERVAL_OFF],
        [1, SETTINGS.VIDEOPHOTOINTERVAL_1___5S],
        [2, SETTINGS.VIDEOPHOTOINTERVAL_1___10S],
        [3, SETTINGS.VIDEOPHOTOINTERVAL_1___30S],
        [4, SETTINGS.VIDEOPHOTOINTERVAL_1___60S]
    ]
}, {
    setting: [30, SETTINGS.SETTING_AUTOLOWLIGHT],
    offset: 6,
    command_name: "LW",
    states: [
        [0, SETTINGS.AUTOLOWLIGHT_OFF],
        [1, SETTINGS.AUTOLOWLIGHT_ON]
    ]
}, {
    setting: [4, SETTINGS.SETTING_SPOTMETER],
    command_name: "EX",
    states: [
        [0, SETTINGS.SPOTMETER_OFF],
        [1, SETTINGS.SPOTMETER_ON]
    ]
}, {
    setting: [30, SETTINGS.SETTING_PROTUNE],
    offset: 1,
    command_name: "PT",
    states: [
        [0, SETTINGS.PROTUNE_OFF],
        [1, SETTINGS.PROTUNE_ON]
    ]
}, {
    setting: [34, SETTINGS.SETTING_WHITEBALANCE],
    command_name: "WB",
    states: [
        [0, SETTINGS.WHITEBALANCE_AUTO],
        [1, SETTINGS.WHITEBALANCE_3000K],
        [2, SETTINGS.WHITEBALANCE_5500K],
        [3, SETTINGS.WHITEBALANCE_6500K],
        [4, SETTINGS.WHITEBALANCE_CAM_RAW]
    ]
}, {
    setting: [30, SETTINGS.SETTING_COLOR],
    offset: 7,
    command_name: "CO",
    states: [
        [0, SETTINGS.COLOR_GOPRO_COLOR],
        [1, SETTINGS.COLOR_FLAT]
    ]
}, {
    setting: [52, SETTINGS.SETTING_ISO],
    offset: 0,
    mask: 3,
    command_name: "GA",
    states: [
        [0, SETTINGS.ISO_6400],
        [1, SETTINGS.ISO_1600],
        [2, SETTINGS.ISO_400]
    ]
}, {
    setting: [52, SETTINGS.SETTING_SHARPNESS],
    offset: 2,
    mask: 3,
    command_name: "SP",
    states: [
        [0, SETTINGS.SHARPNESS_HIGH],
        [1, SETTINGS.SHARPNESS_MEDIUM],
        [2, SETTINGS.SHARPNESS_LOW]
    ]
}, {
    setting: [53, SETTINGS.SETTING_EXPOSURE],
    command_name: "EV",
    states: [
        [6, SETTINGS.EXPOSURE_2_0],
        [7, SETTINGS.EXPOSURE_1_5],
        [8, SETTINGS.EXPOSURE_1_0],
        [9, SETTINGS.EXPOSURE_0_5],
        [10, SETTINGS.EXPOSURE_0],
        [11, SETTINGS.EXPOSURE__plus_0_5],
        [12, SETTINGS.EXPOSURE__plus_1_0],
        [13, SETTINGS.EXPOSURE__plus_1_5],
        [14, SETTINGS.EXPOSURE__plus_2_0]
    ]
}, {
    setting: [8, SETTINGS.SETTING_PHOTORES],
    command_name: "PR",
    states: [
        [0, SETTINGS.PHOTORES_10_MP_WIDE],
        [1, SETTINGS.PHOTORES_8_MP_MED],
        [2, SETTINGS.PHOTORES_5_MP_WIDE],
        [3, SETTINGS.PHOTORES_5_MP_MED],
        [4, SETTINGS.PHOTORES_7_MP_WIDE],
        [5, SETTINGS.PHOTORES_12_MP_WIDE],
        [6, SETTINGS.PHOTORES_7_MP_MED]
    ]
}, {
    setting: [33, SETTINGS.SETTING_PHOTOCONTINUOUSRATE],
    command_name: "CS",
    states: [
        [0, SETTINGS.PHOTOCONTINUOUSRATE_SINGLE],
        [3, SETTINGS.PHOTOCONTINUOUSRATE_3_FPS],
        [5, SETTINGS.PHOTOCONTINUOUSRATE_5_FPS],
        [10, SETTINGS.PHOTOCONTINUOUSRATE_10_FPS]
    ]
}, {
    setting: [32, SETTINGS.SETTING_BURSTRATE],
    command_name: "BU",
    states: [
        [0, SETTINGS.BURSTRATE_3_1_SEC],
        [1, SETTINGS.BURSTRATE_5_1_SEC],
        [2, SETTINGS.BURSTRATE_10_1_SEC],
        [3, SETTINGS.BURSTRATE_10_2_SEC],
        [4, SETTINGS.BURSTRATE_30_1_SEC],
        [5, SETTINGS.BURSTRATE_30_2_SEC],
        [6, SETTINGS.BURSTRATE_30_3_SEC]
    ]
}, {
    setting: [5, SETTINGS.SETTING_BURSTTIMELAPSE],
    command_name: "TI",
    states: [
        [0, SETTINGS.BURSTTIMELAPSE_1_PHOTO___0_5_SEC],
        [1, SETTINGS.BURSTTIMELAPSE_1_PHOTO___1_SEC],
        [2, SETTINGS.BURSTTIMELAPSE_1_PHOTO___2_SEC],
        [5, SETTINGS.BURSTTIMELAPSE_1_PHOTO___5_SEC],
        [10, SETTINGS.BURSTTIMELAPSE_1_PHOTO___10_SEC],
        [40, SETTINGS.BURSTTIMELAPSE_1_PHOTO___30_SEC],
        [60, SETTINGS.BURSTTIMELAPSE_1_PHOTO___60_SEC]
    ]
}, {
    setting: [18, SETTINGS.SETTING_ORIENTATION],
    offset: 2,
    command_name: "UP",
    states: [
        [1, SETTINGS.ORIENTATION_DOWN],
        [0, SETTINGS.ORIENTATION_UP]
    ]
}, {
    setting: [17, SETTINGS.SETTING_LED],
    command_name: "LB",
    states: [
        [0, SETTINGS.LED_OFF],
        [1, SETTINGS.LED_2],
        [2, SETTINGS.LED_4]
    ]
}, {
    setting: [16, SETTINGS.SETTING_VOLUME],
    command_name: "BS",
    states: [
        [2, SETTINGS.VOLUME_100_],
        [1, SETTINGS.VOLUME_70_],
        [0, SETTINGS.VOLUME_OFF]
    ]
}, {
    setting: [18, SETTINGS.SETTING_VIDEOREGION],
    offset: 5,
    command_name: "VM",
    states: [
        [0, SETTINGS.VIDEOREGION_NTSC],
        [1, SETTINGS.VIDEOREGION_PAL]
    ]
}];
var configurationgp4 = [
  {
    setting: ["68", SETTINGS.SETTING_VIDEOSUBMODE],
    states: [
        [0, SETTINGS.VIDEOSUBMODE_VIDEO],
        [2, SETTINGS.VIDEOSUBMODE_VIDEO_plus_PHOTO],
        [1, SETTINGS.VIDEOSUBMODE_VIDEO_TIMELAPSE],
        [3, SETTINGS.VIDEOSUBMODE_LOOPING]
    ]
}, {
    setting: ["2", SETTINGS.SETTING_VIDEORES],
    states: [
        [1, SETTINGS.VIDEORES_4K],
        [2, SETTINGS.VIDEORES_4K_SUPERVIEW],
        [4, SETTINGS.VIDEORES_2_7K],
        [5, SETTINGS.VIDEORES_2_7K_SUPERVIEW],
        [6, SETTINGS.VIDEORES_2_7K_4_3],
        [7, SETTINGS.VIDEORES_1440],
        [8, SETTINGS.VIDEORES_1080_SUPERVIEW],
        [9, SETTINGS.VIDEORES_1080],
        [10, SETTINGS.VIDEORES_960],
        [11, SETTINGS.VIDEORES_720_SUPERVIEW],
        [12, SETTINGS.VIDEORES_720],
        [13, SETTINGS.VIDEORES_WVGA]
    ]
}, {
    setting: ["3", SETTINGS.SETTING_FPS],
    states: [
        [0, SETTINGS.FPS_240_FPS],
        [1, SETTINGS.FPS_120_FPS],
        [2, SETTINGS.FPS_100_FPS],
        [3, SETTINGS.FPS_90_FPS],
        [4, SETTINGS.FPS_80_FPS],
        [5, SETTINGS.FPS_60_FPS],
        [6, SETTINGS.FPS_50_FPS],
        [7, SETTINGS.FPS_48_FPS],
        [8, SETTINGS.FPS_30_FPS],
        [9, SETTINGS.FPS_25_FPS],
        [10, SETTINGS.FPS_24_FPS],
        [11, SETTINGS.FPS_15_FPS],
        [12, SETTINGS.FPS_12_5_FPS]
    ]
}, {
    setting: ["4", SETTINGS.SETTING_FOV],
    states: [
        [0, SETTINGS.FOV_WIDE],
        [1, SETTINGS.FOV_MEDIUM],
        [2, SETTINGS.FOV_NARROW]
    ]
}, {
    setting: ["5", SETTINGS.SETTING_VIDEOTIMELAPSEINTERVAL],
    states: [
        [0, SETTINGS.VIDEOTIMELAPSEINTERVAL_0_5_SEC],
        [1, SETTINGS.VIDEOTIMELAPSEINTERVAL_1_SEC],
        [2, SETTINGS.VIDEOTIMELAPSEINTERVAL_2_SEC],
        [3, SETTINGS.VIDEOTIMELAPSEINTERVAL_5_SEC],
        [4, SETTINGS.VIDEOTIMELAPSEINTERVAL_10_SEC],
        [5, SETTINGS.VIDEOTIMELAPSEINTERVAL_30_SEC],
        [6, SETTINGS.VIDEOTIMELAPSEINTERVAL_60_SEC]
    ]
}, {
    setting: ["6", SETTINGS.SETTING_LOOPVIDEO],
    states: [
        [0, SETTINGS.LOOPVIDEO_MAX],
        [1, SETTINGS.LOOPVIDEO_5_MIN],
        [2, SETTINGS.LOOPVIDEO_20_MIN],
        [3, SETTINGS.LOOPVIDEO_60_MIN],
        [4, SETTINGS.LOOPVIDEO_120_MIN]
    ]
}, {
    setting: ["7", SETTINGS.SETTING_VIDEOPHOTOINTERVAL],
    states: [
        [1, SETTINGS.VIDEOPHOTOINTERVAL_1___5S],
        [2, SETTINGS.VIDEOPHOTOINTERVAL_1___10S],
        [3, SETTINGS.VIDEOPHOTOINTERVAL_1___30S],
        [4, SETTINGS.VIDEOPHOTOINTERVAL_1___60S]
    ]
}, {
    setting: ["8", SETTINGS.SETTING_AUTOLOWLIGHT],
    states: [
        [0, SETTINGS.AUTOLOWLIGHT_OFF],
        [1, SETTINGS.AUTOLOWLIGHT_ON]
    ]
}, {
    setting: ["9", SETTINGS.SETTING_SPOTMETERVIDEO],
    states: [
        [0, SETTINGS.SPOTMETERVIDEO_OFF],
        [1, SETTINGS.SPOTMETERVIDEO_ON]
    ]
}, {
    setting: ["10", SETTINGS.SETTING_PROTUNEVIDEO],
    states: [
        [0, SETTINGS.PROTUNEVIDEO_OFF],
        [1, SETTINGS.PROTUNEVIDEO_ON]
    ]
}, {
    setting: ["11", SETTINGS.SETTING_WHITEBALANCEVIDEO],
    states: [
        [0, SETTINGS.WHITEBALANCEVIDEO_AUTO],
        [1, SETTINGS.WHITEBALANCEVIDEO_3000K],
        [2, SETTINGS.WHITEBALANCEVIDEO_5500K],
        [3, SETTINGS.WHITEBALANCEVIDEO_6500K],
        [4, SETTINGS.WHITEBALANCEVIDEO_CAM_RAW]
    ]
}, {
    setting: ["12", SETTINGS.SETTING_COLORVIDEO],
    states: [
        [0, SETTINGS.COLORVIDEO_GOPRO_COLOR],
        [1, SETTINGS.COLORVIDEO_FLAT]
    ]
}, {
    setting: ["13", SETTINGS.SETTING_ISOVIDEO],
    states: [
        [0, SETTINGS.ISOVIDEO_6400],
        [1, SETTINGS.ISOVIDEO_1600],
        [2, SETTINGS.ISOVIDEO_400]
    ]
}, {
    setting: ["14", SETTINGS.SETTING_SHARPNESSVIDEO],
    states: [
        [0, SETTINGS.SHARPNESSVIDEO_HIGH],
        [1, SETTINGS.SHARPNESSVIDEO_MEDIUM],
        [2, SETTINGS.SHARPNESSVIDEO_LOW]
    ]
}, {
    setting: ["15", SETTINGS.SETTING_EXPOSUREVIDEO],
    states: [
        [0, SETTINGS.EXPOSUREVIDEO__2_0],
        [1, SETTINGS.EXPOSUREVIDEO__1_5],
        [2, SETTINGS.EXPOSUREVIDEO__1_0],
        [3, SETTINGS.EXPOSUREVIDEO__0_5],
        [4, SETTINGS.EXPOSUREVIDEO_0],
        [5, SETTINGS.EXPOSUREVIDEO__plus_0_5],
        [6, SETTINGS.EXPOSUREVIDEO__plus_1_0],
        [7, SETTINGS.EXPOSUREVIDEO__plus_1_5],
        [8, SETTINGS.EXPOSUREVIDEO__plus_2_0]
    ]
}, {
    setting: ["69", SETTINGS.SETTING_PHOTOSUBMODE],
    states: [
        [0, SETTINGS.PHOTOSUBMODE_SINGLE],
        [1, SETTINGS.PHOTOSUBMODE_CONTINUOUS],
        [2, SETTINGS.PHOTOSUBMODE_NIGHT]
    ]
}, {
    setting: ["17", SETTINGS.SETTING_PHOTORES],
    states: [
        [0, SETTINGS.PHOTORES_12_MP_WIDE],
        [1, SETTINGS.PHOTORES_7_MP_WIDE],
        [2, SETTINGS.PHOTORES_7_MP_MED],
        [3, SETTINGS.PHOTORES_5_MP_MED]
    ]
}, {
    setting: ["18", SETTINGS.SETTING_PHOTOCONTINUOUSRATE],
    states: [
        [0, SETTINGS.PHOTOCONTINUOUSRATE_3_FPS],
        [1, SETTINGS.PHOTOCONTINUOUSRATE_5_FPS],
        [2, SETTINGS.PHOTOCONTINUOUSRATE_10_FPS]
    ]
}, {
    setting: ["19", SETTINGS.SETTING_PHOTOSHUTTER],
    states: [
        [0, SETTINGS.PHOTOSHUTTER_AUTO],
        [1, SETTINGS.PHOTOSHUTTER_2_SEC],
        [2, SETTINGS.PHOTOSHUTTER_5_SEC],
        [3, SETTINGS.PHOTOSHUTTER_10_SEC],
        [4, SETTINGS.PHOTOSHUTTER_15_SEC],
        [5, SETTINGS.PHOTOSHUTTER_20_SEC],
        [6, SETTINGS.PHOTOSHUTTER_30_SEC]
    ]
}, {
    setting: ["20", SETTINGS.SETTING_SPOTMETERPHOTO],
    states: [
        [0, SETTINGS.SPOTMETERPHOTO_OFF],
        [1, SETTINGS.SPOTMETERPHOTO_ON]
    ]
}, {
    setting: ["21", SETTINGS.SETTING_PROTUNEPHOTO],
    states: [
        [0, SETTINGS.PROTUNEPHOTO_OFF],
        [1, SETTINGS.PROTUNEPHOTO_ON]
    ]
}, {
    setting: ["22", SETTINGS.SETTING_WHITEBALANCEPHOTO],
    states: [
        [0, SETTINGS.WHITEBALANCEPHOTO_AUTO],
        [1, SETTINGS.WHITEBALANCEPHOTO_3000K],
        [2, SETTINGS.WHITEBALANCEPHOTO_5500K],
        [3, SETTINGS.WHITEBALANCEPHOTO_6500K],
        [4, SETTINGS.WHITEBALANCEPHOTO_CAM_RAW]
    ]
}, {
    setting: ["23", SETTINGS.SETTING_COLORPHOTO],
    states: [
        [0, SETTINGS.COLORPHOTO_GOPRO_COLOR],
        [1, SETTINGS.COLORPHOTO_FLAT]
    ]
}, {
    setting: ["24", SETTINGS.SETTING_ISOPHOTO],
    states: [
        [0, SETTINGS.ISOPHOTO_6400],
        [1, SETTINGS.ISOPHOTO_1600],
        [2, SETTINGS.ISOPHOTO_400]
    ]
}, {
    setting: ["25", SETTINGS.SETTING_SHARPNESSPHOTO],
    states: [
        [0, SETTINGS.SHARPNESSPHOTO_HIGH],
        [1, SETTINGS.SHARPNESSPHOTO_MEDIUM],
        [2, SETTINGS.SHARPNESSPHOTO_LOW]
    ]
}, {
    setting: ["26", SETTINGS.SETTING_EXPOSUREPHOTO],
    states: [
        [0, SETTINGS.EXPOSUREPHOTO__2_0],
        [1, SETTINGS.EXPOSUREPHOTO__1_5],
        [2, SETTINGS.EXPOSUREPHOTO__1_0],
        [3, SETTINGS.EXPOSUREPHOTO__0_5],
        [4, SETTINGS.EXPOSUREPHOTO_0],
        [5, SETTINGS.EXPOSUREPHOTO__plus_0_5],
        [6, SETTINGS.EXPOSUREPHOTO__plus_1_0],
        [7, SETTINGS.EXPOSUREPHOTO__plus_1_5],
        [8, SETTINGS.EXPOSUREPHOTO__plus_2_0]
    ]
}, {
    setting: ["70", SETTINGS.SETTING_BURSTSUBMODE],
    states: [
        [0, SETTINGS.BURSTSUBMODE_BURST],
        [1, SETTINGS.BURSTSUBMODE_TIMELAPSE],
        [2, SETTINGS.BURSTSUBMODE_NIGHTLAPSE]
    ]
}, {
    setting: ["28", SETTINGS.SETTING_BURSTRES],
    states: [
        [0, SETTINGS.BURSTRES_12_MP_WIDE],
        [1, SETTINGS.BURSTRES_7_MP_WIDE],
        [2, SETTINGS.BURSTRES_7_MP_MED],
        [3, SETTINGS.BURSTRES_5_MP_MED]
    ]
}, {
    setting: ["29", SETTINGS.SETTING_BURSTRATE],
    states: [
        [0, SETTINGS.BURSTRATE_3_1_SEC],
        [1, SETTINGS.BURSTRATE_5_1_SEC],
        [2, SETTINGS.BURSTRATE_10_1_SEC],
        [3, SETTINGS.BURSTRATE_10_2_SEC],
        [4, SETTINGS.BURSTRATE_10_3_SEC],
        [5, SETTINGS.BURSTRATE_30_1_SEC],
        [6, SETTINGS.BURSTRATE_30_2_SEC],
        [7, SETTINGS.BURSTRATE_30_3_SEC],
        [8, SETTINGS.BURSTRATE_30_6_SEC]
    ]
}, {
    setting: ["30", SETTINGS.SETTING_BURSTTIMELAPSE],
    states: [
        [0, SETTINGS.BURSTTIMELAPSE_1_PHOTO___0_5_SEC],
        [1, SETTINGS.BURSTTIMELAPSE_1_PHOTO___1_SEC],
        [2, SETTINGS.BURSTTIMELAPSE_1_PHOTO___2_SEC],
        [5, SETTINGS.BURSTTIMELAPSE_1_PHOTO___5_SEC],
        [10, SETTINGS.BURSTTIMELAPSE_1_PHOTO___10_SEC],
        [30, SETTINGS.BURSTTIMELAPSE_1_PHOTO___30_SEC],
        [60, SETTINGS.BURSTTIMELAPSE_1_PHOTO___60_SEC]
    ]
}, {
    setting: ["31", SETTINGS.SETTING_BURSTSHUTTER],
    states: [
        [0, SETTINGS.BURSTSHUTTER_AUTO],
        [1, SETTINGS.BURSTSHUTTER_2_SEC],
        [2, SETTINGS.BURSTSHUTTER_5_SEC],
        [3, SETTINGS.BURSTSHUTTER_10_SEC],
        [4, SETTINGS.BURSTSHUTTER_15_SEC],
        [5, SETTINGS.BURSTSHUTTER_20_SEC],
        [6, SETTINGS.BURSTSHUTTER_30_SEC]
    ]
}, {
    setting: ["32", SETTINGS.SETTING_BURSTINTERVAL],
    states: [
        [0, SETTINGS.BURSTINTERVAL_CONTINUOUS],
        [4, SETTINGS.BURSTINTERVAL_4_SEC],
        [10, SETTINGS.BURSTINTERVAL_10_SEC],
        [15, SETTINGS.BURSTINTERVAL_15_SEC],
        [20, SETTINGS.BURSTINTERVAL_20_SEC],
        [30, SETTINGS.BURSTINTERVAL_30_SEC],
        [60, SETTINGS.BURSTINTERVAL_1_MIN],
        [120, SETTINGS.BURSTINTERVAL_2_MIN],
        [300, SETTINGS.BURSTINTERVAL_5_MIN],
        [1800, SETTINGS.BURSTINTERVAL_30_MIN],
        [3600, SETTINGS.BURSTINTERVAL_60_MIN]
    ]
}, {
    setting: ["33", SETTINGS.SETTING_SPOTMETERBURST],
    states: [
        [0, SETTINGS.SPOTMETERBURST_OFF],
        [1, SETTINGS.SPOTMETERBURST_ON]
    ]
}, {
    setting: ["34", SETTINGS.SETTING_PROTUNEBURST],
    states: [
        [0, SETTINGS.PROTUNEBURST_OFF],
        [1, SETTINGS.PROTUNEBURST_ON]
    ]
}, {
    setting: ["35", SETTINGS.SETTING_WHITEBALANCEBURST],
    states: [
        [0, SETTINGS.WHITEBALANCEBURST_AUTO],
        [1, SETTINGS.WHITEBALANCEBURST_3000K],
        [2, SETTINGS.WHITEBALANCEBURST_5500K],
        [3, SETTINGS.WHITEBALANCEBURST_6500K],
        [4, SETTINGS.WHITEBALANCEBURST_CAM_RAW]
    ]
}, {
    setting: ["36", SETTINGS.SETTING_COLORBURST],
    states: [
        [0, SETTINGS.COLORBURST_GOPRO_COLOR],
        [1, SETTINGS.COLORBURST_FLAT]
    ]
}, {
    setting: ["37", SETTINGS.SETTING_ISOBURST],
    states: [
        [0, SETTINGS.ISOBURST_6400],
        [1, SETTINGS.ISOBURST_1600],
        [2, SETTINGS.ISOBURST_400]
    ]
}, {
    setting: ["38", SETTINGS.SETTING_SHARPNESSBURST],
    states: [
        [0, SETTINGS.SHARPNESSBURST_HIGH],
        [1, SETTINGS.SHARPNESSBURST_MEDIUM],
        [2, SETTINGS.SHARPNESSBURST_LOW]
    ]
}, {
    setting: ["39", SETTINGS.SETTING_EXPOSUREBURST],
    states: [
        [0, SETTINGS.EXPOSUREBURST__2_0],
        [1, SETTINGS.EXPOSUREBURST__1_5],
        [2, SETTINGS.EXPOSUREBURST__1_0],
        [3, SETTINGS.EXPOSUREBURST__0_5],
        [4, SETTINGS.EXPOSUREBURST_0],
        [5, SETTINGS.EXPOSUREBURST__plus_0_5],
        [6, SETTINGS.EXPOSUREBURST__plus_1_0],
        [7, SETTINGS.EXPOSUREBURST__plus_1_5],
        [8, SETTINGS.EXPOSUREBURST__plus_2_0]
    ]
}, {
    setting: ["52", SETTINGS.SETTING_ORIENTATION],
    states: [
        [2, SETTINGS.ORIENTATION_DOWN],
        [1, SETTINGS.ORIENTATION_UP],
        [0, SETTINGS.ORIENTATION_AUTO]
    ]
}, {
    setting: ["55", SETTINGS.SETTING_LED],
    states: [
        [0, SETTINGS.LED_OFF],
        [1, SETTINGS.LED_2],
        [2, SETTINGS.LED_4]
    ]
}, {
    setting: ["56", SETTINGS.SETTING_VOLUME],
    states: [
        [0, SETTINGS.VOLUME_100_],
        [1, SETTINGS.VOLUME_70_],
        [2, SETTINGS.VOLUME_OFF]
    ]
}, {
    setting: ["57", SETTINGS.SETTING_VIDEOREGION],
    states: [
        [0, SETTINGS.VIDEOREGION_NTSC],
        [1, SETTINGS.VIDEOREGION_PAL]
    ]
}];
var GOPRO_ADDRESS = "http://10.5.5.9";
var GoProVersion = {
    UNKNOWN: 0,
    THREE_BLACK: 1,
    THREE_SILVER: 2,
    THREE_WHITE: 3,
    THREE_PLUS_BLACK: 4,
    THREE_PLUS_SILVER: 5,
    HD2: 6,
    HD4_SILVER: 7,
    HD4_BLACK: 8
};
var gopro = {
    password: null,
    version: GoProVersion.UNKNOWN,
    settings: [],
    menus: [],
    mode: 0,
    photo_count: 123,
    video_count: 456,
    photo_remaining: 3456,
    video_remaining: 5e3,
    video_progress: 0,
    photo_progress: 0,
    recording: 0
};
var ajax = (function() {
    var formify = function(data) {
        var params = [],
            i = 0;
        for (var name in data) {
            params[i++] = encodeURIComponent(name) + "=" + encodeURIComponent(data[name]);
        }
        return params.join("&");
    };
    var deformify = function(form) {
        var params = {};
        form.replace(/(?:([^=&]*)=?([^&]*)?)(?:&|$)/g, function(_, name, value) {
            if (name) {
                params[name] = value || true;
            }
            return _;
        });
        return params;
    };
    var req_timeout = 6e3;
    var ajax = function(opt, success, failure, timeout) {
        if (typeof opt === "string") {
            opt = {
                url: opt
            };
        }
        var method = opt.method || "GET";
        var url = opt.url;
        var onHandler = ajax.onHandler;
        if (onHandler) {
            if (success) {
                success = onHandler("success", success);
            }
            if (failure) {
                failure = onHandler("failure", failure);
            }
        }
        if (opt.cache === false) {
            var appendSymbol = url.indexOf("?") === -1 ? "?" : "&";
            url += appendSymbol + "_=" + (new Date()).getTime();
        }
        var req = new XMLHttpRequest();
        req.open(method.toUpperCase(), url, opt.async !== false);
        req.responseType = opt.responseType || "text";
        var headers = opt.headers;
        if (headers) {
            for (var name in headers) {
                req.setRequestHeader(name, headers[name]);
            }
        }
        var data = opt.data;
        if (data) {
            if (method === "GET") {
                var appendSymbol = url.indexOf("?") === -1 ? "?" : "&";
                url += appendSymbol + formify(opt.data);
            } else if (opt.type === "json") {
                req.setRequestHeader("Content-Type", "application/json");
                data = JSON.stringify(opt.data);
            } else if (opt.type !== "text") {
                req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                data = formify(opt.data);
            }
        }
        req.onreadystatechange = function(e) {
            if (req.readyState === 4) {
                clearTimeout(xhrTimeout);
                var okay = req.status >= 200 && req.status < 300 || req.status === 304;
                var callback = okay ? success : failure;
                if (callback) {
                    callback(req);
                }
            }
        };
        if (LOG_LEVEL <= 0) console.log(method + " " + url);
        req.send(data);
        var xhrTimeout = setTimeout(function() {
            req.abort();
            if (timeout) timeout();
        }, req_timeout);
    };
    ajax.formify = formify;
    ajax.deformify = deformify;
    if (typeof module !== "undefined") {
        module.exports = ajax;
    } else {
        window.ajax = ajax;
    }
    return ajax;
}());

function updateGP3(status) {
    if (LOG_LEVEL <= 0) console.log("updateGP3");
    gopro.settings[SETTINGS.SETTING_BATTERY] = status[19] & 255;
    gopro.recording = status[29] & 255;
    gopro.video_progress = (status[13] & 255) * 60 + (status[14] & 255);
    gopro.photo_remaining = ((status[21] & 255) << 8) + (status[22] & 255);
    gopro.video_remaining = ((status[25] & 255) << 8) + (status[26] & 255);
    gopro.photo_count = ((status[23] & 255) << 8) + (status[24] & 255);
    gopro.video_count = ((status[27] & 255) << 8) + (status[28] & 255);
    gopro.mode = status[1] & 255;
    if (gopro.version === GoProVersion.HD2) {
        var hd2_video_modesValue = status[9];
        if (hd2_video_modesValue === 6) {
            status[50] = 3;
            status[51] = 4;
        } else if (hd2_video_modesValue === 5) {
            status[50] = 2;
            status[51] = 7;
        } else if (hd2_video_modesValue === 4) {
            status[50] = 2;
            status[51] = 4;
        } else if (hd2_video_modesValue === 3) {
            status[50] = 1;
            status[51] = 7;
        } else if (hd2_video_modesValue === 2) {
            status[50] = 1;
            status[51] = 4;
        } else if (hd2_video_modesValue === 1) {
            status[50] = 0;
            status[51] = 9;
        } else if (hd2_video_modesValue === 0) {
            status[50] = 0;
            status[51] = 7;
        }
        var battery = status[19];
        if (battery < 10) {
            status[19] = 0;
        } else if (battery < 33) {
            status[19] = 1;
        } else if (battery < 66) {
            status[19] = 2;
        } else {
            status[19] = 3;
        }
        status[32] = 2;
    }
    updateGP3Settings(status);
    updateGP3Menus(status);
}

function getGP3CommandStr(command, value) {
    if (command === SETTINGS.SETTING_SHUTTER) {
        if (value === SETTINGS.SHUTTER_ON) return "bacpac/SH?t=" + gopro.password + "&p=%01";
        else return "bacpac/SH?t=" + gopro.password + "&p=%00";
    } else if (command === SETTINGS.SETTING_POWER) {
        if (value === SETTINGS.POWER_ON) return "bacpac/PW?t=" + gopro.password + "&p=%01";
        else return "bacpac/PW?t=" + gopro.password + "&p=%00";
    } else {
        var gSetting = findGP3Command(command);
        var gValue = findGP3Value(command, value);
        gValue = ("00" + gValue.toString(16).toUpperCase()).slice(-2);
        return "camera/" + gSetting + "?t=" + gopro.password + "&p=%" + gValue;
    }
}

function updateGP3Settings(status) {
    for (var i = 0; i < configurationgp3.length; i++) {
        var ext_setting = configurationgp3[i].setting[0];
        var int_setting = configurationgp3[i].setting[1];
        if (ext_setting < status.length) {
            var value = status[ext_setting];
            var states = configurationgp3[i].states;
            if (configurationgp3[i].offset) {
                var mask = configurationgp3[i].mask | 1;
                value = value >> configurationgp3[i].offset & mask;
            }
            for (var j = 0; j < states.length; j++) {
                if (states[j][0] === value) {
                    gopro.settings[int_setting] = states[j][1];
                    break;
                }
            }
        }
    }
}

function updateGP3Menus(status) {
    gopro.menus = [];
    var videoRes = gopro.settings[SETTINGS.SETTING_VIDEORES];
    var videoRegion = gopro.settings[SETTINGS.SETTING_VIDEOREGION];
    var videoFPS = gopro.settings[SETTINGS.SETTING_FPS];
    if (gopro.version === GoProVersion.HD2) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOMODE_GP2);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
        gopro.menus.push(SETTINGS.PHOTORES_10_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_8_MP_MED);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
        gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
        gopro.menus.push(SETTINGS.FOV_WIDE);
        if (gopro.settings[SETTINGS.SETTING_VIDEOMODE_GP2] === SETTINGS.VIDEOMODE_GP2_1080_30) gopro.menus.push(SETTINGS.FOV_MEDIUM);
        addDefaultMenuGP3(SETTINGS.SETTING_VIDEOMODE_GP2);
    } else if (gopro.version === GoProVersion.THREE_BLACK) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES);
        gopro.menus.push(SETTINGS.SETTING_PHOTOCONTINUOUSRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {}
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
        }
        gopro.menus.push(SETTINGS.SETTING_PROTUNE);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_ON) {
            gopro.menus.push(SETTINGS.SETTING_WHITEBALANCE);
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
        gopro.menus.push(SETTINGS.PHOTORES_12_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_7_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_7_MP_MED);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_4K_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_2_7K_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_4K);
        gopro.menus.push(SETTINGS.VIDEORES_2_7K);
        gopro.menus.push(SETTINGS.VIDEORES_1440);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_960);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.VIDEORES_WVGA);
        }
        gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
        gopro.menus.push(SETTINGS.FOV_WIDE);
        if (videoRes === SETTINGS.VIDEORES_2_7K_SUPERVIEW || videoRes === SETTINGS.VIDEORES_2_7K || videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_720 && !(videoFPS == SETTINGS.FPS_100_FPS || videoFPS == SETTINGS.FPS_120_FPS)) {
            gopro.menus.push(SETTINGS.FOV_MEDIUM);
        }
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_720) {
            gopro.menus.push(SETTINGS.FOV_NARROW);
        }
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        switch (videoRes) {
            case SETTINGS.VIDEORES_4K_SUPERVIEW:
                gopro.menus.push(SETTINGS.FPS_12_FPS);
                break;
            case SETTINGS.VIDEORES_2_7K_SUPERVIEW:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                break;
            case SETTINGS.VIDEORES_4K:
                gopro.menus.push(SETTINGS.FPS_15_FPS);
                break;
            case SETTINGS.VIDEORES_2_7K:
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                break;
            case SETTINGS.VIDEORES_1440:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                gopro.menus.push(SETTINGS.FPS_48_FPS);
                break;
            case SETTINGS.VIDEORES_1080:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                gopro.menus.push(SETTINGS.FPS_48_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                }
                break;
            case SETTINGS.VIDEORES_960:
                if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
                    gopro.menus.push(SETTINGS.FPS_48_FPS);
                }
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                    gopro.menus.push(SETTINGS.FPS_100_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                    gopro.menus.push(SETTINGS.FPS_120_FPS);
                }
                break;
            case SETTINGS.VIDEORES_720:
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                    gopro.menus.push(SETTINGS.FPS_100_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                    gopro.menus.push(SETTINGS.FPS_120_FPS);
                }
                break;
            case SETTINGS.VIDEORES_WVGA:
                gopro.menus.push(SETTINGS.FPS_240_FPS);
                break;
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES);
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_FOV);
        addDefaultMenuGP3(SETTINGS.SETTING_BURSTRATE);
    } else if (gopro.version === GoProVersion.THREE_SILVER) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES);
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
        }
        gopro.menus.push(SETTINGS.SETTING_PROTUNE);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_ON) {
            gopro.menus.push(SETTINGS.SETTING_WHITEBALANCE);
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
        gopro.menus.push(SETTINGS.PHOTORES_10_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_8_MP_MED);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_960);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.VIDEORES_WVGA);
        }
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE & 255 | 128);
        gopro.menus.push(SETTINGS.BURSTRATE_3_1_SEC);
        gopro.menus.push(SETTINGS.BURSTRATE_5_1_SEC);
        gopro.menus.push(SETTINGS.BURSTRATE_10_1_SEC);
        gopro.menus.push(SETTINGS.BURSTRATE_10_2_SEC);
        gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
        gopro.menus.push(SETTINGS.FOV_WIDE);
        if (gopro.settings[SETTINGS.SETTING_VIDEORES] === SETTINGS.VIDEORES_1080) {
            gopro.menus.push(SETTINGS.FOV_MEDIUM);
            gopro.menus.push(SETTINGS.FOV_NARROW);
        }
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        if (videoRes === SETTINGS.VIDEORES_1080) {
            gopro.menus.push(SETTINGS.FPS_24_FPS);
        }
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_960 || videoRes === SETTINGS.VIDEORES_720) {
            if (videoRegion === SETTINGS.VIDEOREGION_PAL) gopro.menus.push(SETTINGS.FPS_25_FPS);
            else gopro.menus.push(SETTINGS.FPS_30_FPS);
        }
        if (videoRegion === SETTINGS.VIDEOREGION_NTSC && videoRes === SETTINGS.VIDEORES_960) gopro.menus.push(SETTINGS.FPS_48_FPS);
        if (videoRegion === SETTINGS.VIDEOREGION_PAL && (videoRes === SETTINGS.VIDEORES_960 || videoRes === SETTINGS.VIDEORES_720)) gopro.menus.push(SETTINGS.FPS_50_FPS);
        if (videoRegion === SETTINGS.VIDEOREGION_NTSC && videoRes === SETTINGS.VIDEORES_720) gopro.menus.push(SETTINGS.FPS_60_FPS);
        if (videoRes === SETTINGS.VIDEORES_WVGA) {
            if (videoRegion === SETTINGS.VIDEOREGION_PAL) gopro.menus.push(SETTINGS.FPS_100_FPS);
            else gopro.menus.push(SETTINGS.FPS_120_FPS);
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES);
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_FOV);
    } else if (gopro.version === GoProVersion.THREE_WHITE) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES);
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_960);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        gopro.menus.push(SETTINGS.VIDEORES_WVGA);
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_960 || videoRes === SETTINGS.VIDEORES_720) {
            if (gopro.settings[SETTINGS.SETTING_VIDEOREGION] === SETTINGS.VIDEOREGION_PAL) {
                gopro.menus.push(SETTINGS.FPS_25_FPS);
            } else {
                gopro.menus.push(SETTINGS.FPS_30_FPS);
            }
        }
        if (videoRes === SETTINGS.VIDEORES_720 || videoRes === SETTINGS.VIDEORES_WVGA) {
            if (gopro.settings[SETTINGS.SETTING_VIDEOREGION] === SETTINGS.VIDEOREGION_PAL) {
                gopro.menus.push(SETTINGS.FPS_50_FPS);
            } else {
                gopro.menus.push(SETTINGS.FPS_60_FPS);
            }
        }
    } else if (gopro.version === GoProVersion.THREE_PLUS_BLACK) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES);
        gopro.menus.push(SETTINGS.SETTING_PHOTOCONTINUOUSRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {}
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
        }
        gopro.menus.push(SETTINGS.SETTING_PROTUNE);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_ON) {
            gopro.menus.push(SETTINGS.SETTING_WHITEBALANCE);
            gopro.menus.push(SETTINGS.SETTING_COLOR);
            gopro.menus.push(SETTINGS.SETTING_ISO);
            gopro.menus.push(SETTINGS.SETTING_SHARPNESS);
            gopro.menus.push(SETTINGS.SETTING_EXPOSURE);
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
        gopro.menus.push(SETTINGS.PHOTORES_12_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_7_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_7_MP_MED);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_4K_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_2_7K_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_4K);
        gopro.menus.push(SETTINGS.VIDEORES_2_7K);
        gopro.menus.push(SETTINGS.VIDEORES_1440);
        gopro.menus.push(SETTINGS.VIDEORES_1080_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_960);
        gopro.menus.push(SETTINGS.VIDEORES_720_SUPERVIEW);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
            gopro.menus.push(SETTINGS.VIDEORES_WVGA);
        }
        gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
        gopro.menus.push(SETTINGS.FOV_WIDE);
        if (videoRes === SETTINGS.VIDEORES_2_7K_SUPERVIEW || videoRes === SETTINGS.VIDEORES_2_7K || videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_720 && !(videoFPS == SETTINGS.FPS_100_FPS || videoFPS == SETTINGS.FPS_120_FPS)) {
            gopro.menus.push(SETTINGS.FOV_MEDIUM);
        }
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_720) {
            gopro.menus.push(SETTINGS.FOV_NARROW);
        }
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        switch (videoRes) {
            case SETTINGS.VIDEORES_4K_SUPERVIEW:
                gopro.menus.push(SETTINGS.FPS_12_FPS);
                break;
            case SETTINGS.VIDEORES_4K:
                gopro.menus.push(SETTINGS.FPS_15_FPS);
                break;
            case SETTINGS.VIDEORES_2_7K_SUPERVIEW:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                break;
            case SETTINGS.VIDEORES_2_7K:
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                break;
            case SETTINGS.VIDEORES_1440:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                gopro.menus.push(SETTINGS.FPS_48_FPS);
                break;
            case SETTINGS.VIDEORES_1080_SUPERVIEW:
            case SETTINGS.VIDEORES_1080:
                gopro.menus.push(SETTINGS.FPS_24_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                }
                gopro.menus.push(SETTINGS.FPS_48_FPS);
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                }
                break;
            case SETTINGS.VIDEORES_960:
                if (gopro.settings[SETTINGS.SETTING_PROTUNE] === SETTINGS.PROTUNE_OFF) {
                    gopro.menus.push(SETTINGS.FPS_48_FPS);
                }
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                    gopro.menus.push(SETTINGS.FPS_100_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                    gopro.menus.push(SETTINGS.FPS_120_FPS);
                }
                break;
            case SETTINGS.VIDEORES_720_SUPERVIEW:
            case SETTINGS.VIDEORES_720:
                if (videoRegion === SETTINGS.VIDEOREGION_PAL) {
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                    gopro.menus.push(SETTINGS.FPS_100_FPS);
                } else {
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                    gopro.menus.push(SETTINGS.FPS_120_FPS);
                }
                break;
            case SETTINGS.VIDEORES_WVGA:
                gopro.menus.push(SETTINGS.FPS_240_FPS);
                break;
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES);
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_AUTOLOWLIGHT);
        addDefaultMenuGP3(SETTINGS.SETTING_BURSTRATE);
    } else if (gopro.version === GoProVersion.THREE_PLUS_SILVER) {
        gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES);
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE);
        gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
        gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETER);
        gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
        gopro.menus.push(SETTINGS.SETTING_PROTUNE);
        gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
        gopro.menus.push(SETTINGS.SETTING_LED);
        gopro.menus.push(SETTINGS.SETTING_VOLUME);
        gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
        gopro.menus.push(SETTINGS.PHOTORES_10_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_7_MP_WIDE);
        gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_960);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        gopro.menus.push(SETTINGS.VIDEORES_WVGA);
        gopro.menus.push(SETTINGS.SETTING_BURSTRATE & 255 | 128);
        gopro.menus.push(SETTINGS.BURSTRATE_3_1_SEC);
        gopro.menus.push(SETTINGS.BURSTRATE_5_1_SEC);
        gopro.menus.push(SETTINGS.BURSTRATE_10_1_SEC);
        gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
        gopro.menus.push(SETTINGS.FOV_WIDE);
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_720) {
            gopro.menus.push(SETTINGS.FOV_MEDIUM);
            gopro.menus.push(SETTINGS.FOV_NARROW);
        }
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        if (videoRes === SETTINGS.VIDEORES_1080 || videoRes === SETTINGS.VIDEORES_960 || videoRes === SETTINGS.VIDEORES_720) {
            gopro.menus.push(videoRegion === SETTINGS.VIDEOREGION_PAL ? SETTINGS.FPS_25_FPS : SETTINGS.FPS_30_FPS);
        }
        gopro.menus.push(videoRegion === SETTINGS.VIDEOREGION_PAL ? SETTINGS.FPS_50_FPS : SETTINGS.FPS_60_FPS);
        if (videoRes === SETTINGS.VIDEORES_WVGA || videoRes === SETTINGS.VIDEORES_720) {
            gopro.menus.push(videoRegion === SETTINGS.VIDEOREGION_PAL ? SETTINGS.FPS_100_FPS : SETTINGS.FPS_120_FPS);
        }
        gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
        gopro.menus.push(SETTINGS.SETTING_VIDEORES);
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_FOV);
    }
    addDefaultMenuGP3(SETTINGS.SETTING_MODE);
    addDefaultMenuGP3(SETTINGS.SETTING_BURSTTIMELAPSE);
    addDefaultMenuGP3(SETTINGS.SETTING_PHOTOCONTINUOUSRATE);
    addDefaultMenuGP3(SETTINGS.SETTING_VIDEOPHOTOINTERVAL);
    addDefaultMenuGP3(SETTINGS.SETTING_ORIENTATION);
    addDefaultMenuGP3(SETTINGS.SETTING_SPOTMETER);
    addDefaultMenuGP3(SETTINGS.SETTING_LOOPVIDEO);
    addDefaultMenuGP3(SETTINGS.SETTING_VIDEOREGION);
    addDefaultMenuGP3(SETTINGS.SETTING_LED);
    addDefaultMenuGP3(SETTINGS.SETTING_VOLUME);
    addDefaultMenuGP3(SETTINGS.SETTING_PROTUNE);
    addDefaultMenuGP3(SETTINGS.SETTING_AUTOLOWLIGHT);
}

function findGP3Command(setting) {
    for (var i = 0; i < configurationgp3.length; i++) {
        if (configurationgp3[i].setting[1] === setting) {
            return configurationgp3[i].command_name;
        }
    }
    return 0;
}

function findGP3Value(setting, value) {
    for (var i = 0; i < configurationgp3.length; i++) {
        if (configurationgp3[i].setting[1] === setting) {
            var states = configurationgp3[i].states;
            for (var j = 0; j < states.length; j++) {
                if (states[j][1] === value) return states[j][0];
            }
            return 0;
        }
    }
    return 0;
}

function addDefaultMenuGP3(setting) {
    gopro.menus.push(setting & 255 | 128);
    for (var i = 0; i < configurationgp3.length; i++) {
        if (configurationgp3[i].setting[1] === setting) {
            var states = configurationgp3[i].states;
            for (var j = 0; j < states.length; j++) {
                gopro.menus.push(states[j][1] & 255);
            }
            break;
        }
    }
}

function updateGP4(configuration) {
    if (LOG_LEVEL <= 0) console.log("updateGP4");
    var settings = configuration.settings;
    var status = configuration.status;
    gopro.settings[SETTINGS.SETTING_BATTERY] = status["2"];
    gopro.recording = status["8"];
    gopro.video_progress = status["13"];
    gopro.photo_remaining = status["34"];
    gopro.video_remaining = status["35"];
    gopro.photo_count = status["38"];
    gopro.video_count = status["37"];
    gopro.mode = status["43"];
    gopro.photo_progress = status["49"];
    updateGP4Settings(settings);
    updateGP4Menus(settings, status);
}

function getGP4CommandStr(command, value) {
    if (command === SETTINGS.SETTING_XMODE) {
        if (value === SETTINGS.SETTING_VIDEOSUBMODE) return "gp/gpControl/command/mode?p=0";
        if (value === SETTINGS.SETTING_PHOTOSUBMODE) return "gp/gpControl/command/mode?p=1";
        if (value === SETTINGS.SETTING_BURSTSUBMODE) return "gp/gpControl/command/mode?p=2";
    } else if (command === SETTINGS.SETTING_VIDEOSUBMODE) {
        return "gp/gpControl/command/sub_mode?mode=0&sub_mode=" + findExternalValue(command, value);
    } else if (command === SETTINGS.SETTING_PHOTOSUBMODE) {
        return "gp/gpControl/command/sub_mode?mode=1&sub_mode=" + findExternalValue(command, value);
    } else if (command === SETTINGS.SETTING_BURSTSUBMODE) {
        return "gp/gpControl/command/sub_mode?mode=2&sub_mode=" + findExternalValue(command, value);
    } else if (command === SETTINGS.SETTING_SHUTTER) {
        if (value === SETTINGS.SHUTTER_ON) return "gp/gpControl/command/shutter?p=1";
        else return "gp/gpControl/command/shutter?p=0";
    } else {
        var gSetting = findExternalSetting(command);
        var gValue = findExternalValue(command, value);
        return "gp/gpControl/setting/" + gSetting + "/" + gValue;
    }
    return "";
}

function updateGP4Settings(settings) {
    for (var i = 0; i < configurationgp4.length; i++) {
        var ext_setting = configurationgp4[i].setting[0];
        var int_setting = configurationgp4[i].setting[1];
        gopro.settings[int_setting] = findInternalValue(ext_setting, settings[ext_setting]);
    }
}

function updateGP4Menus(settings, status) {
    console.log("updateGP4Menus");
    gopro.menus = [];
    gopro.menus.push(SETTINGS.SETTING_XMODE & 255 | 128);
    gopro.menus.push(SETTINGS.SETTING_VIDEOSUBMODE);
    gopro.menus.push(SETTINGS.SETTING_PHOTOSUBMODE);
    gopro.menus.push(SETTINGS.SETTING_BURSTSUBMODE);
    gopro.menus.push(SETTINGS.SETTING_MAIN & 255 | 128);
    gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS);
    gopro.menus.push(SETTINGS.SETTING_PHOTOSETTINGS);
    gopro.menus.push(SETTINGS.SETTING_BURSTSETTINGS);
    gopro.menus.push(SETTINGS.SETTING_OTHERSETTINGS);
    gopro.menus.push(SETTINGS.SETTING_VIDEOSETTINGS & 255 | 128);
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_VIDEO_TIMELAPSE) gopro.menus.push(SETTINGS.SETTING_VIDEOTIMELAPSEINTERVAL);
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_VIDEO_plus_PHOTO) gopro.menus.push(SETTINGS.SETTING_VIDEOPHOTOINTERVAL);
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_LOOPING) gopro.menus.push(SETTINGS.SETTING_LOOPVIDEO);
    gopro.menus.push(SETTINGS.SETTING_VIDEORES);
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] !== SETTINGS.VIDEOSUBMODE_VIDEO_TIMELAPSE) {
        gopro.menus.push(SETTINGS.SETTING_FPS);
        gopro.menus.push(SETTINGS.SETTING_FOV);
        gopro.menus.push(SETTINGS.SETTING_SPOTMETERVIDEO);
    }
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_VIDEO) gopro.menus.push(SETTINGS.SETTING_PROTUNEVIDEO);
    if (gopro.settings[SETTINGS.SETTING_PROTUNEVIDEO] === SETTINGS.PROTUNEVIDEO_ON) {
        gopro.menus.push(SETTINGS.SETTING_WHITEBALANCEVIDEO);
        gopro.menus.push(SETTINGS.SETTING_COLORVIDEO);
        gopro.menus.push(SETTINGS.SETTING_ISOVIDEO);
        gopro.menus.push(SETTINGS.SETTING_SHARPNESSVIDEO);
        gopro.menus.push(SETTINGS.SETTING_EXPOSUREVIDEO);
    }
    gopro.menus.push(SETTINGS.SETTING_PHOTOSETTINGS & 255 | 128);
    if (gopro.settings[SETTINGS.SETTING_PHOTOSUBMODE] === SETTINGS.PHOTOSUBMODE_CONTINUOUS) gopro.menus.push(SETTINGS.SETTING_PHOTOCONTINUOUSRATE);
    if (gopro.settings[SETTINGS.SETTING_PHOTOSUBMODE] === SETTINGS.PHOTOSUBMODE_NIGHT) gopro.menus.push(SETTINGS.SETTING_PHOTOSHUTTER);
    gopro.menus.push(SETTINGS.SETTING_PHOTORES);
    gopro.menus.push(SETTINGS.SETTING_SPOTMETERPHOTO);
    gopro.menus.push(SETTINGS.SETTING_PROTUNEPHOTO);
    if (gopro.settings[SETTINGS.SETTING_PROTUNEPHOTO] === SETTINGS.PROTUNEPHOTO_ON) {
        gopro.menus.push(SETTINGS.SETTING_WHITEBALANCEPHOTO);
        gopro.menus.push(SETTINGS.SETTING_COLORPHOTO);
        gopro.menus.push(SETTINGS.SETTING_ISOPHOTO);
        gopro.menus.push(SETTINGS.SETTING_SHARPNESSPHOTO);
        gopro.menus.push(SETTINGS.SETTING_EXPOSUREPHOTO);
    }
    gopro.menus.push(SETTINGS.SETTING_BURSTSETTINGS & 255 | 128);
    if (gopro.settings[SETTINGS.SETTING_BURSTSUBMODE] === SETTINGS.BURSTSUBMODE_BURST) gopro.menus.push(SETTINGS.SETTING_BURSTRATE);
    if (gopro.settings[SETTINGS.SETTING_BURSTSUBMODE] === SETTINGS.BURSTSUBMODE_TIMELAPSE) gopro.menus.push(SETTINGS.SETTING_BURSTTIMELAPSE);
    if (gopro.settings[SETTINGS.SETTING_BURSTSUBMODE] === SETTINGS.BURSTSUBMODE_NIGHTLAPSE) {
        gopro.menus.push(SETTINGS.SETTING_BURSTSHUTTER);
        gopro.menus.push(SETTINGS.SETTING_BURSTINTERVAL);
    }
    gopro.menus.push(SETTINGS.SETTING_BURSTRES);
    gopro.menus.push(SETTINGS.SETTING_SPOTMETERBURST);
    gopro.menus.push(SETTINGS.SETTING_PROTUNEBURST);
    if (gopro.settings[SETTINGS.SETTING_PROTUNEBURST] === SETTINGS.PROTUNEBURST_ON) {
        gopro.menus.push(SETTINGS.SETTING_WHITEBALANCEBURST);
        gopro.menus.push(SETTINGS.SETTING_COLORBURST);
        gopro.menus.push(SETTINGS.SETTING_ISOBURST);
        gopro.menus.push(SETTINGS.SETTING_SHARPNESSBURST);
        gopro.menus.push(SETTINGS.SETTING_EXPOSUREBURST);
    }
    gopro.menus.push(SETTINGS.SETTING_OTHERSETTINGS & 255 | 128);
    gopro.menus.push(SETTINGS.SETTING_ORIENTATION);
    gopro.menus.push(SETTINGS.SETTING_LED);
    gopro.menus.push(SETTINGS.SETTING_VOLUME);
    gopro.menus.push(SETTINGS.SETTING_VIDEOREGION);
    var video_res = gopro.settings[SETTINGS.SETTING_VIDEORES];
    if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_VIDEO_plus_PHOTO) {
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_1440);
        gopro.menus.push(SETTINGS.VIDEORES_1080);
        gopro.menus.push(SETTINGS.VIDEORES_720);
        gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
        if (gopro.settings[SETTINGS.SETTING_VIDEOREGION] === SETTINGS.VIDEOREGION_NTSC) {
            switch (video_res) {
                case SETTINGS.VIDEORES_1440:
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                    gopro.menus.push(SETTINGS.FPS_24_FPS);
                    break;
                case SETTINGS.VIDEORES_1080:
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                    gopro.menus.push(SETTINGS.FPS_24_FPS);
                    break;
                case SETTINGS.VIDEORES_720:
                    gopro.menus.push(SETTINGS.FPS_60_FPS);
                    gopro.menus.push(SETTINGS.FPS_30_FPS);
                    break;
            }
        } else {
            switch (video_res) {
                case SETTINGS.VIDEORES_1440:
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                    gopro.menus.push(SETTINGS.FPS_24_FPS);
                    break;
                case SETTINGS.VIDEORES_1080:
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                    gopro.menus.push(SETTINGS.FPS_24_FPS);
                    break;
                case SETTINGS.VIDEORES_720:
                    gopro.menus.push(SETTINGS.FPS_50_FPS);
                    gopro.menus.push(SETTINGS.FPS_25_FPS);
                    break;
            }
        }
    } else if (gopro.settings[SETTINGS.SETTING_VIDEOSUBMODE] === SETTINGS.VIDEOSUBMODE_VIDEO_TIMELAPSE) {
        gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
        gopro.menus.push(SETTINGS.VIDEORES_4K);
        gopro.menus.push(SETTINGS.VIDEORES_2_7K_4_3);
    } else {
        if (gopro.version === GoProVersion.HD4_SILVER) {
            gopro.menus.push(SETTINGS.SETTING_VIDEORES & 255 | 128);
            gopro.menus.push(SETTINGS.VIDEORES_4K);
            gopro.menus.push(SETTINGS.VIDEORES_2_7K);
            gopro.menus.push(SETTINGS.VIDEORES_1440);
            gopro.menus.push(SETTINGS.VIDEORES_1080);
            gopro.menus.push(SETTINGS.VIDEORES_1080_SUPERVIEW);
            gopro.menus.push(SETTINGS.VIDEORES_960);
            gopro.menus.push(SETTINGS.VIDEORES_720);
            gopro.menus.push(SETTINGS.VIDEORES_720_SUPERVIEW);
            gopro.menus.push(SETTINGS.VIDEORES_WVGA);
            gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
            if (gopro.settings[SETTINGS.SETTING_VIDEOREGION] === SETTINGS.VIDEOREGION_NTSC) {
                switch (video_res) {
                    case SETTINGS.VIDEORES_4K:
                        gopro.menus.push(SETTINGS.FPS_15_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K:
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1440:
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1080_SUPERVIEW:
                    case SETTINGS.VIDEORES_1080:
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_960:
                    case SETTINGS.VIDEORES_720_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_100_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        break;
                    case SETTINGS.VIDEORES_720:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        break;
                    case SETTINGS.VIDEORES_WVGA:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        break;
                }
            } else {
                switch (video_res) {
                    case SETTINGS.VIDEORES_4K:
                        gopro.menus.push(SETTINGS.FPS_12_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K:
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1440:
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1080_SUPERVIEW:
                    case SETTINGS.VIDEORES_1080:
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_960:
                    case SETTINGS.VIDEORES_720_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_100_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        break;
                    case SETTINGS.VIDEORES_720:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        break;
                    case SETTINGS.VIDEORES_WVGA:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        break;
                }
            }
        } else {
            addDefaultMenu(SETTINGS.SETTING_VIDEORES);
            gopro.menus.push(SETTINGS.SETTING_FPS & 255 | 128);
            if (gopro.settings[SETTINGS.SETTING_VIDEOREGION] === SETTINGS.VIDEOREGION_NTSC) {
                switch (video_res) {
                    case SETTINGS.VIDEORES_4K:
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_4K_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K:
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K_SUPERVIEW:
                    case SETTINGS.VIDEORES_2_7K_4_3:
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        break;
                    case SETTINGS.VIDEORES_1440:
                    case SETTINGS.VIDEORES_1080_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_80_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1080:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_90_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_960:
                    case SETTINGS.VIDEORES_720_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        break;
                    case SETTINGS.VIDEORES_720:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_60_FPS);
                        gopro.menus.push(SETTINGS.FPS_30_FPS);
                        break;
                    case SETTINGS.VIDEORES_WVGA:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        break;
                }
            } else {
                switch (video_res) {
                    case SETTINGS.VIDEORES_4K:
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_4K_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K:
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_2_7K_SUPERVIEW:
                    case SETTINGS.VIDEORES_2_7K_4_3:
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        break;
                    case SETTINGS.VIDEORES_1440:
                    case SETTINGS.VIDEORES_1080_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_80_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_1080:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_90_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_48_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        gopro.menus.push(SETTINGS.FPS_24_FPS);
                        break;
                    case SETTINGS.VIDEORES_960:
                    case SETTINGS.VIDEORES_720_SUPERVIEW:
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        break;
                    case SETTINGS.VIDEORES_720:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        gopro.menus.push(SETTINGS.FPS_120_FPS);
                        gopro.menus.push(SETTINGS.FPS_50_FPS);
                        gopro.menus.push(SETTINGS.FPS_25_FPS);
                        break;
                    case SETTINGS.VIDEORES_WVGA:
                        gopro.menus.push(SETTINGS.FPS_240_FPS);
                        break;
                }
            }
        }
    }
    gopro.menus.push(SETTINGS.SETTING_FOV & 255 | 128);
    gopro.menus.push(SETTINGS.FOV_WIDE);
    if (video_res === SETTINGS.VIDEORES_2_7K || video_res === SETTINGS.VIDEORES_1080 || video_res === SETTINGS.VIDEORES_720 && gopro.settings[SETTINGS.SETTING_FPS] !== SETTINGS.FPS_240_FPS) gopro.menus.push(SETTINGS.FOV_MEDIUM);
    if (video_res === SETTINGS.VIDEORES_1080 || video_res === SETTINGS.VIDEORES_720) gopro.menus.push(SETTINGS.FOV_NARROW);
    gopro.menus.push(SETTINGS.SETTING_PHOTORES & 255 | 128);
    gopro.menus.push(SETTINGS.PHOTORES_12_MP_WIDE);
    gopro.menus.push(SETTINGS.PHOTORES_7_MP_WIDE);
    gopro.menus.push(SETTINGS.PHOTORES_7_MP_MED);
    gopro.menus.push(SETTINGS.PHOTORES_5_MP_MED);
    gopro.menus.push(SETTINGS.SETTING_PHOTOCONTINUOUSRATE & 255 | 128);
    gopro.menus.push(SETTINGS.PHOTOCONTINUOUSRATE_3_FPS);
    gopro.menus.push(SETTINGS.PHOTOCONTINUOUSRATE_5_FPS);
    gopro.menus.push(SETTINGS.PHOTOCONTINUOUSRATE_10_FPS);
    gopro.menus.push(SETTINGS.SETTING_BURSTRES & 255 | 128);
    gopro.menus.push(SETTINGS.BURSTRES_12_MP_WIDE);
    gopro.menus.push(SETTINGS.BURSTRES_7_MP_WIDE);
    gopro.menus.push(SETTINGS.BURSTRES_7_MP_MED);
    gopro.menus.push(SETTINGS.BURSTRES_5_MP_MED);
    addDefaultMenu(SETTINGS.SETTING_VIDEOSUBMODE);
    addDefaultMenu(SETTINGS.SETTING_PHOTOSUBMODE);
    addDefaultMenu(SETTINGS.SETTING_BURSTSUBMODE);
    addDefaultMenu(SETTINGS.SETTING_VIDEOTIMELAPSEINTERVAL);
    addDefaultMenu(SETTINGS.SETTING_VIDEOPHOTOINTERVAL);
    addDefaultMenu(SETTINGS.SETTING_LOOPVIDEO);
    addDefaultMenu(SETTINGS.SETTING_AUTOLOWLIGHT);
    addDefaultMenu(SETTINGS.SETTING_SPOTMETERVIDEO);
    addDefaultMenu(SETTINGS.SETTING_PROTUNEVIDEO);
    addDefaultMenu(SETTINGS.SETTING_WHITEBALANCEVIDEO);
    addDefaultMenu(SETTINGS.SETTING_COLORVIDEO);
    addDefaultMenu(SETTINGS.SETTING_ISOVIDEO);
    addDefaultMenu(SETTINGS.SETTING_SHARPNESSVIDEO);
    addDefaultMenu(SETTINGS.SETTING_EXPOSUREVIDEO);
    addDefaultMenu(SETTINGS.SETTING_PHOTOSHUTTER);
    addDefaultMenu(SETTINGS.SETTING_PHOTORES);
    addDefaultMenu(SETTINGS.SETTING_SPOTMETERPHOTO);
    addDefaultMenu(SETTINGS.SETTING_PROTUNEPHOTO);
    addDefaultMenu(SETTINGS.SETTING_WHITEBALANCEPHOTO);
    addDefaultMenu(SETTINGS.SETTING_COLORPHOTO);
    addDefaultMenu(SETTINGS.SETTING_ISOPHOTO);
    addDefaultMenu(SETTINGS.SETTING_SHARPNESSPHOTO);
    addDefaultMenu(SETTINGS.SETTING_EXPOSUREPHOTO);
    addDefaultMenu(SETTINGS.SETTING_BURSTRATE);
    addDefaultMenu(SETTINGS.SETTING_BURSTSHUTTER);
    addDefaultMenu(SETTINGS.SETTING_BURSTINTERVAL);
    addDefaultMenu(SETTINGS.SETTING_BURSTTIMELAPSE);
    addDefaultMenu(SETTINGS.SETTING_BURSTRES);
    addDefaultMenu(SETTINGS.SETTING_SPOTMETERBURST);
    addDefaultMenu(SETTINGS.SETTING_PROTUNEBURST);
    addDefaultMenu(SETTINGS.SETTING_WHITEBALANCEBURST);
    addDefaultMenu(SETTINGS.SETTING_COLORBURST);
    addDefaultMenu(SETTINGS.SETTING_ISOBURST);
    addDefaultMenu(SETTINGS.SETTING_SHARPNESSBURST);
    addDefaultMenu(SETTINGS.SETTING_EXPOSUREBURST);
    addDefaultMenu(SETTINGS.SETTING_ORIENTATION);
    addDefaultMenu(SETTINGS.SETTING_LED);
    addDefaultMenu(SETTINGS.SETTING_VOLUME);
    addDefaultMenu(SETTINGS.SETTING_VIDEOREGION);
    console.log("end updateGP4Menus");
}

function addDefaultMenu(setting) {
    gopro.menus.push(setting & 255 | 128);
    for (var i = 0; i < configurationgp4.length; i++) {
        if (configurationgp4[i].setting[1] === setting) {
            var states = configurationgp4[i].states;
            for (var j = 0; j < states.length; j++) {
                gopro.menus.push(states[j][1] & 255);
            }
            break;
        }
    }
}

function findInternalSetting(setting) {
    for (var i = 0; i < configurationgp4.length; i++) {
        if (configurationgp4[i].setting[0] === setting) {
            return configurationgp4[i].setting[1];
        }
    }
    return 0;
}

function findInternalValue(setting, value) {
    for (var i = 0; i < configurationgp4.length; i++) {
        if (configurationgp4[i].setting[0] === setting) {
            var states = configurationgp4[i].states;
            for (var j = 0; j < states.length; j++) {
                if (states[j][0] === value) return states[j][1];
            }
            return 0;
        }
    }
    return 0;
}

function findExternalSetting(setting) {
    for (var i = 0; i < configurationgp4.length; i++) {
        if (configurationgp4[i].setting[1] === setting) {
            return configurationgp4[i].setting[0];
        }
    }
    return 0;
}

function findExternalValue(setting, value) {
    for (var i = 0; i < configurationgp4.length; i++) {
        if (configurationgp4[i].setting[1] === setting) {
            var states = configurationgp4[i].states;
            for (var j = 0; j < states.length; j++) {
                if (states[j][1] === value) return states[j][0];
            }
            return 0;
        }
    }
    return 0;
}

function getLastImage(success, failure, timeout) {
    var o = {
        url: GOPRO_ADDRESS + "/gp/gpMediaList",
        type: "json"
    };
    ajax(o, function(req) {
        var json = JSON.parse(req.responseText);
        var mediaLength = json.media.length;
        var folder = json.media[mediaLength - 1].d;
        var fileLength = json.media[mediaLength - 1].fs.length;
        var file = json.media[mediaLength - 1].fs[fileLength - 1].n;
        var fileName = folder + "/" + file;
        var j = new JpegImage();
        j.onload = function() {
            if (LOG_LEVEL <= 0) console.log("Image decoded : size " + j.width + "x" + j.height);
            var ratioX = 144 / j.width;
            var ratioY = 108 / j.height;
            var ratio = ratioX < ratioY ? ratioX : ratioY;
            var width = Math.floor(j.width * ratio);
            var height = Math.floor(j.height * ratio);
            var data = j.getData(width, height);
            var grey_scale = greyScale(data, width, height);
            floydSteinberg(grey_scale, width, height);
            var bitmap = toPebbleBitmap(grey_scale, width, height);
            if (success) success(bitmap);
        };
        j.load(GOPRO_ADDRESS + "/gp/gpMediaMetadata?p=" + fileName);
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getLastImage error");
        if (failure) failure();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getLastImage timeout");
        if (timeout) timeout();
    });
}

function getPassword(success, failure, timeout) {
    if (LOG_LEVEL <= 0) console.log("getPassword");
    var o = {
        url: GOPRO_ADDRESS + "/bacpac/sd"
    };
    ajax(o, function(req) {
        gopro.password = req.responseText.substring(2);
        if (LOG_LEVEL <= 0) console.log("getPassword success is: " + gopro.password);
        if (success) success();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getPassword error");
        gopro.password = null;
        if (failure) failure();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getPassword timeout");
        gopro.password = null;
        if (timeout) timeout();
    });
}

function getVersion(success, failure, timeout) {
    if (LOG_LEVEL <= 0) console.log("getVersion");
    var o = {
        url: GOPRO_ADDRESS + "/camera/cv",
        responseType: "arraybuffer"
    };
    ajax(o, function(req) {
        var byteArray = new Uint8Array(req.response);
        var normalArray = [];
        for (var i = 0; i < byteArray.length; i++) {
            normalArray[i] = byteArray[i] & 255;
        }
        var version = bin2String(normalArray, 4, normalArray.length);
        version = version.toUpperCase();
        if (version.indexOf("HD3.01") != -1 || version.indexOf("HD3.09") != -1) {
            gopro.version = GoProVersion.THREE_WHITE;
        } else if (version.indexOf("HD3.02") != -1) {
            gopro.version = GoProVersion.THREE_SILVER;
        } else if (version.indexOf("HD3.03") != -1) {
            gopro.version = GoProVersion.THREE_BLACK;
        } else if (version.indexOf("HD3.11") != -1) {
            gopro.version = GoProVersion.THREE_PLUS_BLACK;
        } else if (version.indexOf("HD3.10") != -1) {
            gopro.version = GoProVersion.THREE_PLUS_SILVER;
        } else if (version.indexOf("HD2") != -1) {
            gopro.version = GoProVersion.HD2;
        } else if (version.indexOf("HD4.01") != -1) {
            gopro.version = GoProVersion.HD4_SILVER;
        } else if (version.indexOf("HD4.02") != -1) {
            gopro.version = GoProVersion.HD4_BLACK;
        } else {
            gopro.version = GoProVersion.UNKNOWN;
        }
        if (LOG_LEVEL <= 0) console.log("getVersion success GoPro version=" + version + " / kind =  " + gopro.version);
        if (success) success();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getVersion error");
        gopro.version = GoProVersion.UNKNOWN;
        if (failure) failure();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getVersion timeout");
        gopro.version = GoProVersion.UNKNOWN;
        if (timeout) timeout();
    });
}

function getGP4Status(success, failure) {
    if (LOG_LEVEL <= 0) console.log("getGP4Status");
    var o = {
        url: GOPRO_ADDRESS + "/gp/gpControl/status",
        type: "json"
    };
    ajax(o, function(req) {
        if (LOG_LEVEL <= 0) console.log("getGP4Status success");
        var config = JSON.parse(req.responseText);
        updateGP4(config);
        if (success) success();
    }, function(req) {
        if (LOG_LEVEL <= 1) console.log("getGP4Status failure " + req.status);
        if (failure) failure();
    }, function() {
        if (LOG_LEVEL <= 1) console.log("getGP4Status timeout");
        if (failure) failure();
    });
}

function getGP3Status(success, failure) {
    if (LOG_LEVEL <= 0) console.log("getGP3Status");
    if (gopro.password === null) {
        getPassword(function() {
            getGP3Status(success, failure);
        }, function() {
            if (failure) failure();
        }, function() {
            if (failure) failure();
        });
    } else {
        var o = {
            url: GOPRO_ADDRESS + "/camera/sx?t=" + gopro.password,
            responseType: "arraybuffer"
        };
        ajax(o, function(req) {
            if (LOG_LEVEL <= 0) console.log("getGP3Status success");
            var normalArray = [];
            var byteArray = new Uint8Array(req.response);
            for (var i = 0; i < byteArray.length; i++) {
                normalArray[i] = byteArray[i] & 255;
            }
            updateGP3(normalArray);
            if (success) success();
        }, function(req) {
            if (LOG_LEVEL <= 1) console.log("getGP3Status failure " + req.status);
            if (failure) failure();
        }, function() {
            if (LOG_LEVEL <= 1) console.log("getGP4Status timeout");
            if (failure) failure();
        });
    }
}

function getGP2Status(success, failure) {
    if (LOG_LEVEL <= 0) console.log("getGP2Status");
    if (gopro.password === null) {
        getPassword(function() {
            getGP2Status(success, failure);
        }, function() {
            if (failure) failure();
        }, function() {
            if (failure) failure();
        });
    } else {
        var o = {
            url: GOPRO_ADDRESS + "/camera/se?t=" + gopro.password,
            responseType: "arraybuffer"
        };
        ajax(o, function(req) {
            if (LOG_LEVEL <= 0) console.log("getGP2Status success");
            var normalArray = [];
            var byteArray = new Uint8Array(req.response);
            for (var i = 0; i < byteArray.length; i++) {
                normalArray[i] = byteArray[i] & 255;
            }
            updateGP3(normalArray);
            if (success) success();
        }, function(req) {
            if (LOG_LEVEL <= 1) console.log("getGP2Status failure " + req.status);
            if (failure) failure();
        }, function() {
            if (LOG_LEVEL <= 1) console.log("getGP2Status timeout");
            if (failure) failure();
        });
    }
}

function getStatus(success, failure) {
    if (LOG_LEVEL <= 0) console.log("getStatus");
    if (gopro.version != GoProVersion.UNKNOWN) {
        if (gopro.version == GoProVersion.HD4_SILVER || gopro.version == GoProVersion.HD4_BLACK) {
            getGP4Status(success, failure);
        } else if (gopro.version == GoProVersion.HD2) {
            getGP2Status(success, failure);
        } else {
            getGP3Status(success, failure);
        }
    } else {
        getVersion(function() {
            getStatus(success, failure);
        }, function() {
            if (failure) failure();
        });
    }
}

function sendCommand(command, value, success, failure) {
    var cmd_url = "";
    if (gopro.version == GoProVersion.HD4_SILVER || gopro.version == GoProVersion.HD4_BLACK) {
        cmd_url = getGP4CommandStr(command, value);
    } else {
        cmd_url = getGP3CommandStr(command, value);
    }
    ajax(GOPRO_ADDRESS + "/" + cmd_url, success, function(req) {
        if (req.status == 400) {
            if (LOG_LEVEL <= 1) console.log("BAD request : " + cmd_url);
        } else if (req.status == 410) {
            if (LOG_LEVEL <= 1) console.log("Error in request : maybe it is impossible... " + cmd_url);
        } else {
            if (failure) failure();
        }
    }, failure);
}

function bin2String(array, start, end) {
    var result = "";
    for (var i = start; i < end; i++) {
        result += String.fromCharCode(array[i]);
    }
    return result;
}
function floydSteinberg(sb, w, h) {
    for (var y = 0; y < h; y++)
        for (var x = 0; x < w; x++) {
            var ci = y * w + x;
            var cc = sb[ci];
            var rc = cc < 128 ? 0 : 255;
            sb[ci] = rc;
            var err = cc - rc;
            if (x + 1 < w) sb[ci + 1] += err * 7 >> 4;
            if (y + 1 == h) continue;
            if (x > 0) sb[ci + w - 1] += err * 3 >> 4;
            sb[ci + w] += err * 5 >> 4;
            if (x + 1 < w) sb[ci + w + 1] += err * 1 >> 4;
        }
}

function greyScale(rgba_input, w, h) {
    var result = [];
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var i = y * 3 * w + x * 3;
            result[y * w + x] = Math.floor(0.299 * rgba_input[i] + 0.587 * rgba_input[i + 1] + 0.114 * rgba_input[i + 2]);
        }
    }
    return result;
}
var JpegImage = (function jpegImage() {
    "use strict";
    var dctZigZag = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
    var dctCos1 = 4017;
    var dctSin1 = 799;
    var dctCos3 = 3406;
    var dctSin3 = 2276;
    var dctCos6 = 1567;
    var dctSin6 = 3784;
    var dctSqrt2 = 5793;
    var dctSqrt1d2 = 2896;

    function constructor() {}

    function buildHuffmanTable(codeLengths, values) {
        var k = 0,
            code = [],
            i, j, length = 16;
        while (length > 0 && !codeLengths[length - 1]) length--;
        code.push({
            children: [],
            index: 0
        });
        var p = code[0],
            q;
        for (i = 0; i < length; i++) {
            for (j = 0; j < codeLengths[i]; j++) {
                p = code.pop();
                p.children[p.index] = values[k];
                while (p.index > 0) {
                    p = code.pop();
                }
                p.index++;
                code.push(p);
                while (code.length <= i) {
                    code.push(q = {
                        children: [],
                        index: 0
                    });
                    p.children[p.index] = q.children;
                    p = q;
                }
                k++;
            }
            if (i + 1 < length) {
                code.push(q = {
                    children: [],
                    index: 0
                });
                p.children[p.index] = q.children;
                p = q;
            }
        }
        return code[0].children;
    }

    function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
        var precision = frame.precision;
        var samplesPerLine = frame.samplesPerLine;
        var scanLines = frame.scanLines;
        var mcusPerLine = frame.mcusPerLine;
        var progressive = frame.progressive;
        var maxH = frame.maxH,
            maxV = frame.maxV;
        var startOffset = offset,
            bitsData = 0,
            bitsCount = 0;

        function readBit() {
            if (bitsCount > 0) {
                bitsCount--;
                return bitsData >> bitsCount & 1;
            }
            bitsData = data[offset++];
            if (bitsData == 255) {
                var nextByte = data[offset++];
                if (nextByte) {
                    throw "unexpected marker: " + (bitsData << 8 | nextByte).toString(16);
                }
            }
            bitsCount = 7;
            return bitsData >>> 7;
        }

        function decodeHuffman(tree) {
            var node = tree,
                bit;
            while ((bit = readBit()) !== null) {
                node = node[bit];
                if (typeof node === "number") return node;
                if (typeof node !== "object") throw "invalid huffman sequence";
            }
            return null;
        }

        function receive(length) {
            var n = 0;
            while (length > 0) {
                var bit = readBit();
                if (bit === null) return;
                n = n << 1 | bit;
                length--;
            }
            return n;
        }

        function receiveAndExtend(length) {
            var n = receive(length);
            if (n >= 1 << length - 1) return n;
            return n + (-1 << length) + 1;
        }

        function decodeBaseline(component, zz) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t);
            zz[0] = component.pred += diff;
            var k = 1;
            while (k < 64) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15,
                    r = rs >> 4;
                if (s === 0) {
                    if (r < 15) break;
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                zz[z] = receiveAndExtend(s);
                k++;
            }
        }

        function decodeDCFirst(component, zz) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
            zz[0] = component.pred += diff;
        }

        function decodeDCSuccessive(component, zz) {
            zz[0] |= readBit() << successive;
        }
        var eobrun = 0;

        function decodeACFirst(component, zz) {
            if (eobrun > 0) {
                eobrun--;
                return;
            }
            var k = spectralStart,
                e = spectralEnd;
            while (k <= e) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15,
                    r = rs >> 4;
                if (s === 0) {
                    if (r < 15) {
                        eobrun = receive(r) + (1 << r) - 1;
                        break;
                    }
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                zz[z] = receiveAndExtend(s) * (1 << successive);
                k++;
            }
        }
        var successiveACState = 0,
            successiveACNextValue;

        function decodeACSuccessive(component, zz) {
            var k = spectralStart,
                e = spectralEnd,
                r = 0;
            while (k <= e) {
                var z = dctZigZag[k];
                switch (successiveACState) {
                    case 0:
                        var rs = decodeHuffman(component.huffmanTableAC);
                        var s = rs & 15,
                            r = rs >> 4;
                        if (s === 0) {
                            if (r < 15) {
                                eobrun = receive(r) + (1 << r);
                                successiveACState = 4;
                            } else {
                                r = 16;
                                successiveACState = 1;
                            }
                        } else {
                            if (s !== 1) throw "invalid ACn encoding";
                            successiveACNextValue = receiveAndExtend(s);
                            successiveACState = r ? 2 : 3;
                        }
                        continue;
                    case 1:
                    case 2:
                        if (zz[z]) zz[z] += readBit() << successive;
                        else {
                            r--;
                            if (r === 0) successiveACState = successiveACState == 2 ? 3 : 0;
                        }
                        break;
                    case 3:
                        if (zz[z]) zz[z] += readBit() << successive;
                        else {
                            zz[z] = successiveACNextValue << successive;
                            successiveACState = 0;
                        }
                        break;
                    case 4:
                        if (zz[z]) zz[z] += readBit() << successive;
                        break;
                }
                k++;
            }
            if (successiveACState === 4) {
                eobrun--;
                if (eobrun === 0) successiveACState = 0;
            }
        }

        function decodeMcu(component, decode, mcu, row, col) {
            var mcuRow = mcu / mcusPerLine | 0;
            var mcuCol = mcu % mcusPerLine;
            var blockRow = mcuRow * component.v + row;
            var blockCol = mcuCol * component.h + col;
            if (component.blocks[blockRow] !== undefined) decode(component, component.blocks[blockRow][blockCol]);
        }

        function decodeBlock(component, decode, mcu) {
            var blockRow = mcu / component.blocksPerLine | 0;
            var blockCol = mcu % component.blocksPerLine;
            if (component.blocks[blockRow] !== undefined) decode(component, component.blocks[blockRow][blockCol]);
        }
        var componentsLength = components.length;
        var component, i, j, k, n;
        var decodeFn;
        if (progressive) {
            if (spectralStart === 0) decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
            else decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
        } else {
            decodeFn = decodeBaseline;
        }
        var mcu = 0,
            marker;
        var mcuExpected;
        if (componentsLength == 1) {
            mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
        } else {
            mcuExpected = mcusPerLine * frame.mcusPerColumn;
        }
        if (!resetInterval) resetInterval = mcuExpected;
        var h, v;
        while (mcu < mcuExpected) {
            for (i = 0; i < componentsLength; i++) components[i].pred = 0;
            eobrun = 0;
            if (componentsLength == 1) {
                component = components[0];
                for (n = 0; n < resetInterval; n++) {
                    decodeBlock(component, decodeFn, mcu);
                    mcu++;
                }
            } else {
                for (n = 0; n < resetInterval; n++) {
                    for (i = 0; i < componentsLength; i++) {
                        component = components[i];
                        h = component.h;
                        v = component.v;
                        for (j = 0; j < v; j++) {
                            for (k = 0; k < h; k++) {
                                decodeMcu(component, decodeFn, mcu, j, k);
                            }
                        }
                    }
                    mcu++;
                }
            }
            bitsCount = 0;
            marker = data[offset] << 8 | data[offset + 1];
            if (marker < 65280) {
                throw "marker was not found";
            }
            if (marker >= 65488 && marker <= 65495) {
                offset += 2;
            } else break;
        }
        return offset - startOffset;
    }

    function buildComponentData(frame, component) {
        var lines = [];
        var blocksPerLine = component.blocksPerLine;
        var blocksPerColumn = component.blocksPerColumn;
        var samplesPerLine = blocksPerLine << 3;
        var R = new Int32Array(64),
            r = new Uint8Array(64);

        function quantizeAndInverse(zz, dataOut, dataIn) {
            var qt = component.quantizationTable;
            var v0, v1, v2, v3, v4, v5, v6, v7, t;
            var p = dataIn;
            var i;
            for (i = 0; i < 64; i++) p[i] = zz[i] * qt[i];
            for (i = 0; i < 8; ++i) {
                var row = 8 * i;
                if (p[1 + row] === 0 && p[2 + row] === 0 && p[3 + row] === 0 && p[4 + row] === 0 && p[5 + row] === 0 && p[6 + row] === 0 && p[7 + row] === 0) {
                    t = dctSqrt2 * p[0 + row] + 512 >> 10;
                    p[0 + row] = t;
                    p[1 + row] = t;
                    p[2 + row] = t;
                    p[3 + row] = t;
                    p[4 + row] = t;
                    p[5 + row] = t;
                    p[6 + row] = t;
                    p[7 + row] = t;
                    continue;
                }
                v0 = dctSqrt2 * p[0 + row] + 128 >> 8;
                v1 = dctSqrt2 * p[4 + row] + 128 >> 8;
                v2 = p[2 + row];
                v3 = p[6 + row];
                v4 = dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128 >> 8;
                v7 = dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128 >> 8;
                v5 = p[3 + row] << 4;
                v6 = p[5 + row] << 4;
                t = v0 - v1 + 1 >> 1;
                v0 = v0 + v1 + 1 >> 1;
                v1 = t;
                t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
                v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
                v3 = t;
                t = v4 - v6 + 1 >> 1;
                v4 = v4 + v6 + 1 >> 1;
                v6 = t;
                t = v7 + v5 + 1 >> 1;
                v5 = v7 - v5 + 1 >> 1;
                v7 = t;
                t = v0 - v3 + 1 >> 1;
                v0 = v0 + v3 + 1 >> 1;
                v3 = t;
                t = v1 - v2 + 1 >> 1;
                v1 = v1 + v2 + 1 >> 1;
                v2 = t;
                t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
                v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
                v7 = t;
                t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
                v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
                v6 = t;
                p[0 + row] = v0 + v7;
                p[7 + row] = v0 - v7;
                p[1 + row] = v1 + v6;
                p[6 + row] = v1 - v6;
                p[2 + row] = v2 + v5;
                p[5 + row] = v2 - v5;
                p[3 + row] = v3 + v4;
                p[4 + row] = v3 - v4;
            }
            for (i = 0; i < 8; ++i) {
                var col = i;
                if (p[1 * 8 + col] === 0 && p[2 * 8 + col] === 0 && p[3 * 8 + col] === 0 && p[4 * 8 + col] === 0 && p[5 * 8 + col] === 0 && p[6 * 8 + col] === 0 && p[7 * 8 + col] === 0) {
                    t = dctSqrt2 * dataIn[i + 0] + 8192 >> 14;
                    p[0 * 8 + col] = t;
                    p[1 * 8 + col] = t;
                    p[2 * 8 + col] = t;
                    p[3 * 8 + col] = t;
                    p[4 * 8 + col] = t;
                    p[5 * 8 + col] = t;
                    p[6 * 8 + col] = t;
                    p[7 * 8 + col] = t;
                    continue;
                }
                v0 = dctSqrt2 * p[0 * 8 + col] + 2048 >> 12;
                v1 = dctSqrt2 * p[4 * 8 + col] + 2048 >> 12;
                v2 = p[2 * 8 + col];
                v3 = p[6 * 8 + col];
                v4 = dctSqrt1d2 * (p[1 * 8 + col] - p[7 * 8 + col]) + 2048 >> 12;
                v7 = dctSqrt1d2 * (p[1 * 8 + col] + p[7 * 8 + col]) + 2048 >> 12;
                v5 = p[3 * 8 + col];
                v6 = p[5 * 8 + col];
                t = v0 - v1 + 1 >> 1;
                v0 = v0 + v1 + 1 >> 1;
                v1 = t;
                t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
                v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
                v3 = t;
                t = v4 - v6 + 1 >> 1;
                v4 = v4 + v6 + 1 >> 1;
                v6 = t;
                t = v7 + v5 + 1 >> 1;
                v5 = v7 - v5 + 1 >> 1;
                v7 = t;
                t = v0 - v3 + 1 >> 1;
                v0 = v0 + v3 + 1 >> 1;
                v3 = t;
                t = v1 - v2 + 1 >> 1;
                v1 = v1 + v2 + 1 >> 1;
                v2 = t;
                t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
                v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
                v7 = t;
                t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
                v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
                v6 = t;
                p[0 * 8 + col] = v0 + v7;
                p[7 * 8 + col] = v0 - v7;
                p[1 * 8 + col] = v1 + v6;
                p[6 * 8 + col] = v1 - v6;
                p[2 * 8 + col] = v2 + v5;
                p[5 * 8 + col] = v2 - v5;
                p[3 * 8 + col] = v3 + v4;
                p[4 * 8 + col] = v3 - v4;
            }
            for (i = 0; i < 64; ++i) {
                var sample = 128 + (p[i] + 8 >> 4);
                dataOut[i] = sample < 0 ? 0 : sample > 255 ? 255 : sample;
            }
        }
        var i, j;
        for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
            var scanLine = blockRow << 3;
            for (i = 0; i < 8; i++) lines.push(new Uint8Array(samplesPerLine));
            for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
                quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);
                var offset = 0,
                    sample = blockCol << 3;
                for (j = 0; j < 8; j++) {
                    var line = lines[scanLine + j];
                    for (i = 0; i < 8; i++) line[sample + i] = r[offset++];
                }
            }
        }
        return lines;
    }

    function clampTo8bit(a) {
        return a < 0 ? 0 : a > 255 ? 255 : a;
    }
    constructor.prototype = {
        load: function load(path) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", path, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                var data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
                if (LOG_LEVEL <= 0) console.log("received " + data.length);
                this.parse(data);
                if (this.onload) this.onload();
            }.bind(this);
            xhr.send(null);
        },
        parse: function parse(data) {
            var offset = 0,
                length = data.length;

            function readUint16() {
                var value = data[offset] << 8 | data[offset + 1];
                offset += 2;
                return value;
            }

            function readDataBlock() {
                var length = readUint16();
                var array = data.subarray(offset, offset + length - 2);
                offset += array.length;
                return array;
            }

            function prepareComponents(frame) {
                var maxH = 0,
                    maxV = 0;
                var component, componentId;
                for (componentId in frame.components) {
                    if (frame.components.hasOwnProperty(componentId)) {
                        component = frame.components[componentId];
                        if (maxH < component.h) maxH = component.h;
                        if (maxV < component.v) maxV = component.v;
                    }
                }
                var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
                var mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
                for (componentId in frame.components) {
                    if (frame.components.hasOwnProperty(componentId)) {
                        component = frame.components[componentId];
                        var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
                        var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / maxV);
                        var blocksPerLineForMcu = mcusPerLine * component.h;
                        var blocksPerColumnForMcu = mcusPerColumn * component.v;
                        var blocks = [];
                        for (var i = 0; i < blocksPerColumnForMcu; i++) {
                            var row = [];
                            for (var j = 0; j < blocksPerLineForMcu; j++) row.push(new Int32Array(64));
                            blocks.push(row);
                        }
                        component.blocksPerLine = blocksPerLine;
                        component.blocksPerColumn = blocksPerColumn;
                        component.blocks = blocks;
                    }
                }
                frame.maxH = maxH;
                frame.maxV = maxV;
                frame.mcusPerLine = mcusPerLine;
                frame.mcusPerColumn = mcusPerColumn;
            }
            var jfif = null;
            var adobe = null;
            var pixels = null;
            var frame, resetInterval;
            var quantizationTables = [],
                frames = [];
            var huffmanTablesAC = [],
                huffmanTablesDC = [];
            var fileMarker = readUint16();
            if (fileMarker != 65496) {
                throw "SOI not found";
            }
            fileMarker = readUint16();
            while (fileMarker != 65497) {
                var i, j;
                switch (fileMarker) {
                    case 65280:
                        break;
                    case 65504:
                    case 65505:
                    case 65506:
                    case 65507:
                    case 65508:
                    case 65509:
                    case 65510:
                    case 65511:
                    case 65512:
                    case 65513:
                    case 65514:
                    case 65515:
                    case 65516:
                    case 65517:
                    case 65518:
                    case 65519:
                    case 65534:
                        var appData = readDataBlock();
                        if (fileMarker === 65504) {
                            if (appData[0] === 74 && appData[1] === 70 && appData[2] === 73 && appData[3] === 70 && appData[4] === 0) {
                                jfif = {
                                    version: {
                                        major: appData[5],
                                        minor: appData[6]
                                    },
                                    densityUnits: appData[7],
                                    xDensity: appData[8] << 8 | appData[9],
                                    yDensity: appData[10] << 8 | appData[11],
                                    thumbWidth: appData[12],
                                    thumbHeight: appData[13],
                                    thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                                };
                            }
                        }
                        if (fileMarker === 65518) {
                            if (appData[0] === 65 && appData[1] === 100 && appData[2] === 111 && appData[3] === 98 && appData[4] === 101 && appData[5] === 0) {
                                adobe = {
                                    version: appData[6],
                                    flags0: appData[7] << 8 | appData[8],
                                    flags1: appData[9] << 8 | appData[10],
                                    transformCode: appData[11]
                                };
                            }
                        }
                        break;
                    case 65499:
                        var quantizationTablesLength = readUint16();
                        var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                        while (offset < quantizationTablesEnd) {
                            var quantizationTableSpec = data[offset++];
                            var tableData = new Int32Array(64);
                            if (quantizationTableSpec >> 4 === 0) {
                                for (j = 0; j < 64; j++) {
                                    var z = dctZigZag[j];
                                    tableData[z] = data[offset++];
                                }
                            } else if (quantizationTableSpec >> 4 === 1) {
                                for (j = 0; j < 64; j++) {
                                    var z = dctZigZag[j];
                                    tableData[z] = readUint16();
                                }
                            } else throw "DQT: invalid table spec";
                            quantizationTables[quantizationTableSpec & 15] = tableData;
                        }
                        break;
                    case 65472:
                    case 65473:
                    case 65474:
                        readUint16();
                        frame = {};
                        frame.extended = fileMarker === 65473;
                        frame.progressive = fileMarker === 65474;
                        frame.precision = data[offset++];
                        frame.scanLines = readUint16();
                        frame.samplesPerLine = readUint16();
                        frame.components = {};
                        frame.componentsOrder = [];
                        var componentsCount = data[offset++],
                            componentId;

                        for (i = 0; i < componentsCount; i++) {
                            componentId = data[offset];
                            var h = data[offset + 1] >> 4;
                            var v = data[offset + 1] & 15;
                            var qId = data[offset + 2];
                            frame.componentsOrder.push(componentId);
                            frame.components[componentId] = {
                                h: h,
                                v: v,
                                quantizationTable: quantizationTables[qId]
                            };
                            offset += 3;
                        }
                        prepareComponents(frame);
                        frames.push(frame);
                        break;
                    case 65476:
                        var huffmanLength = readUint16();
                        for (i = 2; i < huffmanLength;) {
                            var huffmanTableSpec = data[offset++];
                            var codeLengths = new Uint8Array(16);
                            var codeLengthSum = 0;
                            for (j = 0; j < 16; j++, offset++) codeLengthSum += codeLengths[j] = data[offset];
                            var huffmanValues = new Uint8Array(codeLengthSum);
                            for (j = 0; j < codeLengthSum; j++, offset++) huffmanValues[j] = data[offset];
                            i += 17 + codeLengthSum;
                            (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                        }
                        break;
                    case 65501:
                        readUint16();
                        resetInterval = readUint16();
                        break;
                    case 65498:
                        var selectorsCount = data[offset++];
                        var components = [],
                            component;
                        for (i = 0; i < selectorsCount; i++) {
                            component = frame.components[data[offset++]];
                            var tableSpec = data[offset++];
                            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                            components.push(component);
                        }
                        var spectralStart = data[offset++];
                        var spectralEnd = data[offset++];
                        var successiveApproximation = data[offset++];
                        var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15);
                        offset += processed;
                        break;
                    default:
                        if (data[offset - 3] == 255 && data[offset - 2] >= 192 && data[offset - 2] <= 254) {
                            offset -= 3;
                            break;
                        }
                        throw "unknown JPEG marker " + fileMarker.toString(16);
                }
                fileMarker = readUint16();
            }
            if (frames.length != 1) throw "only single frame JPEGs supported";
            this.width = frame.samplesPerLine;
            this.height = frame.scanLines;
            this.jfif = jfif;
            this.adobe = adobe;
            this.components = [];
            for (var i = 0; i < frame.componentsOrder.length; i++) {
                var component = frame.components[frame.componentsOrder[i]];
                this.components.push({
                    lines: buildComponentData(frame, component),
                    scaleX: component.h / frame.maxH,
                    scaleY: component.v / frame.maxV
                });
            }
        },
        getData: function getData(width, height) {
            var scaleX = this.width / width,
                scaleY = this.height / height;
            var component1, component2, component3, component4;
            var component1Line, component2Line, component3Line, component4Line;
            var x, y;
            var offset = 0;
            var Y, Cb, Cr, K, C, M, Ye, R, G, B;
            var colorTransform;
            var dataLength = width * height * this.components.length;
            var data = new Uint8Array(dataLength);
            switch (this.components.length) {
                case 1:
                    component1 = this.components[0];
                    for (y = 0; y < height; y++) {
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        for (x = 0; x < width; x++) {
                            Y = component1Line[0 | x * component1.scaleX * scaleX];
                            data[offset++] = Y;
                        }
                    }
                    break;
                case 2:
                    component1 = this.components[0];
                    component2 = this.components[1];
                    for (y = 0; y < height; y++) {
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        for (x = 0; x < width; x++) {
                            Y = component1Line[0 | x * component1.scaleX * scaleX];
                            data[offset++] = Y;
                            Y = component2Line[0 | x * component2.scaleX * scaleX];
                            data[offset++] = Y;
                        }
                    }
                    break;
                case 3:
                    colorTransform = true;
                    if (this.adobe && this.adobe.transformCode) colorTransform = true;
                    else if (typeof this.colorTransform !== "undefined") colorTransform = !!this.colorTransform;
                    component1 = this.components[0];
                    component2 = this.components[1];
                    component3 = this.components[2];
                    for (y = 0; y < height; y++) {
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                        for (x = 0; x < width; x++) {
                            if (!colorTransform) {
                                R = component1Line[0 | x * component1.scaleX * scaleX];
                                G = component2Line[0 | x * component2.scaleX * scaleX];
                                B = component3Line[0 | x * component3.scaleX * scaleX];
                            } else {
                                Y = component1Line[0 | x * component1.scaleX * scaleX];
                                Cb = component2Line[0 | x * component2.scaleX * scaleX];
                                Cr = component3Line[0 | x * component3.scaleX * scaleX];
                                R = clampTo8bit(Y + 1.402 * (Cr - 128));
                                G = clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                                B = clampTo8bit(Y + 1.772 * (Cb - 128));
                            }
                            data[offset++] = R;
                            data[offset++] = G;
                            data[offset++] = B;
                        }
                    }
                    break;
                case 4:
                    if (!this.adobe) throw "Unsupported color mode (4 components)";
                    colorTransform = false;
                    if (this.adobe && this.adobe.transformCode) colorTransform = true;
                    else if (typeof this.colorTransform !== "undefined") colorTransform = !!this.colorTransform;
                    component1 = this.components[0];
                    component2 = this.components[1];
                    component3 = this.components[2];
                    component4 = this.components[3];
                    for (y = 0; y < height; y++) {
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                        component4Line = component4.lines[0 | y * component4.scaleY * scaleY];
                        for (x = 0; x < width; x++) {
                            if (!colorTransform) {
                                C = component1Line[0 | x * component1.scaleX * scaleX];
                                M = component2Line[0 | x * component2.scaleX * scaleX];
                                Ye = component3Line[0 | x * component3.scaleX * scaleX];
                                K = component4Line[0 | x * component4.scaleX * scaleX];
                            } else {
                                Y = component1Line[0 | x * component1.scaleX * scaleX];
                                Cb = component2Line[0 | x * component2.scaleX * scaleX];
                                Cr = component3Line[0 | x * component3.scaleX * scaleX];
                                K = component4Line[0 | x * component4.scaleX * scaleX];
                                C = 255 - clampTo8bit(Y + 1.402 * (Cr - 128));
                                M = 255 - clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                                Ye = 255 - clampTo8bit(Y + 1.772 * (Cb - 128));
                            }
                            data[offset++] = C;
                            data[offset++] = M;
                            data[offset++] = Ye;
                            data[offset++] = K;
                        }
                    }
                    break;
                default:
                    throw "Unsupported color mode";
            }
            return data;
        },
        copyToImageData: function copyToImageData(imageData) {
            var width = imageData.width,
                height = imageData.height;
            var imageDataArray = imageData.data;
            var data = this.getData(width, height);
            var i = 0,
                j = 0,
                x, y;
            var Y, K, C, M, R, G, B;
            switch (this.components.length) {
                case 1:
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            Y = data[i++];
                            imageDataArray[j++] = Y;
                            imageDataArray[j++] = Y;
                            imageDataArray[j++] = Y;
                            imageDataArray[j++] = 255;
                        }
                    }
                    break;
                case 3:
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            R = data[i++];
                            G = data[i++];
                            B = data[i++];
                            imageDataArray[j++] = R;
                            imageDataArray[j++] = G;
                            imageDataArray[j++] = B;
                            imageDataArray[j++] = 255;
                        }
                    }
                    break;
                case 4:
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            C = data[i++];
                            M = data[i++];
                            Y = data[i++];
                            K = data[i++];
                            R = 255 - clampTo8bit(C * (1 - K / 255) + K);
                            G = 255 - clampTo8bit(M * (1 - K / 255) + K);
                            B = 255 - clampTo8bit(Y * (1 - K / 255) + K);
                            imageDataArray[j++] = R;
                            imageDataArray[j++] = G;
                            imageDataArray[j++] = B;
                            imageDataArray[j++] = 255;
                        }
                    }
                    break;
                default:
                    throw "Unsupported color mode";
            }
        }
    };
    return constructor;
}());
var MessageQueue = (function() {
    var RETRY_MAX = 5;
    var queue = [];
    var sending = false;
    var timer = null;
    return {
        reset: reset,
        sendAppMessage: sendAppMessage,
        size: size
    };

    function reset() {
        queue = [];
        sending = false;
    }

    function sendAppMessage(message, ack, nack) {
        if (!isValidMessage(message)) {
            return false;
        }
        queue.push({
            message: message,
            ack: ack || null,
            nack: nack || null,
            attempts: 0
        });
        setTimeout(function() {
            sendNextMessage();
        }, 1);
        return true;
    }

    function size() {
        return queue.length;
    }

    function isValidMessage(message) {
        if (message !== Object(message)) {
            return false;
        }
        var keys = Object.keys(message);
        if (!keys.length) {
            return false;
        }
        for (var k = 0; k < keys.length; k += 1) {
            var validKey = /^[0-9a-zA-Z-_]*$/.test(keys[k]);
            if (!validKey) {
                return false;
            }
            var value = message[keys[k]];
            if (!validValue(value)) {
                return false;
            }
        }
        return true;

        function validValue(value) {
            switch (typeof value) {
                case "string":
                    return true;
                case "number":
                    return true;
                case "object":
                    if (toString.call(value) == "[object Array]") {
                        return true;
                    }
            }
            return false;
        }
    }

    function sendNextMessage() {
        if (sending) {
            return;
        }
        var message = queue.shift();
        if (!message) {
            return;
        }
        message.attempts += 1;
        sending = true;
        
        Pebble.sendAppMessage(message.message, ack, nack);
        timer = setTimeout(function() {
            timeout();
        }, 1e3);

        function ack() {
            clearTimeout(timer);
            setTimeout(function() {
                sending = false;
                sendNextMessage();
            }, 200);
            if (message.ack) {
                message.ack.apply(null, arguments);
            }
        }

        function nack() {
            clearTimeout(timer);
            if (message.attempts < RETRY_MAX) {
                queue.unshift(message);
                setTimeout(function() {
                    sending = false;
                    sendNextMessage();
                }, 200 * message.attempts);
            } else {
                if (message.nack) {
                    message.nack.apply(null, arguments);
                }
            }
        }

        function timeout() {
            setTimeout(function() {
                sending = false;
                sendNextMessage();
            }, 1e3);
            if (message.ack) {
                message.ack.apply(null, arguments);
            }
        }
    }
}());

function pushUInt16(array, value) {
    array.push(value >> 0 & 255);
    array.push(value >> 8 & 255);
}

function pushUInt32(array, value) {
    array.push(value >> 0 & 255);
    array.push(value >> 8 & 255);
    array.push(value >> 16 & 255);
    array.push(value >> 24 & 255);
}

function toPebbleBitmap(bw_input, width, height) {
    var rowSizePaddedWords = Math.floor((width + 31) / 32);
    var widthBytes = rowSizePaddedWords * 4;
    var flags = 1 << 12;
    var result = [];
    var currentInt = 0;
    for (var y = 0; y < height; y++) {
        var bit = 0;
        currentInt = 0;
        for (var x = 0; x < width; x++) {
            var color = bw_input[y * width + x];
            if (color == 255) {
                currentInt |= 1 << bit;
            }
            bit += 1;
            if (bit == 32) {
                bit = 0;
                pushUInt32(result, currentInt);
                currentInt = 0;
            }
        }
        if (bit > 0) {
            pushUInt32(result, currentInt);
        }
    }
    return result;
}

Pebble.addEventListener("ready", function(e) {
    if (LOG_LEVEL <= 0) console.log("Ready to go! " + SETTINGS.SETTING_END);
    for (var i = 0; i < SETTINGS.SETTING_END; i++) {
        gopro.settings.push(0);
    }
    getPassword(getAndSendStatus, null, null);
});
Pebble.addEventListener("appmessage", function(e) {
    if (LOG_LEVEL <= 0) console.log("appmessage");
    if (e.payload.camera_last_image) {
        var chunkSize = e.payload.camera_last_image;
        getLastImage(function(bitmap) {
            sendImage(bitmap, chunkSize);
        });
    } else if (e.payload.camera_update_msg) {
        getAndSendStatus();
    } else if (e.payload.camera_command_msg) {
        //camera_command_msg = setting << 8 | value
        var setting = e.payload.camera_command_msg >> 8 & 255;
        var value = e.payload.camera_command_msg & 255;
        if (LOG_LEVEL <= 0) console.log("Order received " + setting + " " + value);
        sendCommand(setting, value, getAndSendStatus, notifyDisconnected);
    }
});
Pebble.addEventListener("webviewclosed", function(e) {
    if (LOG_LEVEL <= 0) console.log("webviewclosed " + e.response);
    if (typeof e.response === "string" && e.response.length > 0) {
        var newSettings = decodeURIComponent(e.response);
        MessageQueue.sendAppMessage(JSON.parse(newSettings));
    }
});

var loopTimer;
function notifyDisconnected() {
  gopro.version = GoProVersion.UNKNOWN;
  MessageQueue.sendAppMessage({
    cam_connect_status: 0
  });
  window.clearTimeout(loopTimer);
  loopTimer = setTimeout(getAndSendStatus, 1000);  //refreshes every 1 sec
}

function sendStatus() {
  //console.log(gopro.settings.toString());
    MessageQueue.sendAppMessage({
        cam_connect_status: 1,
        cam_version: gopro.version,
        cam_status: gopro.settings,
        cam_menus: gopro.menus,
        mode: gopro.mode,
        photo_count: gopro.photo_count,
        video_count: gopro.video_count,
        photo_remaining: gopro.photo_remaining,
        video_remaining: gopro.video_remaining,
        recording: gopro.recording,
        video_progress: gopro.video_progress,
        photo_progress: gopro.photo_progress
    }, function(e) {
        // console.log("message sent");
    }, function(e) {
        if (LOG_LEVEL <= 1) console.log("message NOT sent");
    });
    window.clearTimeout(loopTimer);
    loopTimer = setTimeout(getAndSendStatus, (gopro.recording===0 ? 1000 : 500));  //refreshes every 1 sec or .5 sec
}

function getAndSendStatus() {
    getStatus(sendStatus, notifyDisconnected);
}

function sendImage(bitmap, chunksize) {
    var i = 0;
    var nextSize = bitmap.length - i > chunksize ? chunksize : bitmap.length - i;
    var sliced = bitmap.slice(i, i + nextSize);
    var callback_success = function() {
        if (i >= bitmap.length) return;
        i += nextSize;
        if (LOG_LEVEL <= 0) console.log(i + "/" + bitmap.length);
        nextSize = bitmap.length - i > chunksize ? chunksize : bitmap.length - i;
        sliced = bitmap.slice(i, i + nextSize);
        sliced.unshift(i / chunksize);
        MessageQueue.sendAppMessage({
            camera_last_image: sliced
        }, callback_success, null);
    };
    sliced.unshift(0);
    MessageQueue.sendAppMessage({
        camera_last_image: sliced
    }, callback_success, null);
}