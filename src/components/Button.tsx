import  {ReactNode} from "react";

interface ButtonPropsInterface{
    type:"submit"| "reset" | "button" | undefined;
    className:string;
    //todo
    value?:never;
    url?:string;
    onClick: (url:string)=>void;
    children:ReactNode

}

export const Button  =({type,className,url,onClick,children}:ButtonPropsInterface)=>{
    return(
        <>
            <button type={type} className={className}
                    onClick={()=>{
                        if (url)
                        onClick(url)
                    }}>
                    {children}
            </button>

        </>
    )
}