/*JS File */

window.addEventListener('load', () => {

    document.getElementById('sign-in-google').addEventListener('click', function() {
  
      var provider = new firebase.auth.GoogleAuthProvider();
  
      provider.addScope('email')
  
      firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            console.log('Logging successfully', result.user)
        })
        .catch(function(error) {
          console.log('Logging fail', error)
        });
    });
  
    document.getElementById('sign-in-traditional').addEventListener('click', function() {
      var emailtxt = document.getElementById('email').value;
      var passtxt = document.getElementById('password').value;
  
      firebase.auth().signInWithEmailAndPassword(emailtxt, passtxt)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console. log('Logging successfully')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console. log('Logging Fail', error);
    });
  
  
    });
  
    //Sign by Phone
    // +1 6726674639
  
    function getPhoneNumberFromUserInput() {
      return "+16726674639"
    }
  
    document.getElementById('sign-in-phone').
    addEventListener('click', function(){
  
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  
      const phoneNumber = getPhoneNumberFromUserInput();
  const appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        
        const code = '180999';
  confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });
  
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  
    });
  
  
  });
  