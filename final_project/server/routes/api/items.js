const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {res.send('testing get / item route')});
router.get('/:id', (req, res) => {res.send('testing get /:id route')});
//router.post('/', (req, res) => {res.send('testing post / route')});
router.put('/:id', (req, res) => {res.send('testing put /:id route')});

router.post('/', async (req, res) => {
    try {
        const {name, position, stats, image} = req.body;

        const newItem = Item({
            name,
            position,
            stats,
            image
        });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch(error) {
        console.error('Failed to add item', error);
        res.status(500).json({error: 'Failed to add item'});
    }
});

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated Successfully'}))
        .catch((err) =>
        res.status(400).json({error: 'Unable to update the Database'})
        );
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, req.body)
        .then((item) => res.json({mgs: 'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({error: 'No such item'}));
});

module.exports = router;
