# k3config for Keycube

k3config is a web application that simplify the keycube key layout configuration process for the end user.

## Technology

In order to configure a QMK keyboard multiple methods are possibles (see *QMK.md*).

The k3config web application could provide a C file containing the user customized keymap which would then need to be compiled + flashed onto the keyboard or configure the keyboard on the fly using the WebHID protocol.

k3config can currently import & export the keycube configuration through a JSON file (see *template.json*).

## Interface

The k3config web application relies currently heavily on 3 keycube components :
- **net** : displays the current keycube keymap through a net view of the keycube
- **key-mapper** : displays a popup to edit a selected key
- **layer-selector** : displays buttons to change the current visible & active keycube layer

All of these components / views are on the same page in order to quickly uses them without reloading the page after each user action.

On top of these components / views an option menu allows the users to perform the following actions :
- **Export JSON**
- **Import JSON**
- **Toggle theme**

## JSON format

This section is made specifically to describe and comment the keymap in the JSON format.

**Metadata** :
```
{
  "version": 1,
  "keycube-id": "keycube_3x3",
  "name": "My Keycube 3x3 Key Layout",
  "description": "My Keycube 3x3 Key layout (see keycodes : https://github.com/qmk/qmk_firmware/blob/master/docs/keycodes.md)",
```

This part of the Json format describe some metadata about the keycube :
- "version" : gives the current keycube version of the Json file
- "keycube-id" : specify for which keyboard is the Json intended for (here for a keycube with 3 keys by 3 keys).
- "name" : contains a name for the Keymap
- "description" : contains a short description about the keymap

The metadata for the keycube is fairly similar to the Qmk or Via Json format, however there is a minor difference in the way key layers are defined :
```
  "north-layers": [
    [
      "KC_A",
      "KC_B",
      "KC_C",
      "KC_D",
      "KC_E",
      "KC_F",
      "KC_G",
      "KC_H",
      "KC_I"
      ],
      [
        ...
      ],
      "west-layers":
      ...
}
```
As you can see instead of having a single layers array just like Qmk or Via, there is one array per face of the keycube.

The keycube uses cardinal direction to define each of its faces, the order in which keys are assigned goes from left to right and descend line by line; the orientation of the face can be easily understood by simply loading the template configuration in the k3config web application.

