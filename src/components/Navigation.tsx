import {Link} from "react-router-dom";
import {links} from "../constants/constants.tsx";

export const Navigation = () => {
    return (
        <nav className={"bg-primary-1 w-fit md:w-2/12   h-screen  sticky top-0  text-scarWhite-1 border-b-primary-2 "}>
            <div className={" h-24 "}>
                <div className={"ml-3 pt-3"}><h1>titulo/logo</h1></div>
            </div>
            <div className={"mt-10 ml-3 mr-3"}>
                <ul className={"flex flex-col justify-around h-full relative"}>
                    <h1>Important Links</h1>
                    <ul className={" my-4 flex flex-col  h-full relative"}>
                        {
                            links.map((element) => {
                                return (
                                    <Link to={element.url}>
                                        <li className={" pl-2 hover:bg-primary-3 hover:text-scarWhite-1 transition duration-150 ease-in-out rounded-md h-14 text-xl item flex items-center text-secondary-1"}>
                                            <p className={`m-2 ${element.icon}`}></p>
                                            <p className={"m-2 "}>{element.name}</p>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                    <h1>Secondary Links</h1>
                    <Link to="/*/c">
                        <li className={"m-4 pb-4 hover:bg-primary-3 hover:text-scarWhite-1 rounded-2xl h-10 text-1xl item flex items-center text-secondary-1"}>
                            <p
                                className={"m-4"}>enlace</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}