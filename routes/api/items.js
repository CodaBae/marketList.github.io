console.log('starting items');
const express = require('express');
const router = express.Router();

//bring in our model

const Item = require('../../models/Items');

// @route Get api/items
//@desc get all items
//@access Public
router.get('/', (req, res) => {
	Item.find().sort({ date: -1 }).then((items) => res.send(items));
});

// @route Post api/items
//@desc Posting a item
//@access Public
router.post('/api/items', (req, res) => {
	console.log('ggg', req.body.name);
	const newItem = new Item({
		name: req.body.name
	});

	newItem.save().then((itemsb) => res.send(itemsb)).catch((err) => console.error('can not save to MongoDB...', err));
});

// @route DELETE api/items
//@desc DELETE a item
//@access Public

router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then((itemsb) => itemsb.remove().then(() => res.send({ success: true })))
		.catch((err) => res.status(404).send({ success: false }));
});

module.exports = router;
