import express from 'express';
import {
  getAllProjects,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;