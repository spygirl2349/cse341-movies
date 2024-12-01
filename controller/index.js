const mongodb = require('../database/index');
const movieModel = require('../model/movies');
const userModel = require('../model/users');
const objectId = require('mongodb').ObjectId;

const controllers = {};

//GET
controllers.getMovies = async (req, res) => {
    //#swagger.tags=['Movies']
    // const result = await mongodb.getDatabase().db().collection('movies').find();
    // result.toArray().then((data) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.status(200).json(data);
    // });
    const result = await movieModel.find();
    //console.log(result);
    if (result !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result)

    } else {
        res.status(500).json(result.error || 'An error occured getting movies')
    }
};

controllers.getOneMovie = async (req, res) => {
    const movieId = new objectId(req.params.id);
    const result = await movieModel.find({ _id: movieId });

    if (result !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
    } else {
        res.status(500).json(result.error || 'Error: Movie not found')
    }

}

//get all users
controllers.getUsers = async (req, res) => {
    //#swagger.tags=['Users']
    const result = await userModel.find();

    if (result !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result)

    } else {
        res.status(500).json(result.error || 'An error occured getting users')
    }
}

// get 1 user
controllers.getOneUser = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new objectId(req.params.id);
    const result = await userModel.find({ _id: userId });

    if (result !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
    } else {
        res.status(500).json(result.error || 'Error: User not found')
    }

}

//POST -- **** Adds to database but if else statement doesn't work
//             
controllers.addMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const movie = {
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        length: req.body.length,
        rating: req.body.rating
    };
    const response = await movieModel.insertMany(movie);
    // const response = await movieModel.save(movie)

    //check response
    if (response !== null) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the movie');
    }
}

controllers.createUser = async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    const response = await userModel.insertMany(user);

    //check response
    if (response !== null) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the user');
    }
}

//PUT 
// ***** not sure if if-else statements work
controllers.updateMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const movieId = new objectId(req.params.id);
    const movie = {
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        length: req.body.length,
        rating: req.body.rating
    };

    const response = await movieModel.replaceOne({ _id: movieId }, movie);

    //check response
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the movie');
    }

}

//DELETE
controllers.deleteMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const movieId = new objectId(req.params.id);
    const response = await movieModel.deleteOne({ _id: movieId });

    //check response
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the movie');
    }
}

controllers.deleteUser = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new objectId(req.params.id);
    const response = await userModel.deleteOne({ _id: userId });

    //check response
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user');
    }
}

module.exports = controllers;