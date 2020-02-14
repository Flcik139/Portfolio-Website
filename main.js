  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBd9qLyxQ0Xu73nUs35JP_Mqr0ZMaolBTU",
    authDomain: "project-magayana.firebaseapp.com",
    databaseURL: "https://project-magayana.firebaseio.com",
    projectId: "project-magayana",
    storageBucket: "project-magayana.appspot.com",
    messagingSenderId: "911147247049",
    appId: "1:911147247049:web:22ff762d8482b9f1eff418",
    measurementId: "G-9C2VC4X6XH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Reference messages collection
  var messagesRef = firebase.database().ref('message');
  
  // Listen for form submit
  document.getElementById('contact-Form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
  
    // Clear form
    document.getElementById('contact-Form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }