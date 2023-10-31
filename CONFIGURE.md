# Configuring a QMK keyboard

There is currently two majors ways to configure a QMK keyboard :

## Manually flashing the keyboard :
In order to flash the keyboard we have to first generate / build the corresponding firmware with our custom keymap defined inside of it.
Once the firmware is built we can then put the keyboard in bootloader mode and flash it (using QMK toolbox or by CLI | see https://docs.qmk.fm/#/newbs_flashing) in order to write the generated firmware inside of it.

**pros** :
- Fully customizable

**cons** :
- Long
- Hard
- Need to know the microcontroller bootloader in order to be able to put the keyboard in bootloader mode

# Using WebHID :
WebHID enables web applications to interact with human interface devices such as mice, keyboard, touchscreens ect...
WebHID uses the HID protocol to be able to communicate with these devices, the HID protocols sends binary data packet to the keyboard which then threat them and applies the corresponding customizations.

**pros** :
- Instantaneous
- Easy to use

**cons** :
- Not standart (only available on chrome / chromium based web browser)
- Relies on specific OS drivers 
- Not 100% customizable