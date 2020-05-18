# QI | The Interactive Trivia Game

The project is based on the popular and renowned BBC panel-show, QI (Quite Interesting).
I hope you'll enjoy! :)

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

## UX Design

First part of designing the project was making lots of different sketches with pen and paper, the easiest way in my opinion to get many ideas down. From there, the favorite design was picked and made in Figma. My goal with the design was to have a less cluttered website than what I could find in other trivia websites and create something which was more intune with the current website fashion.

The initial sketches: 
[First](https://drive.google.com/file/d/1j4R7y0Msv9J4pj4C4Y3-dzYwHUndOEnw/view?usp=sharing), [Second](https://drive.google.com/file/d/1j9dgr7s18IgY_YAECcEbNcLXTvZJPI8D/view?usp=sharing), [Third](https://drive.google.com/file/d/1j7rVNBhfcRar5OtWMIMyHVmnliVyjuOT/view?usp=sharing)

### Icon and waves

The icon is similar to the original QI logo, however instead of a looking glass I decided to make the Q into a balloon instead. As it represents the questions asked in the game. 

The waves were a recurring theme throughout the project, in the background and buttons. I mainly designed these to create a more flowy, round and calm feel to the otherwise boxy containers (questions, answers, modals etc.). Although the containers wasn't made out to be too contrasted to the roundness of the waves, so all corners have been rounded.

### Colours

For the colours, I didn't use any colour palette tool, but used colour theory and typical UX practises.

The main palette consists of purples, blues and oranges.
Puples and blue colours blends well together as they're analogous colours and the orange is a complementary colour to the analogous ones.

_The purples:_
1. #3F2E83, main background colour and darkest shade, serves well as contrast to the lighter shades.
2. #8066C9, inner wave colour and background for highscore portrait.
3. #A1A0E0, outer wave colour, question background, nav icon and lightest shade.

_The blues:_
1. #5D59FF, used for modals, answers and the settings page. Was chosen as it stands out against the purple background, but not too much to distract.
2. #46BCFF, used only for the setting page progress bar.

_The oranges:_
1. #FF9F46, lighter orange shade used for buttons, progress bar and illustrations.
2. #EB8120, darker orange shade used for buttons.

### Illustrations

Made by me in Figma: all of the icons, buttons and wave illustrations.

The other illustrations were from [UnDraw](https://undraw.co/), which allows for non-commercial use.

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

To be able to resize in the best way, all of the illustrations and icons in this project are SVGS. However, they don't behave as usual png/jpeg files when resized.
Therefore, the easiest way (from what I experienced) was to give all of the svg-files a viewBox with their own dimentions and import them as object in the html code.
Consequently, all that is needed for resizing it is changing either the width or height in the css, real neat!

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

# Technologies Used

## Languages

This project was made in HTML5, CSS3 and JS.

## Frameworks

No frameworks were used.

## Libraries

JQuery was used in the JS files.

# Credits 

StackOverflow, for answering numerous of questions.
W3schools, the same as above.
James Q Quick, from whom I used most of the JS trivia code from his amazing trivia tutorial.

# Acknowledgements

I would like to thank especially my Code Institute mentor: Precious Ijege. He was a rock throughout the project and helped with a lot of questions and gave great support.

Would also like to thank the Code Institute Slack Community, which I could reach out to whenever I needed a question resolved.