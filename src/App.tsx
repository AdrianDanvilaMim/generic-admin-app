
import './App.css'
import {Header} from "./components/Header.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Footer} from "./components/Footer.tsx";
import {Profile} from "./pages/Profile.tsx";


function App() {


    return (
        <div className="App h-fit">
            <div className={"flex flex-row h-fit " }>
                <Navigation></Navigation>
                <div className={"w-full h-fit"}>
                    <Header></Header>
                    <main className={"h-screen no-scrollbar bg-secondary-1  overflow-hidden hover:overflow-y-scroll flex flex-col items-center"}>
                        <Routes>
                            <Route path={"/*/dashboard"} element={<Dashboard></Dashboard>}></Route>
                            <Route path={"/*/profile"} element={<Profile></Profile>}></Route>
                            <Route path={"/*/dashboard"} element={<Dashboard></Dashboard>}></Route>
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