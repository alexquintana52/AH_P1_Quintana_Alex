import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const VotesCollection = db.collection('Votes')

async function getVotes() {
    await client.connect()
    return VotesCollection.find().toArray()
}

async function findGameVotes(idGame) {
    await client.connect()
    return VotesCollection.findOne({ game_id: new ObjectId(idGame) })
}

async function createGameVotes(idGame, review) {
    await client.connect()

    const newGameVote = {
        ...review,
        game_id: new ObjectId(idGame)
    }

    await VotesCollection.insertOne(newGameVote)

    return newGameVote
}

export default {
    getVotes,
    findGameVotes,
    createGameVotes
}