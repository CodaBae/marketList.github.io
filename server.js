const express = require('express');
// const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = require('./models/Items')

const app = express();
// app.use(logger('tiny'));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.urlencoded({extended: false}));
//DB config
const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items');

mongoose
	.connect(db, {
		useNewUrlParser: true
	})
	.then(() => console.log('connected to MongoDB'))
  .catch((err) => console.error('can not connect to MongoDB...', err));
  
  //Use routes
app.use(items) 

  const port = process.env.PORT || 5500;
  app.listen(port, () => console.log(`Server started on port ${port}`))

