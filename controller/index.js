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
    //console.log(result);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);

};

//POST -- **** Doesn't work? line 34/33
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
    console.log(movie);
    const response = await movieModel.insertOne(movie);
    // const response = await movieModel.save(movie)

    //check response
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the movie');
    }
}

module.exports = controllers;