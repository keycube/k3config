/* Keycodes array
   code (mandatory)  : is the qmk keycode name
   name              : html key name (Same as event.key)
   representation    : custom representation
   bytes (mandatory) : used in the webHID data packets
*/

function getKeycodeByCode (code) {
	for (let keycode of keycodes) {
		for (let keycode_code of keycode.codes) {
			if (code === keycode_code) {
				return keycode;
			}
		}
	}
}

function getKeycodeRepresentationByCode (code) {
	for (let keycode of keycodes) {
		for (let keycode_code of keycode.codes) {
			if (code !== keycode_code) {
				continue;
			}

			if (keycode.representation === undefined) {
				return "###"
			}

			return keycode.representation;
		}
	}

	return "###";
}

const keycodes = [
	{
		codes : ['QK_MODS'],
		bytes : 0x100
	},
	{
		codes : ['QK_MODS_MAX'],
		bytes : 0x1fff
	},
	{
		codes : ['QK_MOD_TAP'],
		bytes : 0x2000
	},
	{
		codes : ['QK_MOD_TAP_MAX'],
		bytes : 0x3fff
	},
	{
		codes : ['QK_LAYER_TAP'],
		bytes : 0x4000
	},
	{
		codes : ['QK_LAYER_TAP_MAX'],
		bytes : 0x4fff
	},
	{
		codes : ['QK_LAYER_MOD'],
		bytes : 0x5000
	},
	{
		codes : ['QK_LAYER_MOD_MAX'],
		bytes : 0x51ff
	},
	{
		codes : ['QK_TO'],
		bytes : 0x5200
	},
	{
		codes : ['QK_TO_MAX'],
		bytes : 0x521f
	},
	{
		codes : ['QK_MOMENTARY'],
		bytes : 0x5220
	},
	{
		codes : ['QK_MOMENTARY_MAX'],
		bytes : 0x523f
	},
	{
		codes : ['QK_DEF_LAYER'],
		bytes : 0x5240
	},
	{
		codes : ['QK_DEF_LAYER_MAX'],
		bytes : 0x525f
	},
	{
		codes : ['QK_TOGGLE_LAYER'],
		bytes : 0x5260
	},
	{
		codes : ['QK_TOGGLE_LAYER_MAX'],
		bytes : 0x527f
	},
	{
		codes : ['QK_ONE_SHOT_LAYER'],
		bytes : 0x5280
	},
	{
		codes : ['QK_ONE_SHOT_LAYER_MAX'],
		bytes : 0x529f
	},
	{
		codes : ['QK_ONE_SHOT_MOD'],
		bytes : 0x52a0
	},
	{
		codes : ['QK_ONE_SHOT_MOD_MAX'],
		bytes : 0x52bf
	},
	{
		codes : ['QK_LAYER_TAP_TOGGLE'],
		bytes : 0x52c0
	},
	{
		codes : ['QK_LAYER_TAP_TOGGLE_MAX'],
		bytes : 0x52df
	},
	{
		codes : ['QK_LAYER_MOD_MASK'],
		bytes : 0x1f
	},
	{
		codes : ['QK_MACRO'],
		bytes : 0x7700
	},
	{
		codes : ['QK_MACRO_MAX'],
		bytes : 0x777f
	},
	{
		codes : ['QK_KB'],
		bytes : 0x7e00
	},
	{
		codes : ['QK_KB_MAX'],
		bytes : 0x7eff
	},
	{
		codes : ['KC_NO', 'XXXXXXX'],
		bytes : 0x0
	},
	{
		codes : ['KC_TRANSPARENT', 'KC_TRNS', '_______'],
		bytes : 0x1
	},
	{
		codes : ['KC_A'],
		names : ['a', 'A'],
		representation : 'A',
		bytes : 0x4
	},
	{
		codes : ['KC_B'],
		names : ['b', 'B'],
		representation : 'B',
		bytes : 0x5
	},
	{
		codes : ['KC_C'],
		names : ['c', 'C'],
		representation : 'C',
		bytes : 0x6
	},
	{
		codes : ['KC_D'],
		names : ['d', 'D'],
		representation : 'D',
		bytes : 0x7
	},
	{
		codes : ['KC_E'],
		names : ['e', 'E'],
		representation : 'E',
		bytes : 0x8
	},
	{
		codes : ['KC_F'],
		names : ['f', 'F'],
		representation : 'F',
		bytes : 0x9
	},
	{
		codes : ['KC_G'],
		names : ['g', 'G'],
		representation : 'G',
		bytes : 0xa
	},
	{
		codes : ['KC_H'],
		names : ['h', 'H'],
		representation : 'H',
		bytes : 0xb
	},
	{
		codes : ['KC_I'],
		names : ['i', 'I'],
		representation : 'I',
		bytes : 0xc
	},
	{
		codes : ['KC_J'],
		names : ['j', 'J'],
		representation : 'J',
		bytes : 0xd
	},
	{
		codes : ['KC_K'],
		names : ['k', 'K'],
		representation : 'K',
		bytes : 0xe
	},
	{
		codes : ['KC_L'],
		names : ['l', 'L'],
		representation : 'L',
		bytes : 0xf
	},
	{
		codes : ['KC_M'],
		names : ['m', 'M'],
		representation : 'M',
		bytes : 0x10
	},
	{
		codes : ['KC_N'],
		names : ['n', 'N'],
		representation : 'N',
		bytes : 0x11
	},
	{
		codes : ['KC_O'],
		names : ['o', 'O'],
		representation : 'O',
		bytes : 0x12
	},
	{
		codes : ['KC_P'],
		names : ['p', 'P'],
		representation : 'P',
		bytes : 0x13
	},
	{
		codes : ['KC_Q'],
		names : ['q', 'Q'],
		representation : 'Q',
		bytes : 0x14
	},
	{
		codes : ['KC_R'],
		names : ['r', 'R'],
		representation : 'R',
		bytes : 0x15
	},
	{
		codes : ['KC_S'],
		names : ['s', 'S'],
		representation : 'S',
		bytes : 0x16
	},
	{
		codes : ['KC_T'],
		names : ['t', 'T'],
		representation : 'T',
		bytes : 0x17
	},
	{
		codes : ['KC_U'],
		names : ['u', 'U'],
		representation : 'U',
		bytes : 0x18
	},
	{
		codes : ['KC_V'],
		names : ['v', 'V'],
		representation : 'V',
		bytes : 0x19
	},
	{
		codes : ['KC_W'],
		names : ['w', 'W'],
		representation : 'W',
		bytes : 0x1a
	},
	{
		codes : ['KC_X'],
		names : ['x', 'X'],
		representation : 'X',
		bytes : 0x1b
	},
	{
		codes : ['KC_Y'],
		names : ['y', 'Y'],
		representation : 'Y',
		bytes : 0x1c
	},
	{
		codes : ['KC_Z'],
		names : ['z', 'Z'],
		representation : 'Z',
		bytes : 0x1d
	},
	{
		codes : ['KC_1'],
		names : ['1', '!'],
		representation : '1',
		bytes : 0x1e
	},
	{
		codes : ['KC_2'],
		names : ['2', '@'],
		representation : '2',
		bytes : 0x1f
	},
	{
		codes : ['KC_3'],
		names : ['3', '#'],
		representation : '3',
		bytes : 0x20
	},
	{
		codes : ['KC_4'],
		names : ['4', '$'],
		representation : '4',
		bytes : 0x21
	},
	{
		codes : ['KC_5'],
		names : ['5', '%'],
		representation : '5',
		bytes : 0x22
	},
	{
		codes : ['KC_6'],
		names : ['6', '^'],
		representation : '6',
		bytes : 0x23
	},
	{
		codes : ['KC_7'],
		names : ['7', '&'],
		representation : '7',
		bytes : 0x24
	},
	{
		codes : ['KC_8'],
		names : ['8', '*'],
		representation : '8',
		bytes : 0x25
	},
	{
		codes : ['KC_9'],
		names : ['9', '('],
		representation : '9',
		bytes : 0x26
	},
	{
		codes : ['KC_0'],
		names : ['0', ')'],
		representation : '0',
		bytes : 0x27
	},
	{
		codes : ['KC_ENTER', 'KC_ENT'],
		names : ['Enter'],
		representation : 'ENT',
		bytes : 0x28
	},
	{
		codes : ['KC_ESCAPE', 'KC_ESC'],
		names : ['Escape'],
		representation : 'ESC',
		bytes : 0x29
	},
	{
		codes : ['KC_BACKSPACE', 'KC_BSPC'],
		names : ['Backspace'],
		representation : 'DEL',
		bytes : 0x2a
	},
	{
		codes : ['KC_TAB'],
		names : ['Tab'],
		representation : 'TAB',
		bytes : 0x2b
	},
	{
		codes : ['KC_SPACE', 'KC_SPC'],
		names : [' '],
		representation : 'SPC',
		bytes : 0x2c
	},
	{
		codes : ['KC_MINUS', 'KC_MINS'],
		names : ['-', '_'],
		representation : '-',
		bytes : 0x2d
	},
	{
		codes : ['KC_EQUAL', 'KC_EQL'],
		names : ['=', '+'],
		representation : '=',
		bytes : 0x2e
	},
	{
		codes : ['KC_LEFT_BRACKET', 'KC_LBRC'],
		names : ['[', '{'],
		representation : '[',
		bytes : 0x2f
	},
	{
		codes : ['KC_RIGHT_BRACKET', 'KC_RBRC'],
		names : [']', '}'],
		representation : ']',
		bytes : 0x30
	},
	{
		codes : ['KC_BACKSLASH', 'KC_BSLS'],
		names : ['\\', '|'],
		representation : '\\',
		bytes : 0x31
	},
	{
		codes : ['KC_NONUS_HASH', 'KC_NUHS'],
		names : ['#', '~'],
		representation : '#',
		bytes : 0x32
	},
	{
		codes : ['KC_SEMICOLON', 'KC_SCLN'],
		names : [';', ':'],
		representation : ';',
		bytes : 0x33
	},
	{
		codes : ['KC_QUOTE', 'KC_QUOT'],
		names : ["'", '"'],
		representation : "'",
		bytes : 0x34
	},
	{
		codes : ['KC_GRAVE', 'KC_GRV'],
		names : ['`', '~'],
		representation : '`',
		bytes : 0x35
	},
	{
		codes : ['KC_COMMA', 'KC_COMM'],
		names : [',', '<'],
		representation : ',',
		bytes : 0x36
	},
	{
		codes : ['KC_DOT'],
		names : ['.', '>'],
		representation : '.',
		bytes : 0x37
	},
	{
		codes : ['KC_SLASH', 'KC_SLSH'],
		names : ['/', '?'],
		representation : '/',
		bytes : 0x38
	},
	{
		codes : ['KC_CAPS_LOCK', 'KC_CAPS'],
		names : ['CapsLock'],
		representation : 'CPS',
		bytes : 0x39
	},
	{
		codes : ['KC_F1'],
		names : ['F1'],
		representation : 'F1',
		bytes : 0x3a
	},
	{
		codes : ['KC_F2'],
		names : ['F2'],
		representation : 'F2',
		bytes : 0x3b
	},
	{
		codes : ['KC_F3'],
		names : ['F3'],
		representation : 'F3',
		bytes : 0x3c
	},
	{
		codes : ['KC_F4'],
		names : ['F4'],
		representation : 'F4',
		bytes : 0x3d
	},
	{
		codes : ['KC_F5'],
		names : ['F5'],
		representation : 'F5',
		bytes : 0x3e
	},
	{
		codes : ['KC_F6'],
		names : ['F6'],
		representation : 'F6',
		bytes : 0x3f
	},
	{
		codes : ['KC_F7'],
		names : ['F7'],
		representation : 'F7',
		bytes : 0x40
	},
	{
		codes : ['KC_F8'],
		names : ['F8'],
		representation : 'F8',
		bytes : 0x41
	},
	{
		codes : ['KC_F9'],
		names : ['F9'],
		representation : 'F9',
		bytes : 0x42
	},
	{
		codes : ['KC_F10'],
		names : ['F10'],
		representation : 'F10',
		bytes : 0x43
	},
	{
		codes : ['KC_F11'],
		names : ['F11'],
		representation : 'F11',
		bytes : 0x44
	},
	{
		codes : ['KC_F12'],
		names : ['F12'],
		representation : 'F12',
		bytes : 0x45
	},
	{
		codes : ['KC_PRINT_SCREEN', 'KC_PSCR'],
		bytes : 0x46
	},
	{
		codes : ['KC_SCROLL_LOCK', 'KC_SCRL', 'KC_BRMD'],
		bytes : 0x47
	},
	{
		codes : ['KC_PAUSE', 'KC_PAUS', 'KC_BRK', 'KC_BRMU'],
		bytes : 0x48
	},
	{
		codes : ['KC_INSERT', 'KC_INS'],
		bytes : 0x49
	},
	{
		codes : ['KC_HOME'],
		bytes : 0x4a
	},
	{
		codes : ['KC_PAGE_UP', 'KC_PGUP'],
		bytes : 0x4b
	},
	{
		codes : ['KC_DELETE', 'KC_DEL'],
		bytes : 0x4c
	},
	{
		codes : ['KC_END'],
		bytes : 0x4d
	},
	{
		codes : ['KC_PAGE_DOWN', 'KC_PGDN'],
		bytes : 0x4e
	},
	{
		codes : ['KC_RIGHT', 'KC_RGHT'],
		bytes : 0x4f
	},
	{
		codes : ['KC_LEFT'],
		bytes : 0x50
	},
	{
		codes : ['KC_DOWN'],
		bytes : 0x51
	},
	{
		codes : ['KC_UP'],
		bytes : 0x52
	},
	{
		codes : ['KC_NUM_LOCK', 'KC_NUM'],
		bytes : 0x53
	},
	{
		codes : ['KC_KP_SLASH', 'KC_PSLS'],
		bytes : 0x54
	},
	{
		codes : ['KC_KP_ASTERISK', 'KC_PAST'],
		bytes : 0x55
	},
	{
		codes : ['KC_KP_MINUS', 'KC_PMNS'],
		bytes : 0x56
	},
	{
		codes : ['KC_KP_PLUS', 'KC_PPLS'],
		bytes : 0x57
	},
	{
		codes : ['KC_KP_ENTER', 'KC_PENT'],
		bytes : 0x58
	},
	{
		codes : ['KC_KP_1', 'KC_P1'],
		bytes : 0x59
	},
	{
		codes : ['KC_KP_2', 'KC_P2'],
		bytes : 0x5a
	},
	{
		codes : ['KC_KP_3', 'KC_P3'],
		bytes : 0x5b
	},
	{
		codes : ['KC_KP_4', 'KC_P4'],
		bytes : 0x5c
	},
	{
		codes : ['KC_KP_5', 'KC_P5'],
		bytes : 0x5d
	},
	{
		codes : ['KC_KP_6', 'KC_P6'],
		bytes : 0x5e
	},
	{
		codes : ['KC_KP_7', 'KC_P7'],
		bytes : 0x5f
	},
	{
		codes : ['KC_KP_8', 'KC_P8'],
		bytes : 0x60
	},
	{
		codes : ['KC_KP_9', 'KC_P9'],
		bytes : 0x61
	},
	{
		codes : ['KC_KP_0', 'KC_P0'],
		bytes : 0x62
	},
	{
		codes : ['KC_KP_DOT', 'KC_PDOT'],
		bytes : 0x63
	},
	{
		codes : ['KC_NONUS_BACKSLASH', 'KC_NUBS'],
		bytes : 0x64
	},
	{
		codes : ['KC_APPLICATION', 'KC_APP'],
		bytes : 0x65
	},
	{
		codes : ['KC_KB_POWER'],
		bytes : 0x66
	},
	{
		codes : ['KC_KP_EQUAL', 'KC_PEQL'],
		bytes : 0x67
	},
	{
		codes : ['KC_F13'],
		bytes : 0x68
	},
	{
		codes : ['KC_F14'],
		bytes : 0x69
	},
	{
		codes : ['KC_F15'],
		bytes : 0x6a
	},
	{
		codes : ['KC_F16'],
		bytes : 0x6b
	},
	{
		codes : ['KC_F17'],
		bytes : 0x6c
	},
	{
		codes : ['KC_F18'],
		bytes : 0x6d
	},
	{
		codes : ['KC_F19'],
		bytes : 0x6e
	},
	{
		codes : ['KC_F20'],
		bytes : 0x6f
	},
	{
		codes : ['KC_F21'],
		bytes : 0x70
	},
	{
		codes : ['KC_F22'],
		bytes : 0x71
	},
	{
		codes : ['KC_F23'],
		bytes : 0x72
	},
	{
		codes : ['KC_F24'],
		bytes : 0x73
	},
	{
		codes : ['KC_EXECUTE', 'KC_EXEC'],
		bytes : 0x74
	},
	{
		codes : ['KC_HELP'],
		bytes : 0x75
	},
	{
		codes : ['KC_MENU'],
		bytes : 0x76
	},
	{
		codes : ['KC_SELECT', 'KC_SLCT'],
		bytes : 0x77
	},
	{
		codes : ['KC_STOP'],
		bytes : 0x78
	},
	{
		codes : ['KC_AGAIN', 'KC_AGIN'],
		bytes : 0x79
	},
	{
		codes : ['KC_UNDO'],
		bytes : 0x7a
	},
	{
		codes : ['KC_CUT'],
		bytes : 0x7b
	},
	{
		codes : ['KC_COPY'],
		bytes : 0x7c
	},
	{
		codes : ['KC_PASTE', 'KC_PSTE'],
		bytes : 0x7d
	},
	{
		codes : ['KC_FIND'],
		bytes : 0x7e
	},
	{
		codes : ['KC_LOCKING_CAPS_LOCK', 'KC_LCAP'],
		bytes : 0x82
	},
	{
		codes : ['KC_LOCKING_NUM_LOCK', 'KC_LNUM'],
		bytes : 0x83
	},
	{
		codes : ['KC_LOCKING_SCROLL_LOCK', 'KC_LSCR'],
		bytes : 0x84
	},
	{
		codes : ['KC_KP_COMMA', 'KC_PCMM'],
		bytes : 0x85
	},
	{
		codes : ['KC_KP_EQUAL_AS400'],
		bytes : 0x86
	},
	{
		codes : ['KC_INTERNATIONAL_1', 'KC_INT1'],
		bytes : 0x87
	},
	{
		codes : ['KC_INTERNATIONAL_2', 'KC_INT2'],
		bytes : 0x88
	},
	{
		codes : ['KC_INTERNATIONAL_3', 'KC_INT3'],
		bytes : 0x89
	},
	{
		codes : ['KC_INTERNATIONAL_4', 'KC_INT4'],
		bytes : 0x8a
	},
	{
		codes : ['KC_INTERNATIONAL_5', 'KC_INT5'],
		bytes : 0x8b
	},
	{
		codes : ['KC_INTERNATIONAL_6', 'KC_INT6'],
		bytes : 0x8c
	},
	{
		codes : ['KC_INTERNATIONAL_7', 'KC_INT7'],
		bytes : 0x8d
	},
	{
		codes : ['KC_INTERNATIONAL_8', 'KC_INT8'],
		bytes : 0x8e
	},
	{
		codes : ['KC_INTERNATIONAL_9', 'KC_INT9'],
		bytes : 0x8f
	},
	{
		codes : ['KC_LANGUAGE_1', 'KC_LNG1'],
		bytes : 0x90
	},
	{
		codes : ['KC_LANGUAGE_2', 'KC_LNG2'],
		bytes : 0x91
	},
	{
		codes : ['KC_LANGUAGE_3', 'KC_LNG3'],
		bytes : 0x92
	},
	{
		codes : ['KC_LANGUAGE_4', 'KC_LNG4'],
		bytes : 0x93
	},
	{
		codes : ['KC_LANGUAGE_5', 'KC_LNG5'],
		bytes : 0x94
	},
	{
		codes : ['KC_LANGUAGE_6', 'KC_LNG6'],
		bytes : 0x95
	},
	{
		codes : ['KC_LANGUAGE_7', 'KC_LNG7'],
		bytes : 0x96
	},
	{
		codes : ['KC_LANGUAGE_8', 'KC_LNG8'],
		bytes : 0x97
	},
	{
		codes : ['KC_LANGUAGE_9', 'KC_LNG9'],
		bytes : 0x98
	},
	{
		codes : ['KC_ALTERNATE_ERASE', 'KC_ERAS'],
		bytes : 0x99
	},
	{
		codes : ['KC_SYSTEM_REQUEST', 'KC_SYRQ'],
		bytes : 0x9a
	},
	{
		codes : ['KC_CANCEL', 'KC_CNCL'],
		bytes : 0x9b
	},
	{
		codes : ['KC_CLEAR', 'KC_CLR'],
		bytes : 0x9c
	},
	{
		codes : ['KC_PRIOR', 'KC_PRIR'],
		bytes : 0x9d
	},
	{
		codes : ['KC_OUT'],
		bytes : 0xa0
	},
	{
		codes : ['KC_OPER'],
		bytes : 0xa1
	},
	{
		codes : ['KC_CLEAR_AGAIN', 'KC_CLAG'],
		bytes : 0xa2
	},
	{
		codes : ['KC_CRSEL', 'KC_CRSL'],
		bytes : 0xa3
	},
	{
		codes : ['KC_EXSEL', 'KC_EXSL'],
		bytes : 0xa4
	},
	{
		codes : ['KC_SYSTEM_POWER', 'KC_PWR'],
		bytes : 0xa5
	},
	{
		codes : ['KC_SYSTEM_SLEEP', 'KC_SLEP'],
		bytes : 0xa6
	},
	{
		codes : ['KC_SYSTEM_WAKE', 'KC_WAKE'],
		bytes : 0xa7
	},
	{
		codes : ['KC_AUDIO_MUTE', 'KC_MUTE'],
		bytes : 0xa8
	},
	{
		codes : ['KC_AUDIO_VOL_UP', 'KC_VOLU'],
		bytes : 0xa9
	},
	{
		codes : ['KC_AUDIO_VOL_DOWN', 'KC_VOLD'],
		bytes : 0xaa
	},
	{
		codes : ['KC_MEDIA_NEXT_TRACK', 'KC_MNXT'],
		bytes : 0xab
	},
	{
		codes : ['KC_MEDIA_PREV_TRACK', 'KC_MPRV'],
		bytes : 0xac
	},
	{
		codes : ['KC_MEDIA_STOP', 'KC_MSTP'],
		bytes : 0xad
	},
	{
		codes : ['KC_MEDIA_PLAY_PAUSE', 'KC_MPLY'],
		bytes : 0xae
	},
	{
		codes : ['KC_MEDIA_SELECT', 'KC_MSEL'],
		bytes : 0xaf
	},
	{
		codes : ['KC_MEDIA_EJECT', 'KC_EJCT'],
		bytes : 0xb0
	},
	{
		codes : ['KC_MAIL'],
		bytes : 0xb1
	},
	{
		codes : ['KC_CALCULATOR', 'KC_CALC'],
		bytes : 0xb2
	},
	{
		codes : ['KC_MY_COMPUTER', 'KC_MYCM'],
		bytes : 0xb3
	},
	{
		codes : ['KC_WWW_SEARCH', 'KC_WSCH'],
		bytes : 0xb4
	},
	{
		codes : ['KC_WWW_HOME', 'KC_WHOM'],
		bytes : 0xb5
	},
	{
		codes : ['KC_WWW_BACK', 'KC_WBAK'],
		bytes : 0xb6
	},
	{
		codes : ['KC_WWW_FORWARD', 'KC_WFWD'],
		bytes : 0xb7
	},
	{
		codes : ['KC_WWW_STOP', 'KC_WSTP'],
		bytes : 0xb8
	},
	{
		codes : ['KC_WWW_REFRESH', 'KC_WREF'],
		bytes : 0xb9
	},
	{
		codes : ['KC_WWW_FAVORITES', 'KC_WFAV'],
		bytes : 0xba
	},
	{
		codes : ['KC_MEDIA_FAST_FORWARD', 'KC_MFFD'],
		bytes : 0xbb
	},
	{
		codes : ['KC_MEDIA_REWIND', 'KC_MRWD'],
		bytes : 0xbc
	},
	{
		codes : ['KC_BRIGHTNESS_UP', 'KC_BRIU'],
		bytes : 0xbd
	},
	{
		codes : ['KC_BRIGHTNESS_DOWN', 'KC_BRID'],
		bytes : 0xbe
	},
	{
		codes : ['KC_MS_UP', 'KC_MS_U'],
		bytes : 0xcd
	},
	{
		codes : ['KC_MS_DOWN', 'KC_MS_D'],
		bytes : 0xce
	},
	{
		codes : ['KC_MS_LEFT', 'KC_MS_L'],
		bytes : 0xcf
	},
	{
		codes : ['KC_MS_RIGHT', 'KC_MS_R'],
		bytes : 0xd0
	},
	{
		codes : ['KC_MS_BTN1', 'KC_BTN1'],
		bytes : 0xd1
	},
	{
		codes : ['KC_MS_BTN2', 'KC_BTN2'],
		bytes : 0xd2
	},
	{
		codes : ['KC_MS_BTN3', 'KC_BTN3'],
		bytes : 0xd3
	},
	{
		codes : ['KC_MS_BTN4', 'KC_BTN4'],
		bytes : 0xd4
	},
	{
		codes : ['KC_MS_BTN5', 'KC_BTN5'],
		bytes : 0xd5
	},
	{
		codes : ['KC_MS_BTN6', 'KC_BTN6'],
		bytes : 0xd6
	},
	{
		codes : ['KC_MS_BTN7', 'KC_BTN7'],
		bytes : 0xd7
	},
	{
		codes : ['KC_MS_BTN8', 'KC_BTN8'],
		bytes : 0xd8
	},
	{
		codes : ['KC_MS_WH_UP', 'KC_WH_U'],
		bytes : 0xd9
	},
	{
		codes : ['KC_MS_WH_DOWN', 'KC_WH_D'],
		bytes : 0xda
	},
	{
		codes : ['KC_MS_WH_LEFT', 'KC_WH_L'],
		bytes : 0xdb
	},
	{
		codes : ['KC_MS_WH_RIGHT', 'KC_WH_R'],
		bytes : 0xdc
	},
	{
		codes : ['KC_MS_ACCEL0', 'KC_ACL0'],
		bytes : 0xdd
	},
	{
		codes : ['KC_MS_ACCEL1', 'KC_ACL1'],
		bytes : 0xde
	},
	{
		codes : ['KC_MS_ACCEL2', 'KC_ACL2'],
		bytes : 0xdf
	},
	{
		codes : ['KC_LEFT_CTRL', 'KC_LCTL'],
		bytes : 0xe0
	},
	{
		codes : ['KC_LEFT_SHIFT', 'KC_LSFT'],
		bytes : 0xe1
	},
	{
		codes : ['KC_LEFT_ALT', 'KC_LALT', 'KC_LOPT'],
		bytes : 0xe2
	},
	{
		codes : ['KC_LEFT_GUI', 'KC_LGUI', 'KC_LCMD', 'KC_LWIN'],
		bytes : 0xe3
	},
	{
		codes : ['KC_RIGHT_CTRL', 'KC_RCTL'],
		bytes : 0xe4
	},
	{
		codes : ['KC_RIGHT_SHIFT', 'KC_RSFT'],
		bytes : 0xe5
	},
	{
		codes : ['KC_RIGHT_ALT', 'KC_RALT', 'KC_ROPT', 'KC_ALGR'],
		bytes : 0xe6
	},
	{
		codes : ['KC_RIGHT_GUI', 'KC_RGUI', 'KC_RCMD', 'KC_RWIN'],
		bytes : 0xe7
	},
	{
		codes : ['QK_BOOTLOADER', 'QK_BOOTLOADER', 'QK_RESET'],
		bytes : 0x7c00
	},
	{
		codes : ['QK_DEBUG_TOGGLE', 'DB_TOGG'],
		bytes : 0x7c02
	},
	{
		codes : ['QK_GRAVE_ESCAPE', 'KC_GESC'],
		bytes : 0x7c16
	},
	{
		codes : ['QK_AUTO_SHIFT_UP', 'AS_UP'],
		bytes : 0x7c11
	},
	{
		codes : ['QK_AUTO_SHIFT_DOWN', 'AS_DOWN'],
		bytes : 0x7c10
	},
	{
		codes : ['QK_AUTO_SHIFT_REPORT', 'AS_RPT'],
		bytes : 0x7c12
	},
	{
		codes : ['QK_AUTO_SHIFT_TOGGLE', 'AS_TOGG'],
		bytes : 0x7c15
	},
	{
		codes : ['QK_AUTO_SHIFT_ON', 'AS_ON'],
		bytes : 0x7c13
	},
	{
		codes : ['QK_AUTO_SHIFT_OFF', 'AS_OFF'],
		bytes : 0x7c14
	},
	{
		codes : ['QK_AUDIO_ON', 'AU_ON'],
		bytes : 0x7480
	},
	{
		codes : ['QK_AUDIO_OFF', 'AU_OFF'],
		bytes : 0x7481
	},
	{
		codes : ['QK_AUDIO_TOGGLE', 'AU_TOGG'],
		bytes : 0x7482
	},
	{
		codes : ['QK_AUDIO_CLICKY_TOGGLE', 'CK_TOGG'],
		bytes : 0x748a
	},
	{
		codes : ['QK_AUDIO_CLICKY_ON', 'CK_ON'],
		bytes : 0x748b
	},
	{
		codes : ['QK_AUDIO_CLICKY_OFF', 'CK_OFF'],
		bytes : 0x748c
	},
	{
		codes : ['QK_AUDIO_CLICKY_UP', 'CK_UP'],
		bytes : 0x748d
	},
	{
		codes : ['QK_AUDIO_CLICKY_DOWN', 'CK_DOWN'],
		bytes : 0x748e
	},
	{
		codes : ['QK_AUDIO_CLICKY_RESET', 'CK_RST'],
		bytes : 0x748f
	},
	{
		codes : ['QK_MUSIC_ON', 'MU_ON'],
		bytes : 0x7490
	},
	{
		codes : ['QK_MUSIC_OFF', 'MU_OFF'],
		bytes : 0x7491
	},
	{
		codes : ['QK_MUSIC_TOGGLE', 'MU_TOGG'],
		bytes : 0x7492
	},
	{
		codes : ['QK_MUSIC_MODE_NEXT', 'MU_NEXT'],
		bytes : 0x7493
	},
	{
		codes : ['QK_MIDI_ON', 'MI_ON'],
		bytes : 0x7100
	},
	{
		codes : ['QK_MIDI_OFF', 'MI_OFF'],
		bytes : 0x7101
	},
	{
		codes : ['QK_MIDI_TOGGLE', 'MI_TOGG'],
		bytes : 0x7102
	},
	{
		codes : ['QK_MIDI_NOTE_C_0', 'MI_C'],
		bytes : 0x7110
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_0', 'MI_Cs', 'MI_Db'],
		bytes : 0x7111
	},
	{
		codes : ['QK_MIDI_NOTE_D_0', 'MI_D'],
		bytes : 0x7112
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_0', 'MI_Ds', 'MI_Eb'],
		bytes : 0x7113
	},
	{
		codes : ['QK_MIDI_NOTE_E_0', 'MI_E'],
		bytes : 0x7114
	},
	{
		codes : ['QK_MIDI_NOTE_F_0', 'MI_F'],
		bytes : 0x7115
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_0', 'MI_Fs', 'MI_Gb'],
		bytes : 0x7116
	},
	{
		codes : ['QK_MIDI_NOTE_G_0', 'MI_G'],
		bytes : 0x7117
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_0', 'MI_Gs', 'MI_Ab'],
		bytes : 0x7118
	},
	{
		codes : ['QK_MIDI_NOTE_A_0', 'MI_A'],
		bytes : 0x7119
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_0', 'MI_As', 'MI_Bb'],
		bytes : 0x711a
	},
	{
		codes : ['QK_MIDI_NOTE_B_0', 'MI_B'],
		bytes : 0x711b
	},
	{
		codes : ['QK_MIDI_NOTE_C_1', 'MI_C1'],
		bytes : 0x7120
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_1', 'MI_Cs1', 'MI_Db1'],
		bytes : 0x7121
	},
	{
		codes : ['QK_MIDI_NOTE_D_1', 'MI_D1'],
		bytes : 0x7122
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_1', 'MI_Ds1', 'MI_Eb1'],
		bytes : 0x7123
	},
	{
		codes : ['QK_MIDI_NOTE_E_1', 'MI_E1'],
		bytes : 0x7124
	},
	{
		codes : ['QK_MIDI_NOTE_F_1', 'MI_F1'],
		bytes : 0x7125
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_1', 'MI_Fs1', 'MI_Gb1'],
		bytes : 0x7126
	},
	{
		codes : ['QK_MIDI_NOTE_G_1', 'MI_G1'],
		bytes : 0x7127
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_1', 'MI_Gs1', 'MI_Ab1'],
		bytes : 0x7128
	},
	{
		codes : ['QK_MIDI_NOTE_A_1', 'MI_A1'],
		bytes : 0x7129
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_1', 'MI_As1', 'MI_Bb1'],
		bytes : 0x712a
	},
	{
		codes : ['QK_MIDI_NOTE_B_1', 'MI_B1'],
		bytes : 0x712b
	},
	{
		codes : ['QK_MIDI_NOTE_C_2', 'MI_C2'],
		bytes : 0x7130
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_2', 'MI_Cs2', 'MI_Db2'],
		bytes : 0x7131
	},
	{
		codes : ['QK_MIDI_NOTE_D_2', 'MI_D2'],
		bytes : 0x7132
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_2', 'MI_Ds2', 'MI_Eb2'],
		bytes : 0x7133
	},
	{
		codes : ['QK_MIDI_NOTE_E_2', 'MI_E2'],
		bytes : 0x7134
	},
	{
		codes : ['QK_MIDI_NOTE_F_2', 'MI_F2'],
		bytes : 0x7135
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_2', 'MI_Fs2', 'MI_Gb2'],
		bytes : 0x7136
	},
	{
		codes : ['QK_MIDI_NOTE_G_2', 'MI_G2'],
		bytes : 0x7137
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_2', 'MI_Gs2', 'MI_Ab2'],
		bytes : 0x7138
	},
	{
		codes : ['QK_MIDI_NOTE_A_2', 'MI_A2'],
		bytes : 0x7139
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_2', 'MI_As2', 'MI_Bb2'],
		bytes : 0x713a
	},
	{
		codes : ['QK_MIDI_NOTE_B_2', 'MI_B2'],
		bytes : 0x713b
	},
	{
		codes : ['QK_MIDI_NOTE_C_3', 'MI_C3'],
		bytes : 0x7140
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_3', 'MI_Cs3', 'MI_Db3'],
		bytes : 0x7141
	},
	{
		codes : ['QK_MIDI_NOTE_D_3', 'MI_D3'],
		bytes : 0x7142
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_3', 'MI_Ds3', 'MI_Eb3'],
		bytes : 0x7143
	},
	{
		codes : ['QK_MIDI_NOTE_E_3', 'MI_E3'],
		bytes : 0x7144
	},
	{
		codes : ['QK_MIDI_NOTE_F_3', 'MI_F3'],
		bytes : 0x7145
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_3', 'MI_Fs3', 'MI_Gb3'],
		bytes : 0x7146
	},
	{
		codes : ['QK_MIDI_NOTE_G_3', 'MI_G3'],
		bytes : 0x7147
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_3', 'MI_Gs3', 'MI_Ab3'],
		bytes : 0x7148
	},
	{
		codes : ['QK_MIDI_NOTE_A_3', 'MI_A3'],
		bytes : 0x7149
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_3', 'MI_As3', 'MI_Bb3'],
		bytes : 0x714a
	},
	{
		codes : ['QK_MIDI_NOTE_B_3', 'MI_B3'],
		bytes : 0x714b
	},
	{
		codes : ['QK_MIDI_NOTE_C_4', 'MI_C4'],
		bytes : 0x7150
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_4', 'MI_Cs4', 'MI_Db4'],
		bytes : 0x7151
	},
	{
		codes : ['QK_MIDI_NOTE_D_4', 'MI_D4'],
		bytes : 0x7152
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_4', 'MI_Ds4', 'MI_Eb4'],
		bytes : 0x7153
	},
	{
		codes : ['QK_MIDI_NOTE_E_4', 'MI_E4'],
		bytes : 0x7154
	},
	{
		codes : ['QK_MIDI_NOTE_F_4', 'MI_F4'],
		bytes : 0x7155
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_4', 'MI_Fs4', 'MI_Gb4'],
		bytes : 0x7156
	},
	{
		codes : ['QK_MIDI_NOTE_G_4', 'MI_G4'],
		bytes : 0x7157
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_4', 'MI_Gs4', 'MI_Ab4'],
		bytes : 0x7158
	},
	{
		codes : ['QK_MIDI_NOTE_A_4', 'MI_A4'],
		bytes : 0x7159
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_4', 'MI_As4', 'MI_Bb4'],
		bytes : 0x715a
	},
	{
		codes : ['QK_MIDI_NOTE_B_4', 'MI_B4'],
		bytes : 0x715b
	},
	{
		codes : ['QK_MIDI_NOTE_C_5', 'MI_C5'],
		bytes : 0x7160
	},
	{
		codes : ['QK_MIDI_NOTE_C_SHARP_5', 'MI_Cs5', 'MI_Db5'],
		bytes : 0x7161
	},
	{
		codes : ['QK_MIDI_NOTE_D_5', 'MI_D5'],
		bytes : 0x7162
	},
	{
		codes : ['QK_MIDI_NOTE_D_SHARP_5', 'MI_Ds5', 'MI_Eb5'],
		bytes : 0x7163
	},
	{
		codes : ['QK_MIDI_NOTE_E_5', 'MI_E5'],
		bytes : 0x7164
	},
	{
		codes : ['QK_MIDI_NOTE_F_5', 'MI_F5'],
		bytes : 0x7165
	},
	{
		codes : ['QK_MIDI_NOTE_F_SHARP_5', 'MI_Fs5', 'MI_Gb5'],
		bytes : 0x7166
	},
	{
		codes : ['QK_MIDI_NOTE_G_5', 'MI_G5'],
		bytes : 0x7167
	},
	{
		codes : ['QK_MIDI_NOTE_G_SHARP_5', 'MI_Gs5', 'MI_Ab5'],
		bytes : 0x7168
	},
	{
		codes : ['QK_MIDI_NOTE_A_5', 'MI_A5'],
		bytes : 0x7169
	},
	{
		codes : ['QK_MIDI_NOTE_A_SHARP_5', 'MI_As5', 'MI_Bb5'],
		bytes : 0x716a
	},
	{
		codes : ['QK_MIDI_NOTE_B_5', 'MI_B5'],
		bytes : 0x716b
	},
	{
		codes : ['QK_MIDI_OCTAVE_N2', 'MI_OCN2'],
		bytes : 0x7170
	},
	{
		codes : ['QK_MIDI_OCTAVE_N1', 'MI_OCN1'],
		bytes : 0x7171
	},
	{
		codes : ['QK_MIDI_OCTAVE_0', 'MI_OC0'],
		bytes : 0x7172
	},
	{
		codes : ['QK_MIDI_OCTAVE_1', 'MI_OC1'],
		bytes : 0x7173
	},
	{
		codes : ['QK_MIDI_OCTAVE_2', 'MI_OC2'],
		bytes : 0x7174
	},
	{
		codes : ['QK_MIDI_OCTAVE_3', 'MI_OC3'],
		bytes : 0x7175
	},
	{
		codes : ['QK_MIDI_OCTAVE_4', 'MI_OC4'],
		bytes : 0x7176
	},
	{
		codes : ['QK_MIDI_OCTAVE_5', 'MI_OC5'],
		bytes : 0x7177
	},
	{
		codes : ['QK_MIDI_OCTAVE_6', 'MI_OC6'],
		bytes : 0x7178
	},
	{
		codes : ['QK_MIDI_OCTAVE_7', 'MI_OC7'],
		bytes : 0x7179
	},
	{
		codes : ['QK_MIDI_OCTAVE_DOWN', 'MI_OCTD'],
		bytes : 0x717a
	},
	{
		codes : ['QK_MIDI_OCTAVE_UP', 'MI_OCTU'],
		bytes : 0x717b
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N6', 'MI_TRN6'],
		bytes : 0x7180
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N5', 'MI_TRN5'],
		bytes : 0x7181
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N4', 'MI_TRN4'],
		bytes : 0x7182
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N3', 'MI_TRN3'],
		bytes : 0x7183
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N2', 'MI_TRN2'],
		bytes : 0x7184
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_N1', 'MI_TRN1'],
		bytes : 0x7185
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_0', 'MI_TR0'],
		bytes : 0x7186
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_1', 'MI_TR1'],
		bytes : 0x7187
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_2', 'MI_TR2'],
		bytes : 0x7188
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_3', 'MI_TR3'],
		bytes : 0x7189
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_4', 'MI_TR4'],
		bytes : 0x718a
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_5', 'MI_TR5'],
		bytes : 0x718b
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_6', 'MI_TR6'],
		bytes : 0x718c
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_DOWN', 'MI_TRSD'],
		bytes : 0x718d
	},
	{
		codes : ['QK_MIDI_TRANSPOSE_UP', 'MI_TRSU'],
		bytes : 0x718e
	},
	{
		codes : ['QK_MIDI_VELOCITY_0', 'MI_VL0'],
		bytes : 0x7190
	},
	{
		codes : ['QK_MIDI_VELOCITY_1', 'MI_VL1'],
		bytes : 0x7191
	},
	{
		codes : ['QK_MIDI_VELOCITY_2', 'MI_VL2'],
		bytes : 0x7192
	},
	{
		codes : ['QK_MIDI_VELOCITY_3', 'MI_VL3'],
		bytes : 0x7193
	},
	{
		codes : ['QK_MIDI_VELOCITY_4', 'MI_VL4'],
		bytes : 0x7194
	},
	{
		codes : ['QK_MIDI_VELOCITY_5', 'MI_VL5'],
		bytes : 0x7195
	},
	{
		codes : ['QK_MIDI_VELOCITY_6', 'MI_VL6'],
		bytes : 0x7196
	},
	{
		codes : ['QK_MIDI_VELOCITY_7', 'MI_VL7'],
		bytes : 0x7197
	},
	{
		codes : ['QK_MIDI_VELOCITY_8', 'MI_VL8'],
		bytes : 0x7198
	},
	{
		codes : ['QK_MIDI_VELOCITY_9', 'MI_VL9'],
		bytes : 0x7199
	},
	{
		codes : ['QK_MIDI_VELOCITY_10', 'MI_VL10'],
		bytes : 0x719a
	},
	{
		codes : ['QK_MIDI_VELOCITY_DOWN', 'MI_VELD'],
		bytes : 0x719b
	},
	{
		codes : ['QK_MIDI_VELOCITY_UP', 'MI_VELU'],
		bytes : 0x719c
	},
	{
		codes : ['QK_MIDI_CHANNEL_1', 'MI_CH1'],
		bytes : 0x71a0
	},
	{
		codes : ['QK_MIDI_CHANNEL_2', 'MI_CH2'],
		bytes : 0x71a1
	},
	{
		codes : ['QK_MIDI_CHANNEL_3', 'MI_CH3'],
		bytes : 0x71a2
	},
	{
		codes : ['QK_MIDI_CHANNEL_4', 'MI_CH4'],
		bytes : 0x71a3
	},
	{
		codes : ['QK_MIDI_CHANNEL_5', 'MI_CH5'],
		bytes : 0x71a4
	},
	{
		codes : ['QK_MIDI_CHANNEL_6', 'MI_CH6'],
		bytes : 0x71a5
	},
	{
		codes : ['QK_MIDI_CHANNEL_7', 'MI_CH7'],
		bytes : 0x71a6
	},
	{
		codes : ['QK_MIDI_CHANNEL_8', 'MI_CH8'],
		bytes : 0x71a7
	},
	{
		codes : ['QK_MIDI_CHANNEL_9', 'MI_CH9'],
		bytes : 0x71a8
	},
	{
		codes : ['QK_MIDI_CHANNEL_10', 'MI_CH10'],
		bytes : 0x71a9
	},
	{
		codes : ['QK_MIDI_CHANNEL_11', 'MI_CH11'],
		bytes : 0x71aa
	},
	{
		codes : ['QK_MIDI_CHANNEL_12', 'MI_CH12'],
		bytes : 0x71ab
	},
	{
		codes : ['QK_MIDI_CHANNEL_13', 'MI_CH13'],
		bytes : 0x71ac
	},
	{
		codes : ['QK_MIDI_CHANNEL_14', 'MI_CH14'],
		bytes : 0x71ad
	},
	{
		codes : ['QK_MIDI_CHANNEL_15', 'MI_CH15'],
		bytes : 0x71ae
	},
	{
		codes : ['QK_MIDI_CHANNEL_16', 'MI_CH16'],
		bytes : 0x71af
	},
	{
		codes : ['QK_MIDI_CHANNEL_DOWN', 'MI_CHND'],
		bytes : 0x71b0
	},
	{
		codes : ['QK_MIDI_CHANNEL_UP', 'MI_CHNU'],
		bytes : 0x71b1
	},
	{
		codes : ['QK_MIDI_ALL_NOTES_OFF', 'MI_AOFF'],
		bytes : 0x71c0
	},
	{
		codes : ['QK_MIDI_SUSTAIN', 'MI_SUST'],
		bytes : 0x71c1
	},
	{
		codes : ['QK_MIDI_PORTAMENTO', 'MI_PORT'],
		bytes : 0x71c2
	},
	{
		codes : ['QK_MIDI_SOSTENUTO', 'MI_SOST'],
		bytes : 0x71c3
	},
	{
		codes : ['QK_MIDI_SOFT', 'MI_SOFT'],
		bytes : 0x71c4
	},
	{
		codes : ['QK_MIDI_LEGATO', 'MI_LEG'],
		bytes : 0x71c5
	},
	{
		codes : ['QK_MIDI_MODULATION', 'MI_MOD'],
		bytes : 0x71c6
	},
	{
		codes : ['QK_MIDI_MODULATION_SPEED_DOWN', 'MI_MODD'],
		bytes : 0x71c7
	},
	{
		codes : ['QK_MIDI_MODULATION_SPEED_UP', 'MI_MODU'],
		bytes : 0x71c8
	},
	{
		codes : ['QK_MIDI_PITCH_BEND_DOWN', 'MI_BNDD'],
		bytes : 0x71c9
	},
	{
		codes : ['QK_MIDI_PITCH_BEND_UP', 'MI_BNDU'],
		bytes : 0x71ca
	},
	{
		codes : ['QK_BACKLIGHT_ON', 'BL_ON'],
		bytes : 0x7800
	},
	{
		codes : ['QK_BACKLIGHT_OFF', 'BL_OFF'],
		bytes : 0x7801
	},
	{
		codes : ['QK_BACKLIGHT_DOWN', 'BL_DOWN'],
		bytes : 0x7803
	},
	{
		codes : ['QK_BACKLIGHT_UP', 'BL_UP'],
		bytes : 0x7804
	},
	{
		codes : ['QK_BACKLIGHT_TOGGLE', 'BL_TOGG'],
		bytes : 0x7802
	},
	{
		codes : ['QK_BACKLIGHT_STEP', 'BL_STEP'],
		bytes : 0x7805
	},
	{
		codes : ['QK_BACKLIGHT_TOGGLE_BREATHING', 'BL_BRTG'],
		bytes : 0x7806
	},
	{
		codes : ['RGB_TOG'],
		bytes : 0x7820
	},
	{
		codes : ['RGB_MODE_FORWARD', 'RGB_MOD'],
		bytes : 0x7821
	},
	{
		codes : ['RGB_MODE_REVERSE', 'RGB_RMOD'],
		bytes : 0x7822
	},
	{
		codes : ['RGB_HUI'],
		bytes : 0x7823
	},
	{
		codes : ['RGB_HUD'],
		bytes : 0x7824
	},
	{
		codes : ['RGB_SAI'],
		bytes : 0x7825
	},
	{
		codes : ['RGB_SAD'],
		bytes : 0x7826
	},
	{
		codes : ['RGB_VAI'],
		bytes : 0x7827
	},
	{
		codes : ['RGB_VAD'],
		bytes : 0x7828
	},
	{
		codes : ['RGB_SPI'],
		bytes : 0x7829
	},
	{
		codes : ['RGB_SPD'],
		bytes : 0x782a
	},
	{
		codes : ['RGB_MODE_PLAIN', 'RGB_M_P'],
		bytes : 0x782b
	},
	{
		codes : ['RGB_MODE_BREATHE', 'RGB_M_B'],
		bytes : 0x782c
	},
	{
		codes : ['RGB_MODE_RAINBOW', 'RGB_M_R'],
		bytes : 0x782d
	},
	{
		codes : ['RGB_MODE_SWIRL', 'RGB_M_SW'],
		bytes : 0x782e
	},
	{
		codes : ['RGB_MODE_SNAKE', 'RGB_M_SN'],
		bytes : 0x782f
	},
	{
		codes : ['RGB_MODE_KNIGHT', 'RGB_M_K'],
		bytes : 0x7830
	},
	{
		codes : ['RGB_MODE_XMAS', 'RGB_M_X'],
		bytes : 0x7831
	},
	{
		codes : ['RGB_MODE_GRADIENT', 'RGB_M_G'],
		bytes : 0x7832
	},
	{
		codes : ['RGB_MODE_RGBTEST', 'RGB_M_T'],
		bytes : 0x7833
	},
	{
		codes : ['QK_VELOCIKEY_TOGGLE', 'VK_TOGG'],
		bytes : 0x7c17
	},
	{
		codes : ['QK_SPACE_CADET_LEFT_CTRL_PARENTHESIS_OPEN', 'SC_LCPO'],
		bytes : 0x7c18
	},
	{
		codes : ['QK_SPACE_CADET_RIGHT_CTRL_PARENTHESIS_CLOSE', 'SC_RCPC'],
		bytes : 0x7c19
	},
	{
		codes : ['QK_SPACE_CADET_LEFT_SHIFT_PARENTHESIS_OPEN', 'SC_LSPO'],
		bytes : 0x7c1a
	},
	{
		codes : ['QK_SPACE_CADET_RIGHT_SHIFT_PARENTHESIS_CLOSE', 'KC_RSPC'],
		bytes : 0x7c1b
	},
	{
		codes : ['QK_SPACE_CADET_LEFT_ALT_PARENTHESIS_OPEN', 'KC_LAPO'],
		bytes : 0x7c1c
	},
	{
		codes : ['QK_SPACE_CADET_RIGHT_ALT_PARENTHESIS_CLOSE', 'KC_RAPC'],
		bytes : 0x7c1d
	},
	{
		codes : ['QK_SPACE_CADET_RIGHT_SHIFT_ENTER', 'SC_SENT'],
		bytes : 0x7c1e
	},
	{
		codes : ['QK_OUTPUT_AUTO', 'OU_AUTO'],
		bytes : 0x7c20
	},
	{
		codes : ['QK_OUTPUT_USB', 'OU_USB'],
		bytes : 0x7c21
	},
	{
		codes : ['QK_CLEAR_EEPROM'],
		bytes : 0x7c03
	},
	{
		codes : ['QK_HAPTIC_ON', 'HF_ON'],
		bytes : 0x7c40
	},
	{
		codes : ['QK_HAPTIC_OFF', 'HF_OFF'],
		bytes : 0x7c41
	},
	{
		codes : ['QK_HAPTIC_TOGGLE', 'HF_TOGG'],
		bytes : 0x7c42
	},
	{
		codes : ['QK_HAPTIC_RESET', 'HF_RST'],
		bytes : 0x7c43
	},
	{
		codes : ['QK_HAPTIC_FEEDBACK_TOGGLE', 'HF_FDBK'],
		bytes : 0x7c44
	},
	{
		codes : ['QK_HAPTIC_BUZZ_TOGGLE', 'HF_BUZZ'],
		bytes : 0x7c45
	},
	{
		codes : ['QK_HAPTIC_MODE_NEXT', 'HF_NEXT'],
		bytes : 0x7c46
	},
	{
		codes : ['QK_HAPTIC_MODE_PREVIOUS', 'HF_PREV'],
		bytes : 0x7c47
	},
	{
		codes : ['QK_HAPTIC_CONTINUOUS_TOGGLE', 'HF_CONT'],
		bytes : 0x7c48
	},
	{
		codes : ['QK_HAPTIC_CONTINUOUS_UP', 'HF_CONU'],
		bytes : 0x7c49
	},
	{
		codes : ['QK_HAPTIC_CONTINUOUS_DOWN', 'HF_COND'],
		bytes : 0x7c4a
	},
	{
		codes : ['QK_HAPTIC_DWELL_UP', 'HF_DWLU'],
		bytes : 0x7c4b
	},
	{
		codes : ['QK_HAPTIC_DWELL_DOWN', 'HF_DWLD'],
		bytes : 0x7c4c
	},
	{
		codes : ['QK_COMBO_ON', 'CM_ON'],
		bytes : 0x7c50
	},
	{
		codes : ['QK_COMBO_OFF', 'CM_OFF'],
		bytes : 0x7c51
	},
	{
		codes : ['QK_COMBO_TOGGLE', 'CM_TOGG'],
		bytes : 0x7c52
	},
	{
		codes : ['QK_MAGIC_SWAP_LCTL_LGUI', 'CG_LSWP'],
		bytes : 0x7017
	},
	{
		codes : ['QK_MAGIC_UNSWAP_LCTL_LGUI', 'CG_LNRM'],
		bytes : 0x7018
	},
	{
		codes : ['QK_MAGIC_SWAP_RCTL_RGUI', 'CG_RSWP'],
		bytes : 0x7019
	},
	{
		codes : ['QK_MAGIC_UNSWAP_RCTL_RGUI', 'CG_RNRM'],
		bytes : 0x701a
	},
	{
		codes : ['QK_MAGIC_SWAP_CTL_GUI', 'CG_SWAP'],
		bytes : 0x701b
	},
	{
		codes : ['QK_MAGIC_UNSWAP_CTL_GUI', 'CG_NORM'],
		bytes : 0x701c
	},
	{
		codes : ['QK_MAGIC_TOGGLE_CTL_GUI', 'CG_TOGG'],
		bytes : 0x701d
	},
	{
		codes : ['QK_MAGIC_TOGGLE_NKRO', 'NK_TOGG'],
		bytes : 0x7013
	},
	{
		codes : ['QK_MAGIC_EE_HANDS_LEFT', 'EH_LEFT'],
		bytes : 0x701e
	},
	{
		codes : ['QK_MAGIC_EE_HANDS_RIGHT', 'EH_RGHT'],
		bytes : 0x701f
	},
	{
		codes : ['QK_DYNAMIC_MACRO_RECORD_START_1', 'DM_REC1'],
		bytes : 0x7c53
	},
	{
		codes : ['QK_DYNAMIC_MACRO_RECORD_START_2', 'DM_REC2'],
		bytes : 0x7c54
	},
	{
		codes : ['QK_DYNAMIC_MACRO_PLAY_1', 'DM_PLY1'],
		bytes : 0x7c56
	},
	{
		codes : ['QK_DYNAMIC_MACRO_PLAY_2', 'DM_PLY2'],
		bytes : 0x7c57
	},
	{
		codes : ['QK_DYNAMIC_MACRO_RECORD_STOP', 'DM_RSTP'],
		bytes : 0x7c55
	},
	{
		codes : ['FN_MO13'],
		bytes : 0x7c77
	},
	{
		codes : ['FN_MO23'],
		bytes : 0x7c78
	}
];
