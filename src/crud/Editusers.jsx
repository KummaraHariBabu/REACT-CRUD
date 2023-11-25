import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"


const Editusers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate=useNavigate()

    let {index}=useParams()
    console.log(index);
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[])

    let formHandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payload)
        .then(()=>{
            console.log("data has been updated")
        })
        navigate("/users")
        window.location.assign("/users")

    }

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    return(
        <div id={style.myForm}>
            <table>
                <tr>
                    <th id={style.heading} colspan="2"><h3 >User Details</h3></th>
                </tr>
                <tr>
                    <td> <label>Name </label> </td>
                    <td> : <input type="text" value={name} onChange={nameData}/> </td>
                </tr>
                <tr>
                    <td> <label>Salary </label> </td>
                    <td> : <input type="text" value={salary} onChange={salaryData} /> </td>
                </tr>
                <tr>
                    <td> <label>Company </label> </td>
                    <td> : <input type="text" value={company} onChange={companyData} /></td>
                </tr>
                <tr>
                    <th colspan="2" ><button onClick={formHandle} >Submit</button></th>
                </tr>
            </table>


        </div>
    )
}



export default Editusers