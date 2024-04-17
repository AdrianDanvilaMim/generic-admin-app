
import './App.css'
import {Header} from "./components/Header.tsx";
import { Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";


function App() {
    return (
        <div className="App bg-black ">
            <Header></Header>
            <div className={"flex flex-row  h-52   "}>
                <Navigation></Navigation>
                <div className={"bg-green-400 h-full mx-2 w-11/12 rounded-2xl m-2  flex justify-center"}>
                    <Routes>
                        <Route path="/" element={
                            <Dashboard></Dashboard>
                        }/>
                    </Routes>
                </div>
            </div>
            <footer className={"bg-amber-200 m-4"}>
                footer
            </footer>
        </div>
    );
}

export default App;
