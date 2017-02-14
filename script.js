// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9VRDOmhrvRGc4FZvqzXMStahAb7wdyc8",
  databaseURL: "https://hola-chatty.firebaseio.com"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('/messages');

/**
 * Sends a message to the Firebase message store.
 *
 * @param user The name of the user sending the message (string)
 * @param message The content of the message (string)
 */
function sendMessage(user, message) {
  messagesRef.push({
    user: user,
    message: message
  });
}

/**
 * Retrieves messages from Firebase.
 *
 * @param callback Callback function which takes a username and message
 *     argument
 */
function getMessages(callback) {
  messagesRef.on('child_added', function(data) {
    var val = data.val();
    callback(val.user, val.message);
  });
}
