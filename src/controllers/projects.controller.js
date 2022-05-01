import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const allData = await Project.findAll({});
    res.json(allData);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los datos",
      error,
    });
  }
};
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el proyecto",
      error,
    });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const projectUpdated = await Project.update(
      {
        name,
        priority,
        description,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json({
      message: "Proyecto actualizado",
      projectUpdated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el proyecto",
      error,
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const projectDeleted = await Project.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "Proyecto eliminado",
      projectDeleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el proyecto",
      error,
    });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el proyecto",
      error,
    });
  }
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Task.findAll({
      where: {
        projectId: id,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "tareas no encontradas" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el proyecto",
      error,
    });
  }
};
