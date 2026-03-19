const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

// Crear usuario
router.post("/Paises", (req, res) => {
    const user = new userSchema(req.body);

    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los usuarios
router.get("/Paises", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un usuario por id
router.get("/Paises/:id", (req, res) => {
    const { id } = req.params;

    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar usuario
router.delete("/Paises/:id", (req, res) => {
    const { id } = req.params;

    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar usuario
router.put("/Paises/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    userSchema
        .updateOne(
            { _id: id },
            { $set: { name, age, email } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;