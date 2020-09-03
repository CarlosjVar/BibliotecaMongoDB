const express = require('express')
const router = express.Router();
const members = require('../../Models/miembros')
//Get single members
router.get('/:id',(req,res,next)=>{
    const found = members.some(member=>member.id === parseInt(req.params.id));
    if (found)
    {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({msg: `No hay miembros bajo el id ${req.params.id}`});
    }
    next()
});
//Get members
router.get('/',(req,res,next)=>{
    res.json(members)
    next()
});

module.exports = router;