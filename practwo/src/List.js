import React from 'react'
import { useHistory } from 'react-router-dom';

function List() {
    const employees = [
        {
            "id": 1001,
            "name": "John Smith",
            "address": "Pune",
            "number": "1234567890"
        },
        {
            "id": 1002,
            "name": "James Hammy",
            "address": "New York",
            "number": "5678904321"
        },
        {
            "id": 1003,
            "name": "Harry Kanes",
            "address": "Sydney",
            "number": "9876543210"
        },
        {
            "id": 1004,
            "name": "Beth Anglin",
            "address": "London",
            "number": "1245789620"
        },
        {
            "id": 1005,
            "name": "Abel Tutor",
            "address": "L.A",
            "number": "1122334455"
        },
        {
            "id": 1006,
            "name": "Emmie Clarke",
            "address": "Southampton",
            "number": "4455667788"
        },
        {
            "id": 1007,
            "name": "Lara Smith",
            "address": "Boston",
            "number": "0988909789"
        },
        {
            "id": 1008,
            "name": "Sameer Apte",
            "address": "Pune",
            "number": "8765432190"
        },
        {
            "id": 1009,
            "name": "Mark Wood",
            "address": "Auckland",
            "number": "3434345656"
        },
        {
            "id": 1010,
            "name": "Bonny Johnson",
            "address": "Melbourne",
            "number": "167895432"
        }
    ]
    const history = useHistory();
    const handleClick = () => history.push('/profile');

    return (
        <div>
            <p class="text-4xl ...">Employee List</p>
            <br />
            <center>
                <table class="h-screen w-9/12 border-separate border border-gray-800 ...">
                    <thead class="bg-green-300">
                        <tr>
                            <th class="border border-gray-800 ...">ID</th>
                            <th class="border border-gray-800 ...">Name</th>
                            <th class="border border-gray-800 ...">Contact Number</th>
                            <th class="border border-gray-800 ...">Address</th>
                            <th class="border border-gray-800 ...">Actions</th>
                        </tr>
                    </thead>

                    {employees.map((key) => (<tbody>
                        <tr>
                            <td class="border border-gray-800 ...">{key.id}</td>
                            <td class="border border-gray-800 ...">{key.name}</td>
                            <td class="border border-gray-800 ...">{key.number}</td>
                            <td class="border border-gray-800 ...">{key.address}</td>
                            <td class="border border-gray-800 ...">
                                <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Information</button>
                            </td>
                        </tr>
                    </tbody>
                    ))}

                </table>
            </center>
        </div>
    )
}

export default List;