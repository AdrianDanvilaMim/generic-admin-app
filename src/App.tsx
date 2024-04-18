
import './App.css'
import {Header} from "./components/Header.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard.tsx";



function App() {
    return (
        <div className="App h-fit">
            <div className={"flex flex-row h-fit"}>
                <Navigation></Navigation>
                <div className={"w-full h-fit "}>
                    <Header></Header>
                    <div className={"h-screen no-scrollbar  overflow-hidden hover:overflow-y-scroll"}>

                        <Routes>
                            <Route path={"/*/dashboard"} element={
                                <div>
                                    <Dashboard></Dashboard>
                                </div>
                            }></Route>
                        </Routes>
                    </div>

                </div>
            </div>

            <footer className={"bg-amber-200 "}>
                footer
            </footer>
        </div>
    );
}

export default App;