import {Link} from "react-router-dom";
import {links} from "../../../constants/constants.tsx";

interface NavigationProps {
  className: string
}

export const Navigation = ({className}: NavigationProps) => {
  return (
    <nav
      className={className}>
      <div className={""}>
        <div className={" h-24 hidden sm:block"}>
          <div className={"ml-3 pt-3"}><h1>titulo/logo</h1></div>
        </div>
        <div className={"sm:mt-10  ml-3 mr-3"}>
          <ul className={"flex flex-row sm:flex-col justify-around h-fit sm:h-full relative"}>
            <h1 className={"hidden sm:block"}>Important Links</h1>
            <ul className={" my-4 flex flex-row sm:flex-col  h-full relative"}>
              {
                links.map((element) =>
                    <Link to={element.url}>
                      <li
                        className={" pl-2 hover:bg-primary-3 hover:text-scarWhite-1 transition duration-150 ease-in-out rounded-md h-14 text-xl item flex items-center text-secondary-1"}>
                        <p className={`m-2 ${element.icon}`}></p>
                        <p className={"m-2 "}>{element.name}</p>
                      </li>
                    </Link>
                )
              }
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}