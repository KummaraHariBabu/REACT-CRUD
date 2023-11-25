import {Link} from "react-router-dom"
import style from "./home.module.css"

const Homepage=()=>{
    return(
        <section id={style.nav}>
            <Link to="/create" >Create-users</Link>
            <Link to="/users" >Users</Link>

        </section>
    )
}

export default Homepage