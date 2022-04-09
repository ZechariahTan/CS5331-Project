CS5331 Project

The included code is meant as an academic exercise in the implementation of the Man in the Browser attack throught the use of malicious browser extensions and/or scripts. It contains two parts. The first two examples are malicious Chrome extension, and the third example is a GreaseMonkey script.

## Chrome Browser

The extensions are designed only with the target webpages of https://eyeondesign.aiga.org/ and https://www.nytimes.com/ in mind.

### Extension setup instructions

1. Load either the "maliciousNewExtension" or the "maliciousDarkReader" folder as unpacked extensions into the chrome web browser by following the guide below. For the rest of this set of instructions, the "maliciousNewExtension" will be used as an example for what is being loaded.
https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked
2. Once the extension has been loaded, click on the puzzle piece icon on the top right of the browser 
3. Click the pin icon to the right of the "Malicious MITB new extension"
4. A four coloured square with a circle within it should then appear to the left of the puzzle piece icon to show that the extension has been set up correctly. (If a similar process is followed for the "maliciouseDarkReader" folder, an icon resembling a boy with glasses will appear instead)

### Succesful Attack replication instructions

1. Visit https://eyeondesign.aiga.org/
2. Click the "search" button on the left side of the screen to bring up the search bar
3. Enter the search term "worlds first emoji" and hit enter
4. Repeat step 2 then enter any other search term and hit enter
5. Repeat step 2 then click on the four coloured square on the top right corner of the browser (if the "maliciousDarkReader" folder is loaded instead, click on the boy with glasses icon)
6. When the small window appears, click on the green square (if the "maliciousDarkReader" folder is loaded instead, click on "On" button at the top right of the popup)
7. The input search field should now be replaced and the previously present "Type to search ..." should now be missing 
8. Input the same search term entered in step (4) and hit enter
9. If the attack is succesful, the results of step (8) should be identical to the one in step (3), despite the search term of step (4) being used.


<!-- Failed attack replication instructions:
1. Visit https://www.nytimes.com/
2. Click the magnifying glass button on the top left side of the website to bring up the search bar
3. Press "f12" on the keyboard to bring up the chrome devtools
4. 
5. Repeat step 2 then click on the four coloured square on the top right corner of the browser (if the "maliciousDarkReader" folder is loaded instead, click on the boy with glasses icon)
6. When the small window appears, click on the green square (if the "maliciousDarkReader" folder is loaded instead, click on "On" button at the top right of the popup)
7. The input search field should now be replaced and the previously present "Type to search ..." should now be missing 
8. Input the same search term entered in step (4) and hit enter
9. If the attack is succesful, the results of step (8) should be identical to the one in step (3), despite the search term of step (4) being used. -->

## GreaseMonkey script

### Steps to reproduce attack

1. Install GreaseMonkey or TemperMonkey
2. Install the script. You can do so by clicking [here](https://github.com/ZechariahTan/CS5331-Project/raw/main/maliciousUserscript/example3.user.js).
3. Set up your server to listen to password submitted. An example php file is provided in the `maliciousUserscript` 
   folder.
4. Go to DBS Ibanking and login. Username and password are recorded and transmitted when mouse hovers above the 
   "Login" button
5. When prompt to authenticate through Mobile Banking App, use "manual enter OTP" instead.
6. After entering the OTP taken from the app, the OTP will be recorded and sent when the mouse hovers above the
   "Submit" button