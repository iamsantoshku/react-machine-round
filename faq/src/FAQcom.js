import React from "react"
import FAQitem from "./FAQitem"
const FAQcom = ()=>{
    const obj = [
        {
            question:"how many bones does human body",
            answer:"human body has 206 bones",
        },
        {
            question:"how are you",
            answer:"i am fine and you",
        },
        {
            question:"hii who are you what are you doing here",
            answer:"i am santosh , i am finding route of your your house",
        },
    ]
    return(
        <>
           <h2>select random question</h2>
        {
            obj.map((ite, ind)=>{ 
              return  <div><FAQitem ite = {ite} ind = {ind}/> </div> 
                                  
                
            })
        }
        </>

    )
}
export default FAQcom;