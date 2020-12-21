# keyboard-webapp
This website is the result of a group project in CS320 (Software engineering)
The website has 4 pages: A landing page, an information page, a keyboard page, and an admin page.
The website was written using HTML, CSS, and Javascript, and runs on an Express webserver on Node.js

This website provides purchasing information for new buyers of mechanical keyboards.
The keyboard page contains a dynamically loaded table with basic information about Cherry MX mechanical keyboard switches
The admin page allows the database (a simple .json file) to be edited from the client side after entering proper
authentication credentials.

# docs
In this folder you will find all of the proper documentation that was written prior to website development
This includes:
SRS (Software Requirements Specification)
SDD (Software Design Document)
Final Report (Summary of how the code production went)

# docs/UML
This folder contains .txt files with UML code for the diagrams that are found in the SRS and SDD.
To see these diagrams individually, copy the text from the files and enter it into a UML server.
One can be found at plantuml.com

# To execute the code:
1: Clone the repo
2: In your IDE or terminal, navigate to keyboard-webapp/app/node-ex-website/
3: run npm install (node package manager)
4: run npm start (This starts the express server)
5: open your browser, and navigate to localhost:3000

# Login Credentials for the Admin Page:
Username: admin
Password: admin
