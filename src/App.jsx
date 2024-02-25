import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./crud/Homepage"
import Createusers from "./crud/Createusers"
import Users from "./crud/Users"
import Editusers from "./crud/Editusers"
import CreateUser from "./crud/CreateUser"
import User from "./crud/User"

// import Lifecycle from "./Lifecycle"

const App=()=>{
    return(

        <div>
            <BrowserRouter>
            <Homepage/>
            <Routes>
                {/* <Route path="/create" element={<CreateUser/>}/> */}
                <Route path="/create" element={<Createusers/>}/>
                <Route path="/users" element={<Users/>}/>
                {/* <Route path="/users" element={<User/>} /> */}
                <Route path="/edit/:index" element={<Editusers/>}/>
            </Routes>
            </BrowserRouter> 
{/*             
            <button onClick={}></button>
            <button onClick={}></button> */}
            {/* <Lifecycle/> */}
        </div>


    )
}

export default App