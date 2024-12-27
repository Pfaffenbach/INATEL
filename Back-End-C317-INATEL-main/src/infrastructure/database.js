const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.ff37fpa.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
};

const { Schema } = mongoose;

const FuncSchema = new Schema({
  id: {
    type: String,
    index: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  nome: String,
  senha: String,
  servico: String,
  celular: String,
  cidade: String
});

const FuncModel = mongoose.model('FuncModel', FuncSchema);

module.exports = {
  FuncModel,
  connectToDatabase,
  disconnectFromDatabase
};