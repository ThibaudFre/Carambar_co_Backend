import Joke from "../models/index.js";

const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll({
            attributes: ['riddle', 'answer'],
        });
        return res.status(200).json(jokes)
    } catch (error) {
        console.error(`getAllJokes didn't suceeded`)
        return res.status(500).json({ message: `Error server`, erreur: `${error}` })
    }

}

const getJokesList = async (req, res) => {
    try {
        const jokes = await Joke.findAll({
            attributes: ['riddle', 'id'],
        })
        return res.status(200).json(jokes)
    } catch (error) {
        console.error(`getJokesList didn't suceeded`)
        return res.status(500).json({ message: `Error server`, erreur: `${error}` })
    }
}

const getJokeById = async (req, res) => {
    try {
        const jokeID = req.params.jokeId;
        const joke = await Joke.findByPk(jokeID);

        if (!joke) {
            return res.status(404).json({ message: `no jokes founded at id: ${jokeID}` })
        }
        return res.status(200).json(joke)
    } catch (error) {
        console.error(`getJokeById didn't suceeded`)
        return res.status(500).json({ message: `Error server`, erreur: `${error}` })
    }
}


const postNewJoke = async (req, res) => {
    try {
        const {riddle, answer}= req.body
        const newJoke = await Joke.create({
            riddle: riddle,
            answer: answer
        })
        return res.status(200).json({message: `Your joke has been added ! It's a very funny joke by the way, Lol.`})
    }catch (error) {
        return res.status(400).json({ message: `your joke has not been added`, erreur: `${error}` })
    }
}

const getRandomJoke = async (req, res) => {
    try {
        const jokesCount = await Joke.count();
        const randomJokeId = Math.floor(Math.random() * jokesCount) + 1;
        const randomJoke = await Joke.findByPk(randomJokeId)
        console.log(`randomJoke: ${randomJoke}`)
        console.log(`jokesCount: ${jokesCount} + randomJokeId: ${randomJokeId}`)
        return res.status(200).json({riddle: randomJoke.riddle, answer: randomJoke.answer})
    } catch (error){
        console.error(`getRandomJoke didn't suceeded`)
        return res.status(500).json({ message: `Error server`, erreur: `${error}` })
    }
}

export { getAllJokes, getJokeById, getJokesList, postNewJoke, getRandomJoke};
