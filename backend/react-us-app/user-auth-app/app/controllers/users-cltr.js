import User from '../models/user-model.js'
import _ from 'lodash';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken'; 
import bcryptjs from 'bcryptjs';
const usersCltr = {}; 

usersCltr.register = async (req, res) => {
    const errors = validationResult(req); 
    if(!errors.isEmpty()) {
        return res.status(400).json({ erorrs: errors.array()});
    }
    const body = req.body;
    const user = new User(body); 
    
    try {
        const salt = await bcryptjs.genSalt(); 
        const hashPassword = await bcryptjs.hash(body.password, salt); 
        user.password = hashPassword; 
        // to make the first user as admin
        const userCount = await User.countDocuments(); 
        if(userCount == 0) {
            user.role = 'admin'; 
        }
        await user.save();
        res.status(201).json(user); 
    } catch(err) {
        res.status(500).json({ error: 'Something went wrong'}); 
    } 
}

usersCltr.login = async (req, res) => {
    const errors = validationResult(req); 
    if(!errors.isEmpty()) {
        return res.status(400).json({ erorrs: errors.array()});
    }
    const body = req.body; 
    try {
        const user = await User.findOne({email: body.email}); 
        
        if(!user) {
            return res.status(404).json({ errors: 'invalid email / password'}); 
        }

        if(user.status == 'deactive') {
            return res.status(403).json({ errors: 'your account is deactivated, please contact the admin'})
        }

        const isValidUser = await bcryptjs.compare(body.password, user.password);
        if(!isValidUser) {
            return res.status(404).json({ errors: 'invalid email / password'}); 
        }
        const tokenPayload = { userId: user._id, role: user.role };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '7d'}); 
        res.json({ token: `Bearer ${token}` });
        
    } catch(err) {

    }
}

usersCltr.account = async (req, res) => {
    try { 
        const user = await User.findById(req.currentUser.userId);
        res.json(_.pick(user, ['_id', 'email', 'role']));
    } catch(err) {
        
    }
}

usersCltr.list = async (req, res) => {
    const users = await User.find()
    res.json(users); 
}

usersCltr.userActivation = async (req, res) => {
    // update the user 
    const id = req.params.id; 
    const body = req.body; 
    const user = await User.findByIdAndUpdate(id, body, { new: true } )
    res.json(user); 
}

export default usersCltr