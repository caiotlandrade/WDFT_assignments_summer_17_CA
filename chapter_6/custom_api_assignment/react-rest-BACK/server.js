const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

var todoState = {
			todos:[
	            {text: 'You can now start tracking your tasks', done: false, id: 1},
	            {text: 'To start, mark these two tasks as done and click on the "clear complete" button', done: false, id: 2},
					],
			id: 3,
			selection: 'all'
};

app.get('/api/state', (req,res) => {
    res.json(todoState);
    console.log(todoState);
});

app.post('/api/state', (req,res) => {
    todoState = req.body;
    console.log(todoState);
    res.send("success on the post");
});

app.listen(8080, () => {
    console.log('server is listening on 8080');
});



