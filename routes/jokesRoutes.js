import express from 'express';

const router = express.Router()

router.get('/jokes/:jokesId',(req,res)=>{
    const jokeID = req.params.jokesId;
    res.send(`test get jokes by id, the is is, ${jokeID}`)
})

router.get('/jokes/',(req,res)=>{
    res.send(`test get all the jokes`)
})


router.get('/jokes/randomjoke',(req,res) => {
    res.send(`random joke`)
})


export default router;