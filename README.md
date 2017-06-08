# Stash Tracker
Stash Tracker allows backcountry enthusiasts to record backcountry routes using polygons and polylines with the [Google Maps API](https://developers.google.com/maps/documentation/javascript/). The user can toggle between different saved stashes to display them on the map.

# Project Status
This project is in development (as of 6/8/17).

Current Functionality:
* Draw shapes and tracks on Map
* Assign details to the tracks, including: name, last visited date, management agency and description
* Save the stash and information to cards
* Toggle the stashes on and off to display on the Map
* Update the stash by displaying it and then hitting 'save'
* Allow the user to delete each shape and track and save the updates

Next Steps:
* Save the zoom and window coordinates associated with each stash so the map re-centers when stashes are display
* Allow the user to edit the shapes and tracks and save the updates
* Include a search field on map
* Include the option to add markers and notes attached to the markers
* Add a back end to save 'submitted' pages
* Include an admin view on the back end that can aggregate and view all the stashes

# Screen Shot(s)   
![Screenshot](https://github.com/anderswood/stash-tracker/blob/master/app/images/stash-tracker%20screenshot.png)

# Installation and Setup Instructions
* Clone repo
* run NPM i
* run NPM start

# Reflection
I built this app as a personal project over the course of 2 weeks while at Turing. I collaborated with Winter Wildlands Alliance [(WWA)](https://winterwildlands.org/) to help solve one of the organization's challenges: collecting details about where backcountry skiers ski. My hope is the project can serve as a proof of concept for WWA.

The WWA works to ensure public land management recognizes the needs and desires of backcountry skiers, snowboarders, snowshoers, Nordic skiers and other winter enthusiasts. One important aspect of this advocacy work is knowing what specific outdoor spaces are important to winter enthusiasts. This can be challenging as these folks don't always like to share this information publicly. To that end, the WWA is in need of an effective, simple and discrete way to collect this information from outdoor enthusiasts.

Project goals included using Redux/React along with the Google Maps API. The Google Maps API and drawing tools are pulled into the code via the following script in the root index.html file:
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">
```

I ran into issues getting Redux to work well with the google map API. I think this issue arose because of the size of the google map objects: passing large map objects to the Redux store seemed to bog down Redux. When I passed a google map overlay object to Redux I'd get this error:
```
[Deprecation] 'window.webkitStorageInfo' is deprecated. Please use 'navigator.webkitTemporaryStorage' or 'navigator.webkitPersistentStorage' instead.
```
To work around this issue, I built a lot of the map functionality and interaction in React, resulting in a Redux/React hybrid. Ideally most of this functionality would live in Redux.

## Resources
* Original guidance for setting up Google Maps API in react: [Google Maps React Component in ES6](http://revelry.co/google-maps-react-component-in-es6/)
* Starter repo: [Express Boiler Plate](https://github.com/turingschool-examples/express-boilerplate)
* Google Maps API reference: [Reference Page](https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager)
* Google Maps Drawing tools: [Drawing Tools](https://developers.google.com/maps/documentation/javascript/examples/drawing-tools)
