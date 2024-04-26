import {Outlet, useNavigate} from "react-router-dom";

import {useAppSelector} from "../../hooks/hooks.ts";
import {useEffect} from "react";
import {Navigation} from "../../pages/MainPage/views/Navigation.tsx";
import {Header} from "../../pages/MainPage/views/Header.tsx";

import {Footer} from "../../pages/MainPage/views/Footer.tsx";

export function MainPage() {
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.user.user)
  console.log(state)
  //layout , move to /router/layout/...
  //secure root
  useEffect(() => {
    if (state.id == '') {
      navigate("/")
    }
  }, [navigate, state])

  return (
    <div className="App h-fit">
      <div className={"flex flex-row h-fit "}>
        <Navigation
          className={"hidden  bg-primary-1   sm:block w-fit md:w-2/12   h-screen  sticky top-0  text-scarWhite-1 border-b-primary-2 "}></Navigation>
        <div className={"w-full h-fit"}>
          <Header></Header>
          <main
            className={"h-screen no-scrollbar bg-[url('../../public/bg-login.png')] bg-cover  overflow-hidden hover:overflow-y-scroll flex flex-col items-center"}>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );


}

