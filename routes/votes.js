import express from 'express'
import VotesController from '../controllers/votes.js'

const route = express.Router()

route.get('/:idGame/votes', VotesController.findGameVotes)
route.post('/:idGame/votes', VotesController.createGameVotes)

export default route