import express from 'express'
import GamesController from '../controllers/games.js'
import VotesRoutes from './votes.js'
import VotesController from '../controllers/votes.js'

const route = express.Router()

route.get('/games', GamesController.getGames)

route.get('/games/votes', VotesController.getVotes)

route.post('/games', GamesController.createGame)

route.get('/games/:idGame', GamesController.getGameByID)

route.put('/games/:idGame', GamesController.updateGame)

route.delete('/games/:idGame', GamesController.deleteGame)

route.use('/games', VotesRoutes)

export default route