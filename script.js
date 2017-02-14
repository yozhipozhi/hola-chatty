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

// Make a string from Unicode code point.
function stringFromCodePoint(codePoint) {
  var TEN_BITS = parseInt('1111111111', 2);
  if (codePoint <= 0xFFFF) {
    return String.fromCharCode(0, codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xD800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

  return String.fromCharCode(leadSurrogate, tailSurrogate);
}

var EMOJI_SMILE = stringFromCodePoint(0x1F600);
var EMOJI_ROFL = stringFromCodePoint(0x1F602);
var EMOJI_ROLL = stringFromCodePoint(0x1F644);
