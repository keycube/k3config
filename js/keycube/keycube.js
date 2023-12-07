const keycubeFaces = {
	'north-layers' : 'north-layers' ,
	'west-layers'  : 'west-layers'  ,
	'middle-layers': 'middle-layers',
	'east-layers'  : 'east-layers'  ,
	'south-layers' : 'south-layers'
}

const keycubeLayerNumber = 4;

const keycubeKeyNumber = {
	'keycube_1x1': 1,
	'keycube_2x2': 4,
	'keycube_3x3': 9,
	'keycube_4x4': 16,
	'keycube_5x5': 25,
	'keycube_6x6': 36
}

var loadedLayout = null;

const KeycubeLayout =
{
	create: function (keycube_id, name, description) {
		let self = Object.create(this);

		if (!keycubeKeyNumber.hasOwnProperty(keycube_id)) {
			return;
		}

		self.version = 1;

		self['keycube-id'] = keycube_id;

		self.name = (typeof(name) !== 'string')
			? '(Empty)'
			: name;

		self.description = (typeof(description) !== 'string')
			? '(Empty)'
			: description;

		for (let face in keycubeFaces) {
			self[face] = []

			for (let layer = 0; layer < keycubeLayerNumber; layer++) {
				self[face][layer] = []

				for (let key = 0; key < keycubeKeyNumber[self['keycube-id']]; key++) {
					switch (layer) {
					case 0:
						self[face][layer][key] = 'KC_A';
						break;

					case 1:
						self[face][layer][key] = 'KC_B';
						break;

					case 2:
						self[face][layer][key] = 'KC_C';
						break;
					case 3:
						self[face][layer][key] = 'KC_D';
						break;
					}
				}
			}
		}

		self.activeLayer = 0;

		loadedLayout = self;

		return self;
	},

	createFromJson: function (json) {
		let self = Object.create(this);

		try {
			jsonObject = JSON.parse(json);

			self = this.create(jsonObject['keycube-id']);
			if (!self) {
				throw Error('Invalid Keycube Id in Json !');
			}

			if (!self.loadJson(json)) {
				throw Error('Invalid Json !');
			}
		}
		catch {
			loadedLayout = null;
			return;
		}

		return self;
	},

	loadJson: function (json) {
		if (!KeycubeLayout.isPrototypeOf(this)) {
			return false;
		}

		try {
			jsonObject = JSON.parse(json);

			if (typeof(jsonObject.version) !== 'number'
			|| jsonObject.version !== 1) {
				throw Error('Invalid Version');
			}

			if (typeof(jsonObject['keycube-id']) !== 'string'
			||  jsonObject['keycube-id'] !== this['keycube-id']) {
				throw Error('Invalid Keycube Id');
			}
		}
		catch {
			return false;
		}

		this.name = (typeof(jsonObject.name) === 'string')
			? jsonObject.name
			: this.name;

		this.description = (typeof(jsonObject.description) === 'string')
			? jsonObject.name
			: this.name;

		for (let face in jsonObject) {
			if (!(face in keycubeFaces)
			||  !(Array.isArray(jsonObject[face]))) {
				continue;
			}

			for (let layer in jsonObject[face]) {
				if (!Array.isArray(jsonObject[face][layer])) {
					continue;
				}

				for (let key in jsonObject[face][layer]) {
					if (typeof(jsonObject[face][layer][key]) !== 'string'
					||  jsonObject[face][layer][key].length <= 0) {
						continue;
					}

					this[face][layer][key] = jsonObject[face][layer][key];
				}
			}
		}

		return true;
	},

	switchLayer: function (layer) {
		if (!KeycubeLayout.isPrototypeOf(this)) {
			return false;
		}

		if (typeof(layer) !== 'number'
		|| (layer < 0 || layer >= keycubeLayerNumber)) {
			return false;
		}

		this.activeLayer = layer;

		try {
			KeycubeNet.refreshElements();
			KeycubeKeyMapper.addKeycubeNetEvents();
			KeycubeLayerSelector.refreshElements();
		}
		catch {}

		return true;
	},

	editKey: function (face, layer, key, code) {
		if (!KeycubeLayout.isPrototypeOf(this)
		||  typeof(face)  !== 'string'
		||  typeof(layer) !== 'number'
		||  typeof(key)   !== 'number'
		||  typeof(code)  !== 'string') {
			return false;
		}

		if (!face.endsWith('-layers')) {
			face += '-layers'
		}

		face = face.toLowerCase();

		if (!(face in keycubeFaces)
		|| layer < 0 || layer >= this[face].length
		|| key   < 0 || key   >= this[face][layer].length) {
			return false;
		}

		this[face][layer][key] = code;

		try {
			KeycubeNet.refreshElements();
		}
		catch {}

		return true;
	},

	exportJson: function () {
		if (!KeycubeLayout.isPrototypeOf(this)) {
			return;
		}

		return JSON.stringify(this, null, 2);
	},

	info: function () {
		if (!KeycubeLayout.isPrototypeOf(this)) {
			return;
		}

		console.log('name: ' + this.name);
		console.log('description: ' + this.description);

		for (let face in keycubeFaces) {
			console.log(face + ': [');

			for (let layer in this[face]) {
				console.log(this[face][layer]);
			}

			console.log('];');
		}
	}
}



















