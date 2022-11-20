var firebaseConfig = {
	apiKey: "AIzaSyDryFliFgAe4p2oDr7od4qhCQd3M67eWmk",
	authDomain: "fir-d29e3.firebaseapp.com",
	databaseURL: "https://fir-d29e3-default-rtdb.firebaseio.com",
	projectId: "fir-d29e3",
	storageBucket: "fir-d29e3.appspot.com",
	messagingSenderId: "442205394706",
	appId: "1:442205394706:web:221368c228f0f9e5c8c5cb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Database reference
var firebaseRef = firebase.database().ref();
// The click Event
document.getElementById("send").addEventListener("click", function () {
	firebaseRef.push(document.getElementById("name").value);
	firebaseRef.push(document.getElementById("issue").value);
	firebaseRef.push(document.getElementById("location").value);
	firebaseRef.push(document.getElementById("demo").value);
});
