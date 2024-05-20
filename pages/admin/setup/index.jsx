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
 
<section className=' space-x-4 p-10'>
   
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/admin/user/setup">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup user permissions and admin roles.</p> <br />
    <a href="/admin/user/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
        Setup
    
    </a>
</div>

</section>

<section className='flex flex-wrap space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/membership/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Membership</h5>
    </a>
    <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">This section is used to add a new Member to the database.</p> <br />
    <a href='/membership/detail/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a> <br />
  <div className="p-2 mt-2">
  {showOptions !== false ?  <a href='/membership/create/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showOptions !== false ?  <a href= "/membership/create/" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showOptions !== false ?  <a href= "/membership/create/" class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </a> : ""}
  </div>
</div> <br />
<div style={{backgroundColor:"white"}} class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/service/detail/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Service</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add a new Service to the database.</p> <br />
    <a href='/service/detail'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a> <br />
   
</div>

</section>
<section className='flex flex-wrap space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/financials/detail/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financials</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add new Financials to the database.</p> <br />
    <a href="/financials/detail"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup
      
    </a> <br />
    <div className="p-2 mt-2">
  {showFinanceOptions !== false ?  <a href="/financials/create" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showFinanceOptions !== false ?  <a href="/financials/create" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white  bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showFinanceOptions !== false ?  <button onClick={showFinanceOptions == false ? showFinance: unShowFinance} class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </button> : ""}
  </div>
</div> <br />
<div style={{backgroundColor:"white"}} class="max-w-sm p-4 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/events/detail/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Events</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">This section is used to add a new Event to the database.</p> <br />
    <a href="/events/detail" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a> <br />
    <div className="p-2 mt-2">
  {showEventsOptions !== false ?  <a href='/events/create/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showEventsOptions !== false ?  <a href='/events/create/' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showEventsOptions !== false ?  <a href='/events/create/' class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </a> : ""}
  </div>
</div>

</section>

<section className='flex flex-wrap space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/financials/detail/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Department</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add new Department to the database.</p> <br />
    <a href="/departments/"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup
      
    </a> <br />
    <div className="p-2 mt-2">
  {showFinanceOptions !== false ?  <a href="/financials/create" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showFinanceOptions !== false ?  <a href="/financials/create" class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white  bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showFinanceOptions !== false ?  <button onClick={showFinanceOptions == false ? showFinance: unShowFinance} class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </button> : ""}
  </div>
</div>

</section>

</div>



    </>
  )
}
