const express = require('express');
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

// GET /api/items - Get all items
router.get('/', getAllItems);

// GET /api/items/:id - Get single item
router.get('/:id', getItemById);

// POST /api/items - Create new item
router.post('/', createItem);

// PUT /api/items/:id - Update item
router.put('/:id', updateItem);

// DELETE /api/items/:id - Delete item
router.delete('/:id', deleteItem);

module.exports = router;