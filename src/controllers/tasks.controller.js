import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const allData = await Task.findAll({});
    res.json(allData);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los datos",
      error,
    });
  }
};
export const createTask = async (req, res) => {
  const { name, projectId } = req.body;

  try {
    const newProject = await Task.create({
      name,
      projectId,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el proyecto",
      error,
    });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, projectId, done } = req.body;

  try {
    const projectUpdated = await Task.update(
      {
        name,
        projectId,
        done,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json({
      message: "tarea actualizada",
      projectUpdated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la tarea",
      error,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const projectDeleted = await Task.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "tarea eliminado",
      projectDeleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la tarea",
      error,
    });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Task.findOne({
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
