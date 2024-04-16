import express from 'express';
import {Contact} from '../models/contactModel.js';


const router = express.Router();

//Router to save contact details
router.post('/', async (req, res)=>{
    try {
        if(!req.body.fullname || !req.body.gender || !req.body.email || !req.body.phonenumber){
            return res.status(400).send('All fields are required');
        }
        const newContact = new Contact({
            fullname: req.body.fullname,
            gender: req.body.gender,
            email: req.body.email,
            phonenumber: req.body.phonenumber
        });

        const contact = await Contact.create(newContact);
        return res.status(201).send("Book saved successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
        
    }
})

export default router;