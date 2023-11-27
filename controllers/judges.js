import JudgesService from '../services/judges.js'

function getJudges(req, res) {
    JudgesService.getJudges(req.query)
        .then(judges => {
            res.status(200).json(judges)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

function getJudgeByID(req, res) {
    const { idJudge } = req.params

    JudgesService.getJudgeByID(idJudge)
        .then(judge => {
            res.status(200).json(judge)
        })
        .catch(err => {
            if(err?.code) {
                res.status(err.code).json({ message: err.message })
            } else {
                res.status(500).json({ message: "No se pudieron obtener los datos" })
            }
        })
}

export default {
    getJudges,
    getJudgeByID
}