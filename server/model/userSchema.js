import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true 
    }
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user1');

const user = mongoose.model('user1',userSchema);

export default user;
