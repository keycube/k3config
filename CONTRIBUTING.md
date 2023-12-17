# How to Contribute

Thank you for taking the time to contribute !

Before you start though you can quickly have a look at our guidelines in order to keep the project simple and consistent.

## Getting Started

k3config is written in Html, Css and Javascript; we assume that you are comfortable with these languages.

The following sections are a few of the possible aspect of the project that could be updated / upgraded.

## Web Components

The project is split under multiple web components; these components are purposefully made as portable as possible in order to be easily used in different web platforms/applications.

There are currently 3 different components used, and they are located under the (css/js)/keycube/component folders.

If more components were to be added, they should also be added right there and follow the following conventions:

Each component file contains a constant object that has the following functions:
- **loadComponent** : initialise the component object and then calls loadElements
- **loadElements** : load the component elements on the DOM
- **refreshElements** : refresh the component elements on the DOM
- **unloadComponent** : unload the component and its elements

## Keycodes

The keycode.js file contains an array of keycodes currently supported by the platform, these keycodes are generated using the python script provided in the archive/ folder.

The QMK firmware is still being developed and maintained therefore the keycodes specified in the keycode.js file might change and new ones can be added.

It is important to keep an accurate and up to date version of these keycodes in order to keep the project running.

## WebHid

k3config currently does not uses the WebHID protocol thus reconfiguring the keycube on the fly is still not possible, however the bytes used to send the corresponding binary data packet to remap a key are currently present in the keycodes array.

With a proper WebHID implementation the keyboard layout will be able to instantly remap any key.

## KeyMapper Popup

The KeyMapper Popup allows to remap the keys that's why it is a really important Web component of the project; the Key Pages can always be updated in order to be able to remap to more keys that are currently inside of the Keycodes array.

## Net View

The Net View shows the current Keycube Layout in 2 dimension in order to be able to see all the current keys in one eye lookup.

These key can then be remapped using the KeyMapper Popup described previously.

## Layer Selector

The Layer selectors allows to switch between the Keycube layers, it refresh the appropriate components such as the KeyMapper Popup and the Net View, if more components like the 3D were to be added it should also refresh them.

## Text View

As of the current version of the k3config project it is possible to use two buttons to cycle between the views.

One of these view is the text view, this view should show the user what keys are pressed to ensure that the keyboard layout is working properly

## 3D View

As of the current version of the k3config project it is possible to use two buttons to cycle between the views.

One of these view is the 3D view, this view should show the user a 3D representation of the Keycube that could possibly also be remapped using the KeyMapper Web Component.

## Archives

The archive folder contains a bunch of utility tools / files that can be used to provide an easier developpment time.

It is always useful to add what we deems important to the project in this directory.
