import { Router } from 'express';
import { getCategoryList, getEditCategoryForm, saveCategory, updateCategory } from '../controllers/categoryController.js';

const router = Router();

router.get('/list', getCategoryList);
router.post('/save', saveCategory);
router.get('/edit/:id', getEditCategoryForm); // new route for editing a category
router.post('/update/:id', updateCategory);  // new route for updating a category

export default router;
