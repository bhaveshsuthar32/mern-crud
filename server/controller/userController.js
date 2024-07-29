import User from '../model/userSchema.js';


// Add Data
export const addUser = async (req,res)=>{
    const user = req.body;
    
    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
        // console.log(newUser)
    } catch (error) {
        console.log(error)
        res.status(409).json({error: message.error})
        console.log(error)
    }
}


// Get Data
export const getUsers = async(req,res) =>{
    try {
        const users = await User.find();
        res.status(201).json(users);
        console.log(users);
    } catch (error) {
        console.log(error);
        res.status(404).json({error:message.error});
    }
}
