const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/', router);

  //Registering API methods in router
  const itemService = require('../itens/pessoaService');
  itemService.register(router, '/pessoa');

  const itemServiceBookInstance = require('../itens/bookinstanceService');
  itemServiceBookInstance.register(router, '/models/bookinstance');

  const itemServiceAuthor = require('../itens/authorService');
  itemServiceAuthor.register(router, '/models/author');

  const itemServiceBook = require('../itens/bookService');
  itemServiceBook.register(router, '/models/book');
  
  const itemServiceGenre = require('../itens/genreService');
  itemServiceGenre.register(router, '/models/genre');
}