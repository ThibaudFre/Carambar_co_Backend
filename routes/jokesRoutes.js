import express from 'express';
import {getAllJokes, getJokeById, getJokesList, postNewJoke} from '../controller/jokesControllers.js'

const router = express.Router()

router.get('/jokes/:jokeId', getJokeById)

router.get('/jokes/', getAllJokes)

router.get('/joke-list', getJokesList)

router.post('/jokes/', postNewJoke)


router.get('/randomjoke', (req, res) => {

    res.send(`random joke`)
})


export default router;