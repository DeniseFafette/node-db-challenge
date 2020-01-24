const router = require('express').Router()

const tasks = require('./taskModal')

router.get('/', (req, res) => {
    tasks.find()
        .then(list => {
            const { task_description, notes, id, task_completed, project_id, name, description } = list[0]
            const taskComplete = task_completed ? true : false
            const response = {task_description, notes, id, task_completed: taskComplete, project:{project_id, name, description}}
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve projects'})
        })
})

router.post('/', (req, res) => {
    tasks.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not add task'})
        })
})

module.exports = router