var test_overwrite_json = `{
	\"version\": 1,
	\"name\": \"Overwritten Keycube 3x3 configuration\",
	\"description\": \"This was overwritten\",
	\"keycube-id\": \"keycube_3x3\",
	\"north-layers\": [
		[ \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\" ],
		[ \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\" ],
		[ \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\" ],
		[ \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\" ]
	],
	\"west-layers\": [
		[ \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\" ],
		[ \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\" ],
		[ \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\" ],
		[ \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\" ]
	],
	\"middle-layers\": [
		[ \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\" ],
		[ \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\" ],
		[ \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\" ],
		[ \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\" ]
	],
	\"east-layers\": [
		[ \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\" ],
		[ \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\" ],
		[ \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\" ],
		[ \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\" ]
	],
	\"south-layers\": [
		[ \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\" ],
		[ \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\", \"KC_F\" ],
		[ \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\", \"KC_G\" ],
		[ \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\", \"KC_H\" ]
	]
}`

var test_overwrite_description_json = `{
	\"version\": 1,
	\"name\": \"Overwritten Keycube 3x3 configuration\",
	\"description\": \"This was overwritten\",
	\"keycube-id\": \"keycube_3x3\"
}`

var test_overwrite_last_layer_json = `{
	\"version\": 1,
	\"name\": \"Overwritten Keycube 3x3 configuration\",
	\"description\": \"This was overwritten\",
	\"keycube-id\": \"keycube_3x3\",
	\"north-layers\": [
		[],
		[],
		[],
		[ \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\", \"KC_A\" ]
	],
	\"west-layers\": [
		[],
		[],
		[],
		[ \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\", \"KC_B\" ]
	],
	\"middle-layers\": [
		[],
		[],
		[],
		[ \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\", \"KC_C\" ]
	],
	\"east-layers\": [
		[],
		[],
		[],
		[ \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\", \"KC_D\" ]
	],
	\"south-layers\": [
		[],
		[],
		[],
		[ \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\", \"KC_E\" ]
	]
}`

var test_overwrite_last_key_json = `{
	\"version\": 1,
	\"name\": \"Overwritten Keycube 3x3 configuration\",
	\"description\": \"This was overwritten\",
	\"keycube-id\": \"keycube_3x3\",
	\"north-layers\": [
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ]
	],
	\"west-layers\": [
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ]
	],
	\"middle-layers\": [
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ]
	],
	\"east-layers\": [
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ]
	],
	\"south-layers\": [
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, \"KC_ENTER\" ]
	]
}`
