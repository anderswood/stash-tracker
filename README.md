# Project Name & Pitch
# Stash Tracker
Stash Tracker allows backcountry enthusiasts to record backcountry routes using polygons and polylines with the [Google Maps API](https://developers.google.com/maps/documentation/javascript/). The user can toggle between different saved stashes to display them on the map.

# Project Status
This project is currently in development (as of 6/8/17).

Current Functionality:
* Draw shapes and tracks on Map
* Assign details to the tracks, including: name, last visited date, management agency and description
* Save the stash and information to cards
* Toggle the stashes on and off to display on the Map
* Update the stash by displaying it and then hitting 'save'

Next Steps:
* Save the zoom and window coordinates associated with each stash so the map re-centers when stashes are display
* Allow the user to delete each shape and track and save the updates
* Allow the user to edit the shapes and tracks and save the updates
* Include a search field on map
* Include the option to add markers and notes attached to the markers
* Add a back end to save 'submitted' pages
* Include an admin view on the back end that can aggregate and view all the stashes

# Project Screen Shot(s)   
![Screenshot](https://github.com/anderswood/stash-tracker/blob/master/app/images/stash-tracker%20screenshot.png)

## Installation and Setup Instructions
* Clone repo
* NPM i
* NPM start

## Reflection
I built this app as a personal project over the course of 2 weeks while at Turing. I collaborated with Winter Wildlands Alliance [(WWA)](https://winterwildlands.org/) to help solve one of the organization's challenges: collecting details about where backcountry skiers ski. My hope is the project can serve as a proof of concept for WWA. 

The WWA works to ensure public land management recognizes the needs and desires of backcountry skiers, snowboarders, snowshoers, Nordic skiers and other winter enthusiasts. One important aspect of this advocacy work is knowing what specific outdoor spaces are important to winter enthusiasts. This can be challenging as these folks don't always like to share this information publicly. To that end, the WWA is in need of an effective, simple and discrete way to collect this information from outdoor enthusiasts.

Project goals included using Redux/React along with the google maps API. I ran into issues getting Redux to work well with the google map API. I think this issue arose because of the size of the google map objects: passing large map objects to the Redux store seemed to bog down Redux. When I passed a google map overlay object to Redux I'd get this error: 
```
[Deprecation] 'window.webkitStorageInfo' is deprecated. Please use 'navigator.webkitTemporaryStorage' or 'navigator.webkitPersistentStorage' instead.
```

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

<!-- #### Example:  

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process. -->

## Resources
* Original guidance for setting up google map API in react: [Google Maps React Component in ES6](http://revelry.co/google-maps-react-component-in-es6/)
* Started using: express boiler plate
