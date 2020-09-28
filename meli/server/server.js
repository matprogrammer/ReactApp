const express = require('express');
const app = express();
const port = 5000;
var search = require("./routes/api/Search");
var details = require("./routes/api/Details");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send('PORT 5000');
})

// app.get('/error', (req, res) => {
// 	res.send('Error Page');
// })

app.get("/api/items?q=​:", search);
app.get("/api/items/:id", details);

app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})
