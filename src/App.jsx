// import { useState } from "react"

// function App(){


//   const [add , setCounter] = useState(0);

//   function addCounter(){
//     setCounter(add + 1);
  
//   }

//   return (
//     <>
//     <h1>Hello Practice</h1>
//     <h1>Hello Counter {add}</h1>
//     <button onClick={addCounter}>Changed Btn {add}</button>
//     </>
//   )
// }

// export default App




// import React from 'react'
// import card from './components/card'

// const App = () => {
//   return (
//     <>
//     <h1>HELLO CARD</h1>
//     <card title="Cars" description="Best Cars in The World"  />
//     </>
//   )
// }

// export default App




// CHILDREN TO PARENT 
// PARENT TO CHIDREN



// import React, { useState } from 'react'

// const App = () => {

//   const [age , setAge] = useState(0);

//   function clickBtn(age){
//     console.log("children to parent");
//     setAge(age);
    


    
//   }
//   return (
//     <>
//     <h1>HELLO </h1>
//     <button onClick={() => clickBtn(age)}>CLICK {age}</button>
//     </>
//   )
// }

// export default App






// API CALLING 

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data , setData] = useState(null);

//   useEffect(() => {
//   async  function apiCall(){

//   await  axios("https://jsonplaceholder.typicode.com/users/")
//     .then((res) => {
//       console.log(res.data);
//       setData(res.data);
      
//     }).catch((err) => {
//       console.log(err);
      
//     })
    

//     }

//     apiCall();
//   } , [])


//   return (
//     <>
//     <h1 className='api'>API CALLING</h1>
//     {data ? data.map((item) =>{
//       return <div key={item.id}>
//         <p>{item.name}</p>
//       </div>
//     }) : <h1>LODAING ...</h1> }
//     </>
//   )
// }

// export default App


// import React, { useRef, useState } from 'react'
// import Card from './components/card';

// const App = () => {

//   const [counter , setCounter] = useState(0);

//   useRef(() => {
//     console.log("Card Mounted");

//     return() => {
//       console.log("card unMounted");
//     }
    


//   } , [])


//   return (
//   <>
//   <h1 className='text-center m-5'>Hello Card! {counter}</h1>

//  <div >
//  <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}>Add {counter} </button>
//   <button className='btn btn-primary' onClick={() => setCounter(counter - 1)} >Less {counter}</button>

//   {counter < 10 ? <p>Admission nhi le skte</p> : <Card title="Abhi Admission le skte ho" description="Welcome to gym"/> }
//  </div>
//   </>
//   )
// }

// export default App



import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data , setData] = useState(null);

  useEffect(() => {

    async function apiCall(){
      await axios ("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
        
      }).catch((err) => {
        console.log(err);
        
      })
    }

    apiCall()

  } , [])
  return (
    <>
    <h1>Api Call</h1>
    {data ? data.map((item) => {
      return(
        <div key={item.id}>
          <h1>{item.name}</h1>
          {item.price < 10  <p>Affordable nhi hai</p> : <p>Affordable hai</p>}
        </div>
      )
    }) : <p>LOADING...</p>}
    </>
  )
}

export default App


