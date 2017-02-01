# Chatty App

Welcome to Chatty! This is a real-time web-based chat application that you can use to talk to all of your friends.

## Getting started

### Running the app

* Clone the hola-chatty project from `https://github.com/johnheroy/hola-chatty.git` into a new Cloud9 workspace
* Open your new workspace
* Double-click on `index.html`
* Click Preview -> Live Preview File at the top of the window
* Click the button in right pane next to "Browser" that says "pop out in new window"

### Debugging (Chrome developer tools)

* Once you have your `index.html` running in a new window, right click on the page and click "inspect element"

## Instructions

You can already send new messages to Firebase and see new messages from everyone
else in the console, but it will be more convenient for most users to see
messages in the provided `<textarea>`.

Your first task is to take Firebase messages from the message store and display them
in chatty's UI.

## Extra credit

- [ ] Change the color of your messages so you know which ones you sent versus
your friends (see styles.css)
- [ ] Add message timestamps so you can see *when* messages have been sent
(bonus points for something more descriptive than purely a date and time but
"10 minutes ago" or "1 day ago")

## Background reading

* [HTML `textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
* Firebase reference
  * [Getting started (JavaScript)](https://firebase.google.com/docs/database/web/start)
  * [JavaScript API reference](https://firebase.google.com/docs/reference/js/)
* JavaScript language concepts
  * Scopes
    * [Everything you wanted to know about JavaScript Scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
    * [Demystifying JavaScript Variable Scope and Hoisting](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
  * Callbacks
    * [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* Web development (HTML, JS, CSS)
  * [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
