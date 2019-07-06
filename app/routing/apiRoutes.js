var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // Displays all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    // Create New friends - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.data;
    
        console.log(newFriend);
    
        friends.push(newFriend);
    
        res.json(newFriend);
    })
}
