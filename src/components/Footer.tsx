export const Footer = () => {
    return (
        <footer className={"h-fit bg-details-1 text-white p-4 "}>
            <div className={"grid grid-cols-3 text-center"}>
                <div className={"grid grid-cols-1"}>
                    <p className={"text-2xl my-4"}> About us </p>
                    <div className={"text-secondary-2 text-start m-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmrs in massa tempor nec
                        feugiat
                    </div>
                </div>

                <div className={"grid grid-cols-1"}>
                    <p className={"text-2xl my-4"}> Social Media </p>
                    <div className={"text-secondary-2 text-start m-4 h-full flex flex-col justify-around"}>
                        <div className={"flex items-center"}>
                            <p className={"icon-telegram font-light"}></p>
                            <p className={"ml-2"}> contact us in our telegram:@adminGeneric</p>
                        </div>

                        <div className={"flex items-center"}>
                            <p className={"icon-twitter font-light"}></p>
                            <p className={"ml-2"}> contact us in our twitter:@adminGeneric</p>
                        </div>

                        <div className={"flex items-center"}>
                            <p className={"icon-whatsapp font-light"}></p>
                            <p className={"ml-2"}> contact us in our whatsapp:+344536633</p>
                        </div>

                        <div className={"flex items-center"}>
                            <p className={"icon-instagram font-light"}></p>
                            <p className={"ml-2"}> contact us in our instagram: @adminGeneric</p>
                        </div>


                    </div>
                </div>

                <div className={"grid grid-cols-1"}>
                    <p className={"text-2xl my-4"}> Titulo </p>

                    <a>a</a>
                    <a>b</a>
                    <a>c</a>
                </div>
            </div>
        </footer>
    )
}