// Require the express web application framework (https://expressjs.com)
var express = require('express')

// Create a new web application by calling the express function
var app = express()
// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'))

// Define a route for the form page
app.get('/', (req, res) => {
  // Serve the HTML form page
  res.sendFile(__dirname + '/public_html/index.html');
});

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, function () {
  // When the application starts, print to the console that our app is
  // running at http://localhost:3000  (where the port number is 3000 by
  // default). Print another message indicating how to shut the server down.
  console.log(`Web server running at: http://localhost:${port}`)
  console.log("Type Ctrl+C to shut down the web server")
})
