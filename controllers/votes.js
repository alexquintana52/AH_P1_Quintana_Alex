import VotesService from '../services/votes.js'

function getVotes(req, res) {
    VotesService.getVotes(req.query)
        .then(votes => {
            res.status(200).json(votes)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

function findGameVotes(req, res) {
    const { idGame } = req.params

    VotesService.findGameVotes(idGame)
        .then(vote => {
            res.status(200).json(vote)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

function createGameVotes(req, res) {
    const { idGame } = req.params

    VotesService.createGameVotes(idGame, req.body)
        .then(vote => {
            res.status(200).json(vote)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

export default {
    getVotes,
    findGameVotes,
    createGameVotes
}