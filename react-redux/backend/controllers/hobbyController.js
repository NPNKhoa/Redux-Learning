const Hobby = require('../models/Hobby');

// @desc Get all hobbies
// @route GET /v1/hobbies
const getHobbies = async (req, res) => {
    try {
        const page = parseInt(req.query.page || 1);
        const limit = parseInt(req.query.limit || 10);

        const hobbies = await Hobby.find().skip(limit * (page - 1)).limit(limit);

        const totalDoc = await Hobby.countDocuments();
        const totalPages = Math.ceil(totalDoc / limit);

        if(!hobbies) {
            return res.starus(404).json({
                message: 'No hobbies found!'
            });
        }
        res.status(200).json({
            data: hobbies,
            meta: {
                page,
                limit,
                totalDoc,
                totalPages
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error!'
        })
    }
};

// @desc Get hobby by id
// @route GET /v1/hobbies/:id
const getHobbyById = async (req, res) => {
    try {
        const id = req.params.id;

        if(!id) {
            return;
        }

        const hobby = await Hobby.findById(id);

        if (!hobby) {
            return res.status(404).json({
            message: `No hobby with id ${id} found!`,
            });
        }

        res.status(200).json({
            data: hobby,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error!',
        });
    }
}

// @desc Create new hobby
// @route POST /v1/hobbies
const createHobby = async (req, res) => {
    try {
        const { title, description, } = req.body;

        if(!title) {
            return res.status(400).json({
                message: 'Title is required!'
            });
        }

        const newHobby = await Hobby.create({
            title,
            description,
        })

        res.status(201).json({
            message: 'Hobby created successfully!',
            data: newHobby,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error!'
        });
    }
}

// @desc Update hobby
// @route PUT /v1/hobbies/:id
const updateHobby = async (req, res) => {
    try {
        const id = req.params.id;
        
        if(!id) {
            return;
        }
        
        const { title, description, } = req.body;

        if(!title) {
            return res.status(400).json({
                message: 'Title is required!'
            })
        }

        const updatedHobby = await Hobby.findByIdAndUpdate(id, {
            title,
            description,
        });
        
        if(!updatedHobby) {
            return res.status(404).json({
                message: 'Hobby not found!'
            });
        }

        res.status(200).json({
            message: 'Hobby updated successfully!',
            data: updatedHobby,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Internal server error!',
        });
    }
}

// @desc Delete hobby
// @route DELETE /v1/hobbies/:id
const deleteHobby = async (req, res) => {
  try {
    const deletedHobby = await Hobby.findByIdAndDelete(req.params.id);
    
    if(!deletedHobby) {
        return res.status(404).json({
            message: 'Hobby not found!'
        });
    }

    res.status(200).json({
        message: 'Hobby deleted successfully!',
        data: deletedHobby,
    });
  } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error!',
        });
  }
};

module.exports = { getHobbies, getHobbyById, createHobby, updateHobby, deleteHobby, };