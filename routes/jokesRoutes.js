import express from 'express';
import {getAllJokes, getJokeById, getJokesList} from '../controller/jokesControllers.js'

const router = express.Router()

router.get('/jokes/:jokeId', getJokeById)

router.get('/jokes/', getAllJokes)

router.get('/joke-list', getJokesList)

router.post('/jokes/', (req, res) => {
    console.log(req)
    res.send(`post has been done`)
})


router.get('/randomjoke', (req, res) => {
    res.send(`random joke`)
})


export default router;