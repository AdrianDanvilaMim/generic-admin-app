import {Link} from "react-router-dom";

export const Navigation = ()=>{
    return(
        <nav className={"bg-primary-1  w-2/12 h-screen  sticky top-0  text-scarWhite-1 "}>
            <div className={"bg-gradient-to-b from-primary-2 to-primary-1 h-24"}>
                <div className={"ml-3 pt-3"}><h1>titulo/logo</h1></div>
            </div>
            <div>
                <ul>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                    <li className={"m-2"}><Link to="/*/c">Click </Link></li>
                </ul>
            </div>

        </nav>
    )
}