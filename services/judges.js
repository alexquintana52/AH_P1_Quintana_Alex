import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const JudgesCollection = db.collection('Judges')

async function getJudges() {
    await client.connect()
    return JudgesCollection.find().toArray()
}

async function getJudgeByID(id){
    await client.connect()
    return JudgesCollection.findOne({ _id: new ObjectId(id) })
}

export default {
    getJudges,
    getJudgeByID
}