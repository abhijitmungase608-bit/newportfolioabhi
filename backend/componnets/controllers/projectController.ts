import { Request, Response } from 'express';
import Project from '../models/Project.js';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find()
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects'
    });
  }
};

export const getFeaturedProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ order: 1 })
      .limit(6);
    
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured projects'
    });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = new Project(req.body);
    await project.save();
    
    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create project'
    });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update project'
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete project'
    });
  }
};