const mongodb = require('../database/index');
const movieModel = require('../model/movies');

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
    console.log(result);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);

};

//POST -- **** Doesn't work need to add line 32 response const to make it create
//             instead of get
controllers.addMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const movie = {
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        length: req.body.length,
        rating: req.body.rating
    };

    const response = await movieModel.find()

    //check response
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the movie');
    }
}

module.exports = controllers;