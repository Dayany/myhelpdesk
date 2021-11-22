const Job = require("../models/Job");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.json({ message: err });
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
    console.log(savedJob);
    res.json(savedJob);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getJobs, createJob };
