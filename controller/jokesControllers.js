import Joke from "../models/index.js";

const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
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

export { getAllJokes, getJokeById, getJokesList};
