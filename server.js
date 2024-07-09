const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wisechat')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    let user = new User({ email, password });
    user = await user.save();
    res.send(user);
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).send('Correo o contraseña incorrectos');
    
    // Generar y enviar token (aquí puedes generar un token JWT si lo deseas)
    res.send('Inicio de sesión exitoso');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});