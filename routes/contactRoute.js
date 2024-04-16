import express from 'express';
import {Contact} from '../models/contactModel.js';


const router = express.Router();

//Router to save contact details
router.post('/new', async (req, res)=>{
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
});

//Router to get all contact details
router.get('/', async (req, res)=>{
    try {
        const contacts = await Contact.find({});
        return res.status(200).send(contacts);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
        
    }
});

//Router to update contact details
router.put('/:id', async (req, res)=>{
    try {
        if(!req.body.fullname || !req.body.gender || !req.body.email || !req.body.phonenumber){
            return res.status(400).send('All fields are required');
        }

        const {id} = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).send('Contact not found');
        }

        return res.status(200).send('Contact updated successfully');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
        
    }
});

//Router to delete contact details
router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const result = await Contact.findByIdAndDelete(id);

        if(!result){
            return res.status(404).send('Contact not found');
        }

        return res.status(200).send('Contact deleted successfully');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
        
    }
});

export default router;