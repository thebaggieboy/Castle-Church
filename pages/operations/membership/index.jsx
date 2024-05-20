import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'



const options = {
   new:"",
   edit:"",
   delete:""
}



export default function members() {
  
   const setup_type = {
      service:"",
      members:"",
      financials:"",
      events: ""

   }
   const [showBankOptions, setShowBankOptions] = useState(false)
   const [showBudgetOptions, setShowBudgetOptions] = useState(false)
   const [showOptions, setShowOptions] = useState(false)
   const [showServiceOptions, setShowServiceOptions] = useState(false)
   const [showFinanceOptions, setShowFinanceOptions] = useState(false)
   const [showEventsOptions, setShowEventsOptions] = useState(false)
   function show () {
      console.log("showing options")
      if (showOptions == false) {
         setShowOptions(true)
      }
     
   }
   function unShow () {
      if (showOptions == true) {
         console.log("showing options")
      setShowOptions(false)
      }
   }
   function showBank () {
      console.log("showing options")
      if (showBankOptions == false) {
         setShowBankOptions(true)
      }
     
   }


   function unShowBank () {
      if (showBankOptions == true) {
         console.log("showing options")
      setShowBankOptions(false)
      }
   }

   function showBudget () {
      console.log("showing options")
      if (showBudgetOptions == false) {
         setShowBudgetOptions(true)
      }
     
   }


   function unShowBudget () {
      if (showBudgetOptions == true) {
         console.log("showing options")
      setShowBudgetOptions(false)
      }
   }

   function showService () {
      console.log("showing options")
      if (showServiceOptions == false) {
         setShowServiceOptions(true)
      }
     
   }
   function unShowService () {
      if (showServiceOptions == true) {
         console.log("showing options")
      setShowServiceOptions(false)
      }
   }
   
   function showFinance () {
      console.log("showing options")
      if (showFinanceOptions == false) {
         setShowFinanceOptions(true)
      }
     
   }
   function unShowFinance () {
      if (showFinanceOptions == true) {
         console.log("showing options")
      setShowFinanceOptions(false)
      }
   }

   function showEvents () {
      console.log("showing options")
      if (showEventsOptions == false) {
         setShowEventsOptions(true)
      }
     
   }
   function unShowEvents () {
      if (showEventsOptions == true) {
         console.log("showing options")
      setShowEventsOptions(false)
      }
   }
useEffect(() => {
  console.log(showOptions)
})

  return (
    <>
    
  

<div class="p-4 sm:ml-64" >
 

<section className='flex flex-wrap space-x-2 space-y-4 p-5'>
   
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/service/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage personal information.</p> <br />
    <button onClick={showServiceOptions == false ? showService : unShowService}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add 
      
    </button> <br />
    <div className="p-2 mt-2">
  {showServiceOptions !== false ?  <a href='/membership/setup/personal/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showServiceOptions !== false ?  <a href='/membership/setup/personal/' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""} <br />

    
  </div>
</div>
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/membership/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Births</h5>
    </a>
    <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">Manage Birth information.</p> <br />
    <button onClick={showOptions == false ? show : unShow} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add 
      
    </button> <br />
  <div className="p-2 mt-2">
  {showOptions !== false ?  <a href='/membership/setup/birth' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showOptions !== false ?  <a href= "/membership/setup/birth" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""} 
    
  </div>
</div>
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/service/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marriages</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage marriage information.</p> <br />
    <button onClick={showEventsOptions == false ? showEvents : unShowEvents}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add 
      
    </button> <br />
    <div className="p-2 mt-2">
  {showEventsOptions !== false ?  <a href='/membership/setup/marriage' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showEventsOptions !== false ?  <a href='/membership/setup/marriage' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""} 
  </div>
</div> <br />

</section>

<section className='flex flex-wrap space-x-4 space-y-4 p-5'>
   
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/membership/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Deaths</h5>
    </a>
    <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">Manage Death information .</p> <br />
    <button onClick={showBudgetOptions == false ? showBudget : unShowBudget} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add 
      
    </button> <br />
  <div className="p-2 mt-2">
  {showBudgetOptions !== false ?  <a href='/membership/setup/death' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showBudgetOptions !== false ?  <a href= "/membership/setup/death" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""}
  </div>
</div><div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/membership/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Anointment</h5>
    </a>
    <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">Manage Anointment information</p> <br />
    <button onClick={showBankOptions == false ? showBank : unShowBank} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add
      
    </button> <br />
  <div className="p-2 mt-2">
  {showBankOptions !== false ?  <a href='/membership/setup/anointment' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showBankOptions !== false ?  <a href= "/membership/setup/anointment" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""} 
  </div>
</div><div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/membership/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Group</h5>
    </a>
    <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">Manage Group information.</p> <br />
    <button onClick={showFinanceOptions == false ? showFinance : unShowFinance} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Add 
      
    </button> <br />
  <div className="p-2 mt-2">
  {showFinanceOptions !== false ?  <a href='/membership/setup/group' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showFinanceOptions !== false ?  <a href= "/membership/setup/group" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Update
   
    </a> : ""} <br />
  
  </div>
</div>

</section>
</div>

    </>
  )
}
