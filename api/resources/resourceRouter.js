const router = require('express').Router()

const resources = require('./resourceModal')

router.get('/', (req, res) => {
    resources.find()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve resources'})
        })
})

router.post('/', (req, res) => {
    resources.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to post resource'})
        })
})

module.exports = router