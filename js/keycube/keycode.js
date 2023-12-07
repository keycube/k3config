/* Keycodes array
   code           : is the qmk keycode name
   name           : html key name (Same as event.key)
   representation : custom representation
   bytes          : used in the webHID data packets
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
		codes : [ "_QK_MODS" ],
		bytes : 0x0100
	},
	{
		codes : [ "_QK_MODS_MAX" ],
		bytes : 0x1fff
	},
	{
		codes : [ "_QK_MOD_TAP" ],
		bytes : 0x6000
	},
	{
		codes : [ "_QK_MOD_TAP_MAX" ],
		bytes : 0x7fff
	},
	{
		codes : [ "_QK_LAYER_TAP" ],
		bytes : 0x4000
	},
	{
		codes : [ "_QK_LAYER_TAP_MAX" ],
		bytes : 0x4fff
	},
	{
		codes : [ "_QK_LAYER_MOD" ],
		bytes : 0x5900
	},
	{
		codes : [ "_QK_LAYER_MOD_MAX" ],
		bytes : 0x59ff
	},
	{
		codes : [ "_QK_TO" ],
		bytes : 0x5010
	},
	{
		codes : [ "_QK_TO_MAX" ],
		bytes : 0x501f
	},
	{
		codes : [ "_QK_MOMENTARY" ],
		bytes : 0x5100
	},
	{
		codes : [ "_QK_MOMENTARY_MAX" ],
		bytes : 0x511f
	},
	{
		codes : [ "_QK_DEF_LAYER" ],
		bytes : 0x5200
	},
	{
		codes : [ "_QK_DEF_LAYER_MAX" ],
		bytes : 0x521f
	},
	{
		codes : [ "_QK_TOGGLE_LAYER" ],
		bytes : 0x5300
	},
	{
		codes : [ "_QK_TOGGLE_LAYER_MAX" ],
		bytes : 0x531f
	},
	{
		codes : [ "_QK_ONE_SHOT_LAYER" ],
		bytes : 0x5400
	},
	{
		codes : [ "_QK_ONE_SHOT_LAYER_MAX" ],
		bytes : 0x541f
	},
	{
		codes : [ "_QK_ONE_SHOT_MOD" ],
		bytes : 0x5500
	},
	{
		codes : [ "_QK_ONE_SHOT_MOD_MAX" ],
		bytes : 0x55ff
	},
	{
		codes : [ "_QK_LAYER_TAP_TOGGLE" ],
		bytes : 0x5800
	},
	{
		codes : [ "_QK_LAYER_TAP_TOGGLE_MAX" ],
		bytes : 0x581f
	},
	{
		codes : [ "_QK_LAYER_MOD_MASK" ],
		bytes : 0x0f
	},
	{
		codes : [ "_QK_MACRO" ],
		bytes : 0x5f12
	},
	{
		codes : [ "_QK_MACRO_MAX" ],
		bytes : 0x5f21
	},
	{
		codes : [ "_QK_KB" ],
		bytes : 0x5f80
	},
	{
		codes : [ "_QK_KB_MAX" ],
		bytes : 0x5f8f
	},
	{
		codes : [ "KC_NO", "XXXXXXX" ],
		bytes : 0x0000
	},
	{
		codes : [ "KC_TRANSPARENT", "KC_TRNS", "_______" ],
		bytes : 0x0001
	},
	{
		codes : [ "KC_A" ],
		names : [ "a", "A" ],
		representation : "A",
		bytes : 0x0004
	},
	{
		codes : [ "KC_B" ],
		names : [ "b", "B" ],
		representation : "B",
		bytes : 0x0005
	},
	{
		codes : [ "KC_C" ],
		names : [ "c", "C" ],
		representation : "C",
		bytes : 0x0006
	},
	{
		codes : [ "KC_D" ],
		names : [ "d", "D" ],
		representation : "D",
		bytes : 0x0007
	},
	{
		codes : [ "KC_E" ],
		names : [ "e", "E" ],
		representation : "E",
		bytes : 0x0008
	},
	{
		codes : [ "KC_F" ],
		names : [ "f", "F" ],
		representation : "F",
		bytes : 0x0009
	},
	{
		codes : [ "KC_G" ],
		names : [ "g", "G" ],
		representation : "G",
		bytes : 0x000a
	},
	{
		codes : [ "KC_H" ],
		names : [ "h", "H" ],
		representation : "H",
		bytes : 0x000b
	},
	{
		codes : [ "KC_I" ],
		names : [ "i", "I" ],
		representation : "I",
		bytes : 0x000c
	},
	{
		codes : [ "KC_J" ],
		names : [ "j", "J" ],
		representation : "J",
		bytes : 0x000d
	},
	{
		codes : [ "KC_K" ],
		names : [ "k", "K" ],
		representation : "K",
		bytes : 0x000e
	},
	{
		codes : [ "KC_L" ],
		names : [ "l", "L" ],
		representation : "L",
		bytes : 0x000f
	},
	{
		codes : [ "KC_M" ],
		names : [ "m", "M" ],
		representation : "M",
		bytes : 0x0010
	},
	{
		codes : [ "KC_N" ],
		names : [ "n", "N" ],
		representation : "N",
		bytes : 0x0011
	},
	{
		codes : [ "KC_O" ],
		names : [ "o", "O" ],
		representation : "O",
		bytes : 0x0012
	},
	{
		codes : [ "KC_P" ],
		names : [ "p", "P" ],
		representation : "P",
		bytes : 0x0013
	},
	{
		codes : [ "KC_Q" ],
		names : [ "q", "Q" ],
		representation : "Q",
		bytes : 0x0014
	},
	{
		codes : [ "KC_R" ],
		names : [ "r", "R" ],
		representation : "R",
		bytes : 0x0015
	},
	{
		codes : [ "KC_S" ],
		names : [ "s", "S" ],
		representation : "S",
		bytes : 0x0016
	},
	{
		codes : [ "KC_T" ],
		names : [ "t", "T" ],
		representation : "T",
		bytes : 0x0017
	},
	{
		codes : [ "KC_U" ],
		names : [ "u", "U" ],
		representation : "U",
		bytes : 0x0018
	},
	{
		codes : [ "KC_V" ],
		names : [ "v", "V" ],
		representation : "V",
		bytes : 0x0019
	},
	{
		codes : [ "KC_W" ],
		names : [ "w", "W" ],
		representation : "W",
		bytes : 0x001a
	},
	{
		codes : [ "KC_X" ],
		names : [ "x", "X" ],
		representation : "X",
		bytes : 0x001b
	},
	{
		codes : [ "KC_Y" ],
		names : [ "y", "Y" ],
		representation : "Y",
		bytes : 0x001c
	},
	{
		codes : [ "KC_Z" ],
		names : [ "z", "Z" ],
		representation : "Z",
		bytes : 0x001d
	},
	{
		codes : [ "KC_1" ],
		names : [ "1", "!" ],
		representation : "1",
		bytes : 0x001e
	},
	{
		codes : [ "KC_2" ],
		names : [ "2", "@" ],
		representation : "2",
		bytes : 0x001f
	},
	{
		codes : [ "KC_3" ],
		names : [ "3", "#" ],
		representation : "3",
		bytes : 0x0020
	},
	{
		codes : [ "KC_4" ],
		names : [ "4", "$" ],
		representation : "4",
		bytes : 0x0021
	},
	{
		codes : [ "KC_5" ],
		names : [ "5", "%" ],
		representation : "5",
		bytes : 0x0022
	},
	{
		codes : [ "KC_6" ],
		names : [ "6", "^" ],
		representation : "6",
		bytes : 0x0023
	},
	{
		codes : [ "KC_7" ],
		names : [ "7", "&" ],
		representation : "7",
		bytes : 0x0024
	},
	{
		codes : [ "KC_8" ],
		names : [ "8", "*" ],
		representation : "8",
		bytes : 0x0025
	},
	{
		codes : [ "KC_9" ],
		names : [ "9", "(" ],
		representation : "9",
		bytes : 0x0026
	},
	{
		codes : [ "KC_0" ],
		names : [ "0", ")" ],
		representation : "0",
		bytes : 0x0027
	},
	{
		codes : [ "KC_ENTER", "KC_ENT" ],
		names : [ "Enter" ],
		representation : "ENT",
		bytes : 0x0028
	},
	{
		codes : [ "KC_ESCAPE", "KC_ESC" ],
		names : [ "Escape" ],
		representation : "ESC",
		bytes : 0x0029
	},
	{
		codes : [ "KC_BACKSPACE", "KC_BSPC" ],
		names : [ "Backspace" ],
		representation : "DEL",
		bytes : 0x002a
	},
	{
		codes : [ "KC_TAB" ],
		names : [ "Tab" ],
		representation : "TAB",
		bytes : 0x002b
	},
	{
		codes : [ "KC_SPACE", "KC_SPC" ],
		names : [ " " ],
		representation : "SPC",
		bytes : 0x002c
	},
	{
		codes : [ "KC_MINUS", "KC_MINS" ],
		names : [ "-", "_" ],
		representation : "-",
		bytes : 0x002d
	},
	{
		codes : [ "KC_EQUAL", "KC_EQL" ],
		names : [ "=", "+" ],
		representation : "=",
		bytes : 0x002e
	},
	{
		codes : [ "KC_LEFT_BRACKET", "KC_LBRC" ],
		names : [ "[", "{" ],
		representation : "[",
		bytes : 0x002f
	},
	{
		codes : [ "KC_RIGHT_BRACKET", "KC_RBRC" ],
		names : [ "]", "}" ],
		representation : "]",
		bytes : 0x0030
	},
	{
		codes : [ "KC_BACKSLASH", "KC_BSLS" ],
		names : [ "\\", "|" ],
		representation : "\\",
		bytes : 0x0031
	},
	{
		codes : [ "KC_NONUS_HASH", "KC_NUHS" ],
		names : [ "#", "~" ],
		representation : "#",
		bytes : 0x0032
	},
	{
		codes : [ "KC_SEMICOLON", "KC_SCLN" ],
		names : [ ";", ":" ],
		representation : ";",
		bytes : 0x0033
	},
	{
		codes : [ "KC_QUOTE", "KC_QUOT" ],
		names : [ "'", "\"" ],
		representation : "'",
		bytes : 0x0034
	},
	{
		codes : [ "KC_GRAVE", "KC_GRV" ],
		names : [ "`", "~" ],
		representation : "`",
		bytes : 0x0035
	},
	{
		codes : [ "KC_COMMA", "KC_COMM" ],
		names : [ ",", "<" ],
		representation : ",",
		bytes : 0x0036
	},
	{
		codes : [ "KC_DOT" ],
		names : [ ".", ">" ],
		representation : ".",
		bytes : 0x0037
	},
	{
		codes : [ "KC_SLASH", "KC_SLSH" ],
		names : [ "/", "?" ],
		representation : "/",
		bytes : 0x0038
	},
	{
		codes : [ "KC_CAPS_LOCK", "KC_CAPS" ],
		names : [ "CapsLock" ],
		representation : "CPS",
		bytes : 0x0039
	},
	{
		codes : [ "KC_F1" ],
		names : [ "F1" ],
		representation : "F1",
		bytes : 0x003a
	},
	{
		codes : [ "KC_F2" ],
		names : [ "F2" ],
		representation : "F2",
		bytes : 0x003b
	},
	{
		codes : [ "KC_F3" ],
		names : [ "F3" ],
		representation : "F3",
		bytes : 0x003c
	},
	{
		codes : [ "KC_F4" ],
		names : [ "F4" ],
		representation : "F4",
		bytes : 0x003d
	},
	{
		codes : [ "KC_F5" ],
		names : [ "F5" ],
		representation : "F5",
		bytes : 0x003e
	},
	{
		codes : [ "KC_F6" ],
		names : [ "F6" ],
		representation : "F6",
		bytes : 0x003f
	},
	{
		codes : [ "KC_F7" ],
		names : [ "F7" ],
		representation : "F7",
		bytes : 0x0040
	},
	{
		codes : [ "KC_F8" ],
		names : [ "F8" ],
		representation : "F8",
		bytes : 0x0041
	},
	{
		codes : [ "KC_F9" ],
		names : [ "F9" ],
		representation : "F9",
		bytes : 0x0042
	},
	{
		codes : [ "KC_F10" ],
		names : [ "F10" ],
		representation : "F10",
		bytes : 0x0043
	},
	{
		codes : [ "KC_F11" ],
		names : [ "F11" ],
		representation : "F11",
		bytes : 0x0044
	},
	{
		codes : [ "KC_F12" ],
		names : [ "F12" ],
		representation : "F12",
		bytes : 0x0045
}
];
