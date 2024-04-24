import './App.css'
import {Header} from "./components/Header.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Footer} from "./components/Footer.tsx";
import {Profile} from "./pages/Profile.tsx";
import {useAppSelector} from "./hooks/hooks.ts";
import {useEffect} from "react";
import {Tasks} from "./pages/Tasks.tsx";


function App() {

    const navigate = useNavigate();
    const state = useAppSelector((state) => state.user.user)
    console.log(state)


    useEffect(() => {
        if (state.id == '') {
            navigate("/")
        }
    }, [navigate, state])

    return (
        <div className="App h-fit">
            <div className={"flex flex-row h-fit "}>
                <Navigation></Navigation>
                <div className={"w-full h-fit"}>
                    <Header></Header>
                    <main
                        className={"h-screen no-scrollbar bg-[url('../../public/bg-login.png')] bg-cover  overflow-hidden hover:overflow-y-scroll flex flex-col items-center"}>
                        <Routes>
                            <Route path={"/*/dashboard"} element={<Dashboard></Dashboard>}></Route>
                            <Route path={"/*/profile"} element={<Profile></Profile>}></Route>
                            <Route path={"/*/tasks"} element={<Tasks></Tasks>}></Route>
                            <Route path={"/*/dashboard"} element={<Dashboard></Dashboard>}></Route>
                        </Routes>
                    </main>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );


}

export default App;