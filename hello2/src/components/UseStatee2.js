// import React from "react";
// import { useState } from "react";

// const Home = () =>{
//     // let name1 = "Usman";

//     const [name,setName] = useState("Usman");
//     const handleClick =()=>{
        
//         setName("Rehan");
        
//     }


// return(
//     <div>
//     <h1>{name}</h1>
//     <button onClick={handleClick}>Change</button>
//     </div>
// );
// }

// export default Home;













import React from "react";


import { useState } from "react";

const Home =() =>{

    // let name1 = "Usman";
    const [name1,setName] = useState ("Shafeeq")
    const handleClick =() =>{

        setName ("Wajid")



        // console.log("Wajid")





    }






return(


    <>
    <h1> {name1} </h1>
        <button  onClick={handleClick} >    Change  </button> 
    </>

)





}



export default Home;
