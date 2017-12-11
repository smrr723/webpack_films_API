//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


var express = require('express');
var filmRouter = new express.Router();


filmRouter.get('/api/films', function(req, res){
   res.json(films);
})

filmRouter.put('/:id', function(req, res){
   films[req.params.id] = req.body.film;
   res.json(films);
})

filmRouter.post('/', function(req, res){
   films.push(req.body.film);
   res.json(films);
})



filmRouter.get('/api/films/:id', function(req, res){
   res.json(films[req.params.id]);
})



module.exports = filmRouter;
//
// var cats = ['Bengal', 'British Shorthair', 'Siamese'];
//
// catRouter.get('/', function(req, res) {
//   res.json(cats);
// });
//
// catRouter.post('/', function(req, res){
//    cats.push(req.body.cat);
//    res.json({data: cats});
// });
//
// catRouter.get('/:id', function(req, res){
//    res.json({data: cats[req.params.id] });
// });
//
// catRouter.put('/:id', function(req, res){
//    cats[req.params.id] = req.body.cat;
//    res.json({cats});
// });
//
// catRouter.delete('/:id', function(req, res){
//    cats.splice(req.params.id, 1);
//    res.json(cats);
// });
//
// module.exports = catRouter;
