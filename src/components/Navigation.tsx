import {Link} from "react-router-dom";

export const Navigation = ()=>{
    return(
        <nav className={"bg-primary-1  sm:w-96 w-48   h-screen  sticky top-0  text-scarWhite-1 border-b-primary-2 "}>
            <div className={"bg-gradient-to-b from-primary-2 to-primary-1 h-24 "}>
                <div className={"ml-3 pt-3"}><h1>titulo/logo</h1></div>
            </div>
            <div className={"mt-10 ml-3 mr-3"}>
                <ul className={"flex flex-col justify-around h-full relative"}>
                    <h1>Important Links</h1>
                    <ul className={"flex flex-col  h-full relative"}>


                        <Link to="/*/dashboard">
                            <li className={"ml-2  hover:bg-primary-3 hover:text-scarWhite-1 transition duration-150 ease-in-out rounded-2xl h-14 text-xl item flex items-center text-secondary-1"}>
                                <p className={"m-2 icon-home"}></p>
                                <p className={"m-2 "}>Home</p>
                            </li>
                        </Link>

                        <Link to="/*/c">
                            <li className={"ml-2  hover:bg-primary-3 hover:text-scarWhite-1 transition duration-150 ease-in-out rounded-2xl h-14 text-xl item flex items-center text-secondary-1"}>
                                <p className={"m-2 icon-images"}></p>
                                <p className={"m-2 "}>Images</p>
                            </li>
                        </Link>

                        <Link to="/*/c">
                            <li className={"ml-2  hover:bg-primary-3 hover:text-scarWhite-1 transition duration-150 ease-in-out rounded-2xl h-14 text-xl item flex items-center text-secondary-1"}>
                                <p className={"m-2 icon-paragraph-justify"}></p>
                                <p className={"m-2 "}>Tasks</p>
                            </li>
                        </Link>
                    </ul>

                    <h1>Secondary Links</h1>
                    <Link to="/*/c">
                        <li className={"m-4 pb-4 hover:bg-primary-3 hover:text-scarWhite-1 rounded-2xl h-10 text-1xl item flex items-center text-secondary-1"}><p
                            className={"m-4"}>enlace</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}