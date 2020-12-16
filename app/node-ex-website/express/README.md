### SRS Project
Fellowship of the Keys
## CS 320

### Group Members

Jonathan Meisner

Elliot Long

Kyle Stoneberg

Joseph Boothby


### Project Idea/Status (So far)

Project is in the Design Phase

Site design will consist of an appbar that contians buttons that navigate to the various sections of the website

- Home
- Information
- Keyboards

# Home

The home tab will contain a welcome page that explains the use of this website

# Information

The information tab will be the informative center where the user can learn and read about mechanical key switches

# Keyboards

The Keyboards tab will contain the list of keyboards that contain specific switches. The user can filter the list by sound, pressure, tactile, and others to show personalized search results
The user can then click on the link that will take them to a website that has keyboards available for purchase with the specified switches.

Filtering Ideas:
    Switch Type (Color)
        General Functionality (behavior) of that switch type
    Normal Switch Usage (Gaming, FastTyping, ect.)
    Switch Sound
    Switch Image

The contents of the keyboards tab will be stored either via DB or within the site itself (i.e switch information / links)

The file structure (so far) is to have each tab of the appbar be a separate html file with a connecting javascript file that will handle all scripting

### 9/30:

Catalog build to be object oriented javascript or java with additional modules or packages to be determined

Git Repo (keyboard-webapp) Created & Invited Group Members

### 10/2:

First Team Meeting

Team Arrangment Documentation Filled out.

Jonathan Meisner appointed as Initial Project Lead

Submitted Document via BB ~4:45pm 10/2/2020

### 10/26:

Met With Team

Discussed structure of project

~1 hour 15 minute meeting time

### 11/4:

Met With Team

### 11/20:

Put together the Software Design Document with team via Zoom

Updated this README with the updated status of the overall project

~ 1.5 hour

### 11/25 - 12/10

Team members kept in touch via discord group chat and contributed where they could when they could

## 12/2

The backend was able to launch using Node.js. DB now shows filtered by switch name on default on the Keyboards Tab

## 12/5

The overall structure of the site has taken shape including the admin page where data manipulation can occur via removing or adding a key switch to the db.
SRS documentation started coming together including updates UMLs and diagrams following the addition of the admin page.

## 12/7 - 12/10

Overall CSS changes were made to make information look presentable and site flow stronger.
SRS concluded.

### 12/15

Overall File structure cleaned up for presentability.
The project including the SRS documentation is turned in and the Git Repo Made Public.

### HOW TO LAUNCH THE SITE

Winthin the node-ex-website file, open a terminal and use the following:

## npm i

This will install all the necessary files for handling the local backend

## npm start

This will launch the site to your localhost on port 3000 (loclahost:3000)

## Navigate to localhost:3000

Once you navigate to the site, you will be able to interact with the site itself. If you wish to access the admin menu, navigate to the Keyboards tab and scroll to the bottom.
The username and password are `admin` `admin` respectfully. Here you can make changes to the local database of which you see the results of back on the keyboards page. 

Enjoy!