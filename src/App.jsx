import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./crud/Homepage"
import Createusers from "./crud/Createusers"
import Users from "./crud/Users"
import Editusers from "./crud/Editusers"

// import Lifecycle from "./Lifecycle"

const App=()=>{
    return(

        <div>
            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path="/create" element={<Createusers/>}/>
                <Route path="/users" element={<Users/>}/>
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