const router = require('express').Router()

const projects = require('./projectModal')

router.get('/', (req, res) => {
    projects.find()
        .then(list => {
            console.log(list);
            const { id, name, description, completed } = list[0]
            const isComplete = completed ? true : false
            res.status(200).json({id, name, description, completed})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve projects'})
        })
})

router.post('/', (req, res) => {
    console.log(req.body)
    projects.add(req.body)
        .then(item => {
            console.log(item)
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to post project'})
        })
})

module.exports = router