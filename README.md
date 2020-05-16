# QI | The Interactive Trivia Game

The project is based on the popular and renowned BBC panel-show, QI (Quite Interesting).

# UX 

## User Epics & Stories

For this project, I created 3 epics which the project was going to focus on.
From there, the user stories were created and features could be added.

### User Epics

- #1: As a user, I want an interactive, fun and exciting game.
- #2: As a player, I want to be able to change the game output according to my preferences.
- #3: As a fan, I want to discover elements I recognise from the show.

### User Stories

- 1a: As a user, I want recognition when something is achieved in the game.
- 1b: As a user, I don't want to guess what I'm supposed to do, so I can relax.
- 2a: As a lesser invested player, I want to have settings by default.
- 2b: As a more invested player, I want to be able to fit the settings according to my preferences.
- 3a: As a fan, I want to experience things which make me feel as I'm one with the show.
- 3b: As a fan, it would make me happy to see inside jokes from the show.

### Features

* Provide a colorful and eyecatching User Experience design.
* Landing page animation.
* Cursor animation.
* Sound effect if correct answer.
* Klaxon sound effect if incorrect answer.
* Highscore revealed after last round.
* Using Open Trivia Database API.
* Using EmailJS API.
* Able to change difficulty settings, from easy to hard.
* Have default settings.

## Wireframes

The wireframes were created with [Figma](https://www.figma.com/) using desktop frame with 1440x1024 resolution and
mobile frame with 360x640 resolution. The tablet view will mimic the horizontal view of 
the desktop wireframes and vertical view of the mobile wireframes.

- [Wireframes for desktop and tablet](https://drive.google.com/file/d/1pP5lXm0wAV2CeT7902Hi35wqwvF6U3mJ/view?usp=sharing)
- [Wireframes for Android, both vertical and horizontal modes](https://drive.google.com/file/d/1-wCeThsL91tJUpkPDpE36bTpSyOMNnxO/view?usp=sharing)

## Audio
The QI theme song was downloaded from http://www.televisiontunes.com/.
The website doesn't have any legal claims over the song though and therefore if requested I will remove it. However, this project is not for commercial use and hence I made the decision to keep it.

# Optimization

## Graphics
To optimize the svg-files, I used https://svgomg.firebaseapp.com/. Each svg-file was reduced by 9%-70%, as a result saved memory space.

## Browser compatibility

Troughout the project, I've tried to manage my code to be able to work on as many 
browsers as possible. However, in some cases due to time-management, focus has been 
put on the larger browsers. As of Febuary 2020, Chrome is the most frequently used 
browser globally at 58,1%. Safari: 13%, IE and Edge: 12.9%, Firefox: 5,4% and Opera 2.7%.

* Internet Explorer and Edge (updated 04/15/2020):
    * Fetch: At the moment, fetch () is compatible with Edge, but not with IE.
    However, as IE is getting phased out into Edge, I decided to still use it instead of,
    XMLHttpRequest for instance.
    * Flex: Not supported by IE 6-9, partially supported by IE 10-11 and supported by Edge.

## Acknowledgements

I would like to thank especially my Code Institute mentor: Precious Ijege. He was a rock throughout the project and helped with a lot of questions and gave great support.

Would also like to thank the Code Institute Slack Community, which I could reach out to whenever I needed a question resolved.