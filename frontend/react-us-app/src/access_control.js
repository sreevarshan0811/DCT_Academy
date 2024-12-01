import './App.css';
import {useContext} from 'react' 
export default function App() {
    return (
        <div>
            <h1>Access Control</h1>
            <table>
                <tr>
                <td><h2>Admin : </h2></td>
                <td><h2>create <input type='checkbox'></input></h2></td>
                <td><h2>read <input type='checkbox'></input></h2></td>
                <td><h2>update <input type='checkbox'></input></h2></td>
                <td><h2>delete <input type='checkbox'></input></h2></td>
                </tr>
                <tr>
                <td><h2>Buyer  : </h2></td>
                <td><h2>create <input type='checkbox'></input></h2></td>
                <td><h2>read <input type='checkbox'></input></h2></td>
                <td><h2>update <input type='checkbox'></input></h2></td>
                <td><h2>delete <input type='checkbox'></input></h2></td>
                </tr>
                <tr>
                <td><h2>Seller  : </h2></td>
                <td><h2>create <input type='checkbox'></input></h2></td>
                <td><h2>read <input type='checkbox'></input></h2></td>
                <td><h2>update <input type='checkbox'></input></h2></td>
                <td><h2>delete <input type='checkbox'></input></h2></td>
                </tr>

            </table>
        </div> 
       )
}