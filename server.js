import express from 'express'
import cors from 'cors'
import GamesRoutes from './routes/games.js'
import JudgesRoutes from './routes/judges.js'

const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use(GamesRoutes)
app.use(JudgesRoutes)

app.listen(PORT, () => {
    console.log(`Server ON! http://localhost:${PORT}`);
})