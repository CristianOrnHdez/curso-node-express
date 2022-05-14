const { response, request } = require('express');

const usuariosGet = (req, res) =>{
    const {id, nombre, edad} = req.query;

    res.status(203).json({
        respuesta: "Obtuviste | Controller",
        id,
        nombre,
        edad
    });
}

const usuariosPost = (req = request, res)=>{
    const { nombre, edad } = req.body;
    const { id } = req.params;

    res.json({
        respuesta: "Creado correctamente | Controller",
        nombre,
        edad,
        id
    });
}

const usuariosPut = (req, res)=>{
    res.json({
        respuesta: "Actualizado correctamente | Controller"
    });
}

const usuariosDel = (req, res)=>{
    res.json({
        respuesta: "Borrado correctamente | Controller"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDel
}