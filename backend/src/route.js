import { Router } from 'express';
import fetchItems from './listItems/fetch.js';
import insertItem from './listItems/insert.js';
import deleteItemById from './listItems/delete.js';

const router = Router();

// to get all the list items
router.get('/items', fetchItems);

// to insert item to list_item table
router.post('/items', insertItem);

// to delete an item from list_item table
router.delete('/items/:id', deleteItemById);

export default router;
