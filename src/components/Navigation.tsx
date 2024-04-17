import {Link} from "react-router-dom";

export const Navigation = ()=>{
    return(
        <nav className={"bg-amber-700 m-2 rounded-lg w-2/6 h-fit  "}>
            <ul>

                <li className={"m-2"}><Link to="/c">Click </Link></li>
                <li className={"m-2"}><Link to="/c">Click </Link></li>
                <li className={"m-2"}><Link to="/c">Click </Link></li>
                <li className={"m-2"}><Link to="/c">Click </Link></li>
                <li className={"m-2"}><Link to="/c">Click </Link></li>
                <li className={"m-2"}><Link to="/c">Click </Link></li>


            </ul>
        </nav>
    )
}