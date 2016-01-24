// Create a new Firebase reference, and a new instance of the Login client
var isInitialized = false;
var chatRef = new Firebase('https://samengfire.firebaseio.com/chat');
chatRef.onAuth(function(authData) {
  // Once authenticated, instantiate Firechat with the user id and user name
  if (authData && !isInitialized) {
    initChat(authData);
  }
});

// Create new user
function registerUser() {
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  chatRef.createUser({
    email    : username,
    password : password
  }, function(error, userData) {
    if (error) { 
      alert("Error creating user:", error)
      console.log("Error creating user:", error);
    } else { 
      alert("Successfully created user account with uid:", userData.uid)
      console.log("Successfully created user account with uid:", userData.uid); 
      window.location.href = "firechat.html"
    }
  });
  return false;
}

// Login user
function loginUser() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  chatRef.authWithPassword({
    email    : username,
    password : password
  }, function(error, authData) {
    if (error) { 
      alert("Login Failed!", error)
      console.log("Login Failed!", error);
    } else { 
      alert("Authenticated successfully with payload:", authData)
      console.log("Authenticated successfully with payload:", authData);
    }
  });
  return false;
}

// function getName(authData) {
//     switch(authData.provider) {
//         case 'password':
//         return authData.password.email;
//         case 'google':
//         return authData.google.displayName;
//         case 'facebook':
//         return authData.facebook.displayName;
//     }            
// }; 
 
function getName() {
    var username = document.getElementById("user.displayName").value; 
    return username;
};
function initChat(authData) { 
  var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
  chat.setUser(authData.uid, getName(), function(user) {
    chat.resumeSession()
  }) 
} 