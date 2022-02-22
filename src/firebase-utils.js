function getToken() {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser;
    if (user) {
      user.getIdToken().then(function (token){
        resolve(token);
      })
    } else {
      resolve(null);
    }
  });
}

function getUser() {
  return firebase.auth().currentUser ? firebase.auth().currentUser.toJSON() : null;
}

function initFirebaseApp() {
  console.log('initialize firebase app');
  firebase.initializeApp(globalConfig.fbConfig);
  firebase.auth().onAuthStateChanged(() => {});
}

function subscribeToOnAuthChange() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('auth state changed, got user ', user.toJSON());
      chrome.storage.local.set({
        user: {
          displayName: user.displayName,
          isAnonymous: user.isAnonymous,
          photoURL: user.photoURL,
          userId: user.uid,
          email: user.email
        }
      });
    } else {
      console.log('auth state changed, no user ');
      chrome.storage.local.set({
        user: null
      });
    }
  });
}

