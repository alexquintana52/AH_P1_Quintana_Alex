import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const GameCollection = db.collection('Games')

async function getGames() {
    await client.connect()
    return GameCollection.find().toArray()
}

async function getGameByID(id){
    await client.connect()
    return GameCollection.findOne({ _id: new ObjectId(id) })
}

async function createGame(game) {
    await client.connect()
    const newGame = { ...game }

    await GameCollection.insertOne(newGame)

    return newGame
}

async function updateGame(id, newData) {
    await client.connect()
    const newGameData = { $set: { ...newData } }
    
    await GameCollection.updateOne({ _id: new ObjectId(id) }, newGameData)

}

async function deleteGame(id) {
    await client.connect()
    return GameCollection.deleteOne({ _id: new ObjectId(id) })
}

export default {
    getGames,
    getGameByID,
    createGame,
    updateGame,
    deleteGame
}