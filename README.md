# k3config for Keycube

The keycube should be easily customizable for end users, therefore it is primordial to provide some useful tools.

This is where k3config comes in, the goal of this project is to provide an easy to use online web application to allow anyone to be able to modify the keycube keymap layout and the RGB lighting.

## Technology

In order to configure the keyboard k3config would be able to be provide a C file containing the user customized keymap which would then need to be compiled + flashed onto the keyboard or configure the keyboard on the fly using the WebHID protocol. (see *CONFIGURE.md*)

k3config would also allow the user to import or export its configuration through a JSON file, this would make configuration way more portable and comprehensible than a pure C file. (see *template.json*)

## Interface

The k3config web application should be fairly clean and easy to use for that I chose to have 3 major views :
- **Text View** : Where the user could test its keymap
- **Keycube Net View** : In which the user would see the keycube in 2 dimensions and be able to affect each key to a specific character / symbol.
- **Keycube 3D View** : A view displaying the actual keycube in 3 dimensions where the user would be able to remap key just like in the Net View.

All of these view should be contained on the same page in order to quickly switch between them just by clicking on the previous view button (located at the middle left of the page) or the next view button (located at the middle right of the page).

There would be a button on the upper-right of the page to access the menu panel which would then contain the following button proposing these features :
- **Export JSON**
- **Import JSON**
- **View JSON**
- **Download Firmware**
- **Change keycube**

While on the upper left of page a button would switch between dark and light theme.

## JSON format

This section is made specifically to describe and comment the keymap in the JSON format.

**Metadata** :
```
{
  "version": 1,
  "description": "My first Keycube layout",
  "keyboard": "keycube/9buttons",
```

This part of the Json format describe some metadata about the keycube, the "version" gives the current keycube version of the Json file, the "description" field contain a short description about the keymap and finally the keyboard section specify for which keyboard is the Json intended for (here for a keycube with 9 keys per faces).
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
The keycube uses cardinal direction to define each of its faces, the order in which keys are assigned goes from left to right and descend line by line; the orientation of the face can be easily understood by looking at the attached *template.png* image describing the template Json file.
You can have a look at the *template.png* image to get a better insight of the how the keys are assigned, the describe the first layer of the template Json file.
