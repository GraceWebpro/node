const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");

app.use(express.json());
// Getting Request
app.get('/', (req, res) => {
 
    // Sending the response
    res.send('Hello dear World!')
    
    // Ending the response
    res.end()
})

app.use("/api/blogs", blogRouter);

 
module.exports = app;