interface BaseTablePropsInterface{
    headers:Array<string>
    data:Array<Array<string>>
}


export const BaseTable = ({headers,data}:BaseTablePropsInterface)=>{
    return(
       <div className={"w-11/12 h-72 flex flex-col bg-white justify-around rounded-2xl "}>
           <div className={"my-4 ml-4 pr-4 text-4xl w-11/12 border-b-primary-2 border-b-2"}>Table</div>
           <div className={"flex justify-around border-b-2 w-11/12 ml-4 "}>
               {
                   headers.map((element)=>
                       {
                           return(
                               <div className={"text-2xl w-full"}>{element}</div>
                           )
                       }
                   )

               }
           </div>
           <div className={"flex justify-around  w-full flex-col  items-center no-scrollbar  overflow-hidden hover:overflow-y-scroll"} >
               {
                   data.map((element)=>{
                       return(<div className={"w-11/12 flex justify-around my-4 "}>{
                           element.map((data)=>{
                               return(
                                   <div className={"w-full border-b-2"} >{data}</div>
                               )
                           })}
                       </div>
                       )
                   })
               }
           </div>


       </div>
    )
}