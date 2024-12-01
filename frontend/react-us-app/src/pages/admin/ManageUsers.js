import { useEffect,useState} from "react"
import axios from "axios"
export default function ManageUsers(){
    const [users, setUsers ] = useState([]);

    useEffect(() => {
        (async() => {
            try{
                const response = await axios.get('http://localhost:3010/api/users' , {
                    headers: {
                        Authorization : localStorage.getItem('token')
                    }
                });
                setUsers(response.data);
            }catch(err){
                console.log(err);
            }
        })();
    },[]);

    const handleStatusChange = async (userObj) => {
        try {
          const formData = { status: userObj.status == 'active' ? 'deactive' : 'active' };
          const response = await axios.put(`http://localhost:3010/api/users/${userObj._id}/status`, formData, { headers: { Authorization: localStorage.getItem('token')}}); 
          const newArr = users.map((ele) => {
            if(ele._id === response.data._id) {
                return response.data; 
            } else {
                return ele; 
            }
          });
          setUsers(newArr); 
        } catch(err) {
            alert(err.message); 
        }
    }

    return (
        <div>
            <h2>Manage Users - {users.length}</h2>
            <table>
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                { users.map((ele) => {
                        return (
                            <tr key={ele._id}>
                                <td><input 
                                        type="checkbox" 
                                        checked={ele.status == 'active'} 
                                        onChange={() => {
                                                handleStatusChange(ele); 
                                        }}
                                        disabled={ele.role == 'admin'}
                                    /></td>
                                <td>{ ele.email }</td>
                                <td>{ ele.role }</td>
                                <td>{ ele.createdAt }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}