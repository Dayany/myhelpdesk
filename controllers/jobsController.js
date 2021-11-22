const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(StatusCodes.OK).json(jobs);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
  }
};

const createJob = async (req, res) => {
  const job = new Job({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    department: req.body.department,
    departmentName: req.body.departmentName,
    assignedTo: req.body.assignedTo,
    assignedToName: req.body.assignedToName,
    createdBy: req.body.createdBy,
    createdByName: req.body.createdByName,
    equipment: req.body.equipment,
    equipmentName: req.body.equipmentName,
  });

  try {
    const savedJob = await job.save();
    res.status(StatusCodes.OK).json(savedJob);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
  }
};

module.exports = { getJobs, createJob };
