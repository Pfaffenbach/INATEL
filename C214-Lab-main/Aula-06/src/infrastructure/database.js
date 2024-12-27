const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.5bxq750.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const AnimeSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    produtora: String,
    temporadas: String,
    episodios: String,
});

const AnimeModel = mongoose.model('AnimeModel', AnimeSchema);

module.exports = {
    AnimeModel,
};