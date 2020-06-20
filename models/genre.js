const restful = require('node-restful')
const mongoose = restful.mongoose

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
      name: {type: String, required: true, min: 3, max: 100}
    }
  );
  // Virtual para o URL da 
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});
// Exportar modelo 
module.exports = restful.model('Genre', GenreSchema);