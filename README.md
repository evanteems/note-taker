# note-taker

# Table-of-Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

# Description
This is a note simply taking an app that records notes.

# Installation
1. Please navigate to the github repository (https://github.com/evanteems/note-taker) in the web browser. Next click the green dropdown menu that is listed as "Code". Then copy the SSH key by clicking the the clipboard picture.

2. In your terminal navigate to your Desktop or wherever you wish to place the repository.

3. Insert "git clone" in your comaand line and paste the SSH key you previously copied from the repository, then hit enter. A new file that is titled "readme-generator" contains the necessary files that will appear in your chosen directory. Node.js and the necessary modules due to their file sizesm will not be cloned. you will have to install manually. 

4. This application uses node.js, so you have tp install node and also the node_modules to operate it. For more better detailed instructiond visit: https://www/guru99.com/download-install-node-js.html

5. Once you have sucessfully downloaded node on your computer, navigate to the "index.js" file in your terminal. To do this quickly, using vscode click the top left tab lebelled "Terminal" and create the new terminal

6. In this terminal write the command "npm install" to install the proper node_modules.

7. Navigate to the newly downloaded "node_modules" folder to make sure that the correct packages have been installed. This newly downloaded app requires three packages: "morgan", "express", and "generateUniqueId". if these have not been installed yet please run this command line in your terminal: npm install "morgan express generateUniqueId"!

8. Once these steps are set up you are ready to use the Note Taker!!

# Usage
Using this app anywhere that you like using Heroku! the deployed application is: https://polar-journey-53931.herokuapp.com/. To enter a note first click the pen icon to start a new ome. Click the note title textarea and enter your title then click the save icon in the top right. As that has been done you will see your notes displayed on the left hand side. Delete is still being worked on!

To run the server locally on your computer or device first see [Installation](#installation) section for the instruction on how to download and install this repository properly. Navigate to the root directory of your terminal and type "npm start". This will set up the terminal on path 3001 and you will be able to access this application for the url "localhost:3001/"

# License
MIT License Copyright

# Questions
If you have any questions regarding this project please contact the author via Github at: https://github.com/evanteems