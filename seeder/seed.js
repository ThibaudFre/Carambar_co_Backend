import Joke from "../models/index.js";
import seeds from "./jokes.json" with {type: "json"}


const seedDatabase = async () => {
    try {
        const jokesCount = await Joke.count();
        //if there are already jokes in sqlite file we dont want to writte over it
        if (jokesCount === 0) {
            const jokes = await Joke.bulkCreate(seeds)
            console.log(`initial joke instancied`)
            return jokes
        }
    } catch (error) {
        console.log(`error while seeding: ${error}`)
        throw error;
    }
}

export default seedDatabase;