const express = require('express');
const app = express();
const port = 5000;
var search = require("./routes/api/Search");
const nocache = require('nocache');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(nocache());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send('PORT 5000');
})

app.use("/items", search);

app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})
