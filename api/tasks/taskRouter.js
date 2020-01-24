const router = require('express').Router()

const tasks = require('./taskModal')

router.get('/', (req, res) => {
    tasks.find()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve projects'})
        })
})

module.exports = router