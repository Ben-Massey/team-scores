// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSbtiZOXlqy26rpLplvX1qz5KWOIgZ43g",
    authDomain: "team-scores-a0c5e.firebaseapp.com",
    databaseURL: "https://team-scores-a0c5e.firebaseio.com",
    projectId: "team-scores-a0c5e",
    storageBucket: "team-scores-a0c5e.appspot.com",
    messagingSenderId: "897619199526"
};
firebase.initializeApp(config);

var database = firebase.database();

var teamMembers = [];

$("#addteamname").on("click", function (event) {
    event.preventDefault();

    var teamName = $("#teamName-input").val().trim();
    var teamMate = $("#teamMate-input").val().trim();

    teamMembers.push(teamMate);

    var newTeam = {
        TeamName: teamName,
        TeamMembers: teamMembers,
    };
    database.ref().push(newTeam);

    console.log(TeamName);
    console.log(TeamMembers);

    //clear text boxes
    $("#teamName-input").val("");
    $("#teamMate-input").val("");
});

database.ref().on("child_added", function (childSnapshot, prevChildkey) {
    var teamName = childSnapshot.val().TeamName;
    var teamMate = [childSnapshot.val().TeamMembers];

    $("#team-display").append("<h1>" + teamName + "</h1>");

    for (let i = 0; i < teamMate.length; i++) {
        $("#team-display").append("<p>" + teamMate[i] + "</p>");
    }
    console.log(teamName);
    console.log(teamMate);
});