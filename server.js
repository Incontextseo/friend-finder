// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var friends = require("../data/friends");
var friends = [
    {
        "name": "Ahmed Agrawal",
        "photo": "https://www.birmingham.ac.uk/Images/Staff/profiles/cem/Ahmed,Zubair.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://media.licdn.com/dms/image/C5103AQGgF81GsF2wZA/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=SV231xSgZO6ltSwupkadJwg9S_AijjOI8lAMUmpW2gI",
        "scores": [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://pbs.twimg.com/profile_images/820396066856116225/cWDSP424_400x400.jpg",
        "scores": [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub_400x400.jpg",
        "scores": [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/dms/image/C4D03AQFxkrJPER62gw/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=BmFuFtqW6OAK_8Aq8IHVAC3zNCluKCgE-CgcfCyBqGk",
        "scores": [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
        ]
        },
        {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/dms/image/C5603AQGekp_UsrB0gA/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=4fCwLlFRhVPb0nDbWzHMFNLok9Z6KlCzdJwkbJ--GPs",
        "scores": [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
        ]
        },
        {
        "name": "Banana",
        "photo": "https://cdn.britannica.com/s:300x500/83/190683-131-E796F1EE.jpg",
        "scores": [
        "3",
        "2",
        "2",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "2"
        ]
    }
];

// require("./routing/apiRoutes.js")(app);
// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});
// require("./app/routing/htmlRoutes.js")(app);
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
