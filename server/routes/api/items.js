const express = require('express');
const router = express.Router();
const Item = require('../../models/ProductModel');
const productInfo = require('../../models/ProductModel');


router.get('/', async(req, res) => {
    try {
        const items = await productInfo.find();
        res.status(200).json(items);
    } catch (error) {
        console.error('Failed to fetch items:', error);
        res.status(500).json({error: 'Failed to fetch item'});
    }
})

router.get('/:id', (req, res) => {
    productInfo.findById(req.params.id) 
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({noitemfound: 'No Item found'}));
})

router.post('/', (req, res) => {
    console.log(req.body);
    productInfo.create(req.body)
        .then((item) => res.json({msg: 'Item added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
    }); 


router.put('/:id', (req, res) => {
    productInfo.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated Successfully'}))
        .catch((err) =>
        res.status(400).json({error: 'Unable to update the Database'})
        );
});

router.delete('/:id', (req, res) => {
    productInfo.findByIdAndRemove(req.params.id, req.body)
        .then((item) => res.json({mgs: 'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({error: 'No such item'}));
});

module.exports = router;
