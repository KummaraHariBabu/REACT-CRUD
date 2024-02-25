import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios';
const User = () => {
    const [data,setData] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:3000/content")
        .then((res)=> {
            setData(res.data);
        }).catch((res)=> {
            console.log("Didn't get Data...!");
        })
    },[]);

    const deleteData = ((id) => {
        axios.delete(`http://localhost:3000/content/${id}`);
        window.location.assign("/users");
    })

   return (
    <div id={style.myUsers}>
        {data.map((userData,index) => {
                return(
                    <div id={style.cards}>
                    <table>
                        <tr>
                            <th>Employee {userData.id}</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td> : {userData.name}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>: {userData.salary}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>: {userData.company}</td>
                        </tr>
                        <tr>
                            <td><button>Edit</button></td>
                            <td><button onClick={()=>deleteData(userData.id)}>Delete</button></td>
                        </tr>
                    </table>
                    </div>

                )
            })
        }
    </div>
  )
}

export default User