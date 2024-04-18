
import './App.css'
import {Header} from "./components/Header.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard.tsx";
import {TaskList} from "./pages/TaskList.tsx";



function App() {
    return (
        <div className="App h-fit">
            <div className={"flex flex-row h-fit"}>
                <Navigation></Navigation>
                <div className={"w-full h-fit "}>
                    <Header></Header>
                    <div className={"h-screen no-scrollbar bg-secondary-1  overflow-hidden hover:overflow-y-scroll"}>
                        <Routes>
                            <Route path={"/*/dashboard"} element={
                                <div className={"flex justify-between  flex-row flex-wrap m-6"}>
                                    <div className={"flex flex-row justify-end w-full"}>
                                        <div className={"flex justify-center items-center w-1/2"}>
                                            hotaaaaaaaa
                                        </div>
                                        <TaskList></TaskList>
                                    </div>
                                    <Dashboard></Dashboard>

                                </div>
                            }></Route>
                        </Routes>
                    </div>

                </div>
            </div>
            <footer>a</footer>
        </div>
    );
}

export default App;