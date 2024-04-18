export const Login =()=>{
    return(
        <div className={"bg-[url('../../public/bg-login.png')] bg-cover h-screen w-full flex flex-col justify-center items-center"}>
            <div className={"bg-white sm:w-96 w-80 h-1/2   flex flex-col rounded-2xl"}>
                    <h1 className={'text-4xl m-5'}>Login</h1>
                    <div className={" h-full m-5 flex flex-col justify-between"}>
                        <form>
                            <div className={" rounded-2xl"}>
                                <label>Name</label>
                                <input type={"text"} placeholder={""}
                                       className={"h-14 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                            </div>
                            <div className={" rounded-2xl"}>
                                <label>Name</label>
                                <input type={"text"} placeholder={""}
                                       className={"h-14 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                            </div>
                        </form>

                        <div className={"h-full my-2 flex-col justify-between"}>
                            <div className={"flex justify-between"}>
                                <button type={"submit"} className={"h-10 bg-white rounded-2xl border-primary-2 border-2 hover:bg-primary-1 hover:text-white  w-3/12"}>Log In</button>

                            </div>

                        </div>
                    </div>
            </div>
        </div>
    )
}