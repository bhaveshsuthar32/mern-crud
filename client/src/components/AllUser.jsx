import {Table, TableBody, TableCell, TableHead, TableRow, styled} from '@mui/material';

import { useEffect , useState } from 'react';

import { getUsers } from '../service/api.js';

const StyleTable = styled(Table)({
    width : '60%',
    margin: '50px auto 50px auto',
    border: '1px solid black'
})

const Thead = styled(TableHead)({
    background:'#000000',
    color: '#ffff',
})


const AllUser = ()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    }, [])

    const getAllUsers = async()=>{
        let response = await getUsers();
        setUsers(response.data)
    }

    return (
        <>
            <StyleTable>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user, index) => (
                        <TableRow key={user._id}>
                            <TableCell>{index + 1}</TableCell> {/* Display sequential numbers */}
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                               Edit / Delete 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyleTable>
        </>
    )
}

export default AllUser ;
