const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/', async (req, res)=>{
    try {
        await Task.find()
            .then(tasksList => res.json(tasksList))
            .catch(error => res.status(400).json('Error: ' + error));
    } catch (error) {console.log(error)}
})

router.get('/:id', (req,res)=>{
    const taskDB = Task.findOne({_id:req.params.id})
        .then(taskDB => res.json(taskDB))
        .catch(error => res.status(404).json('Error: ' + error))
})

router.post('/', async(req,res)=>{
    try {
        await new Task(req.body).save()
            .then(() => res.json('Post request succesfully done!'))
            .catch(error => res.status(400).json('Error' + error))
        
    } catch (error) {console.log(error)}
})

router.delete('/:id', async(req, res)=>{
    try {
        const taskDB = await Task.findByIdAndDelete({_id:req.params.id})
        
        //checks if for some reason we are deleting something that does not exist
        if(!taskDB){
            res.json({
                state: false,
                message: 'Error: Deleting something that is not existing'
            })
        }

        else{
            res.json({
                state: true,
                message: 'Delete request succesfully done!'
            })
        }

    } catch (error) {console.log(error)}
})

router.put('/:id', async(req, res)=>{
    try {
        const taskDB = await Task.findByIdAndUpdate(req.params.id, req.body,{useFindAndModify:false})
        res.json({
            state: true,
            message: 'Put request succesfully done'
        })
    } catch (error) {console.log(error)}
})

module.exports = router