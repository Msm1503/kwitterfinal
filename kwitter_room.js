const firebaseConfig = {
  apiKey: "AIzaSyAdPzaAIOLTInsGAmB2uiv7Xb3Xp6UoseY",
  authDomain: "kwitter-final-2a2db.firebaseapp.com",
  databaseURL: "https://kwitter-final-2a2db-default-rtdb.firebaseio.com",
  projectId: "kwitter-final-2a2db",
  storageBucket: "kwitter-final-2a2db.appspot.com",
  messagingSenderId: "82778450230",
  appId: "1:82778450230:web:55dcf2d1ee82c2a1242b97",
  measurementId: "G-1BEGFJMNRF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
