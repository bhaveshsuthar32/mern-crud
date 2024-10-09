import { useState } from "react"
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const defaultValue = {
    name :'',
    username : '',
    email : '',
    phone : ''
}

const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();


    const handleChange = (e)=>{
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value})
        // console.log(user)
    }

    const addUserSubmit = async (e)=>{
        e.preventDefault(); 
        await addUser(user);
        navigate("/all");
    }

    return (
        <>
            <div className="container w-50 my-4">

                <form onSubmit={addUserSubmit} >
                    <div>
                        <h4 className="text-center">Add User</h4>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e)=>handleChange(e)} name="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" id="userName" onChange={(e)=>handleChange(e)} name="username"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" onChange={(e)=>handleChange(e)} name="email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone No.</label>
                        <input type="text" className="form-control" id="phno" onChange={(e)=>handleChange(e)} name="phone"/>
                    </div>

                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )

}

export default AddUser;