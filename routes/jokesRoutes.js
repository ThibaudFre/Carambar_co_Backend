import express from 'express';
import {getAllJokes, getJokeById, getJokesList, postNewJoke, getRandomJoke} from '../controller/jokesControllers.js'

const router = express.Router()

router.get('/jokes/:jokeId', getJokeById)

router.get('/jokes/', getAllJokes)

router.get('/jokes-list', getJokesList)

router.post('/jokes/', postNewJoke)

router.get('/joke-random', getRandomJoke)


export default router;