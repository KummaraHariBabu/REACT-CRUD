import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [data,setData] = useState({
        name : '',
        salary : '',
        company : ''
    });
    const {name,salary,company} = data;
    const navigate = useNavigate();
    const onChangeHandler = (e)=> {
        setData({...data,[e.target.name] : e.target.value});
        console.log(data);
    }
    const submitHandler = (e) => {
        axios.post(`http://localhost:3000/content`,data)
        .then(()=>{
            alert("Data has been added to the database");
        }).catch(()=>{
            alert("Something went wrong");
        })
        navigate("/users");
    }

  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <label>Name :</label> <input type="text" value={name} name='name' placeholder='Enter name' onChange={onChangeHandler}/><br /><br />
                <label >Salary :</label> <input type="number" name='salary' value={salary} placeholder='Enter Salary' onChange={onChangeHandler}/><br /><br />
                <label > Company :</label> <input type="text" name='company' value={company} placeholder='Enter company name' onChange={onChangeHandler}/><br /><br />
                <input type="submit" name='Submit' />
            </form>
        </center>
    </div>
  )
}

export default CreateUser