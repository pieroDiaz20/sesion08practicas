const {response,query}=require('express');

const getUsuarios=(req,res = response)=> {
                const {id,nombre="no registrado",apellido}=req.query
                    res.json({ message:'metodo GET desde el controlador', 
                               id,
                               nombre,
                               apellido })};
const PostUsuarios=(req,res = response)=> {
                        const {nombre,apellido} = req.body;
                        res.json({message:'metodo POST desde el controlador',
                                  nombre,
                                  apellido})};
const PutUsuarios=(req,res = response)=> {
const {id}= req.params
res.json({ message:'metodo PUT desde el controlador',
           id})};
const DeleteUsuarios=(req,res = response)=> res.json({ message:'metodo DELETE desde el controlador' });






module.exports={
    getUsuarios,
    PostUsuarios,
    PutUsuarios,
    DeleteUsuarios
}
