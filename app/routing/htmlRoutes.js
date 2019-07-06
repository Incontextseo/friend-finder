var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/surveys.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});
  
