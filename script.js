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


var ALL_COLORS = ['blue', 'red', 'orange', 'violet'];
var USER_COLORS = {};

function getUserColor(username) {
  var color = USER_COLORS[username];
  if (color) {
    return color;
  }
  // Assign new color.
  color = ALL_COLORS[Object.keys(USER_COLORS).length];
  USER_COLORS[username] = color;
  return color;
}

function addMessageText(container, username, messageText) {
  var line = document.createElement('span');
  line.style.color = getUserColor(username);
  var userSpan = document.createElement('span');
  userSpan.appendChild(document.createTextNode(username + ': '));
  line.appendChild(userSpan);
  line.appendChild(document.createTextNode(messageText));
  line.appendChild(document.createElement('br'));
  container.appendChild(line);
}