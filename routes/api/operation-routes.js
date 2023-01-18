const router = require('express').Router();
const operationAncestryData = require('../../data/operation-data');

// The `/api/operation-routes` endpoint
router.get('/', async (req, res) => {
  try {
    // get all operations
    const currentData = operationAncestryData;
    if (!currentData) {
      res.status(404).json('No data found.');
    }
    res.status(200).json(currentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// The `/api/operation-routes/:id` endpoint
router.get('/:id', async (req, res) => {
  // find one operation by its `id` 
  try {
    const currentData = operationAncestryData;
    const operation = currentData.operations.filter(op => op.id == req.params.id);

    if (!operation.length) {
      res.status(404).json({ message: 'No operation found with this id!'});
      return;
    }
    
    res.status(200).json(operation);
  } catch (err) {
    res.status(500).json(err);
  }
});

function checkId(op) {
  return op.id >= 18;
}

module.exports = router;