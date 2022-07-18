const {Work} = require('../models/works')

const router = require('express').Router();

router.post('/',(req,res)=>{
    const {id } = req.body
    res.status(200).send({id})
})

router.post('/workById', async(req,res)=>{
    try {
        const {id} = req.body
        let work = await Work.findById(id);

        if (!work) {
            res.status(200).send(false);
        }else {
            res.status(200).send(work);
        }

    } catch (error) {
        console.log(error);
        res.status(501).send({ mensaje: `Error${error} intente nuevamente` });
    }

})

router.post('/worksByState', async(req,res)=>{
    try {
        const {state} = req.body
        let work = await Work.findByState(state);

        if (!work) {
            res.status(404).send(false);
        }else {
            res.status(200).send(work);
        }
        
    } catch (error) {
        console.log(error);
        res.status(501).send({ mensaje: `Error${error} intente nuevamente` });
    }

})

router.get('/getWorks', async(req,res)=>{
    try {
        let work = await Work.find();

        if (!work) {
            res.status(404).send(false);
        }else {
            res.status(200).send(work);
        }
        
    } catch (error) {
        console.log(error);
        res.status(501).send({ mensaje: `Error${error} intente nuevamente` });
    }

})

router.put('/UpdateWork',async(req,res)=>{
    try {
        const {id,state,news=[]} = req.body
        let work = await Work.findById(id)
        work.state = state
        work.news = news
        console.log(work.state,work.news)
        await work.save()
        res.status(200).send(true)
        console.log('actualizado correctamente')
    } catch (error) {
        console.log(error)
        res.status(404).send(false);
    }
})

router.post('/newWork',async (req,res)=>{
    try {
        const {id,name, email, numberCel, device, problem, deliveryDate, state,date} = req.body;
        const newWork = new Work({
            id,
            name,
            email,
            numberCel,
            device,
            problem,
            date,
            deliveryDate,
            state
        });
  
        await newWork.save();
    
        res.status(201).send(true);
        console.log(`el trabajo se guardo correctamente`)
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: `Error${error}, falla del sistema. Vuelva a intentar mas tarde` });

    };
})

module.exports = router;