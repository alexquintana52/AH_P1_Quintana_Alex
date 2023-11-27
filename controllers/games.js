import GamesService from '../services/games.js'

function getGames(req, res) {
    GamesService.getGames(req.query)
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

function getGameByID(req, res) {
    const { idGame } = req.params

    GamesService.getGameByID(idGame)
        .then(game => {
            res.status(200).json(game)
        })
        .catch(err => {
            if(err?.code) {
                res.status(err.code).json({ message: err.message })
            } else {
                res.status(500).json({ message: "No se pudieron obtener los datos" })
            }
        })
}

async function createGame(req, res){
    return GamesService.createGame(req.body)
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

async function updateGame(req, res){
    const { idGame } = req.params

    return GamesService.updateGame(idGame, req.body)
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

async function deleteGame(req, res){
    const { idGame } = req.params

    return GamesService.deleteGame(idGame)
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}


export default {
    getGames,
    getGameByID,
    createGame,
    updateGame,
    deleteGame
}