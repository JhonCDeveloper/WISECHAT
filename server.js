const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jairovalencia100k19:Xm4aASH2l8CN8ZYZ@clusterwisechat.myqvx7p.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWiseChat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB Atlas...'))
  .catch(err => console.error('No se pudo conectar a MongoDB Atlas...', err));

// Define los esquemas y modelos de MongoDB aquí
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Endpoint para registrar usuarios
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('Registro exitoso');
  } catch (error) {
    res.status(400).send('Error al registrar usuario');
  }
});

// Endpoint para iniciar sesión
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send('Inicio de sesión exitoso');
    } else {
      res.status(400).send('Correo o contraseña incorrectos');
    }
  } catch (error) {
    res.status(500).send('Error al iniciar sesión');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));