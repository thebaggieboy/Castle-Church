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
 
 
<section className='flex flex-wrap space-x-4 p-10'>
   
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/events/detail/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rank</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">This section is used to import a new Rank to the database.</p> <br />
    <a href="/import/setup/rank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Import
      
    </a> <br />
    <div className="p-2 mt-2">
  {showEventsOptions !== false ?  <a href='/import/setup/rank/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showEventsOptions !== false ?  <a href='/import/setup/rank/' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showEventsOptions !== false ?  <a href='/import/setup/rank/' class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </a> : ""}
  </div>
</div>
<br/>

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/import/setup/group/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Group</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">This section is used to import a new Group to the database.</p> <br />
    <a href="/import/setup/group" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Import
      
    </a> <br />
    <div className="p-2 mt-2">
  {showEventsOptions !== false ?  <a href='/import/import/setup/group/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showEventsOptions !== false ?  <a href='/import/setup/group/' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showEventsOptions !== false ?  <a href='/import/setup/group/' class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </a> : ""}
  </div>
</div>

<br />

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/import/setup/service/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Service</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">This section is used to import a new Service to the database.</p> <br />
    <a href="/import/setup/service" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Import
      
    </a> <br />
    <div className="p-2 mt-2">
  {showEventsOptions !== false ?  <a href='/import/setup/service/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       New
   
    </a> : ""}
    {showEventsOptions !== false ?  <a href='/import/setup/service/' class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Edit
   
    </a> : ""} <br />
    {showEventsOptions !== false ?  <a href='/import/setup/service/' class="inline-flex items-center px-3 py-2  mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
       Delete
   
    </a> : ""}
  </div>
</div>

 
 

</section>
</div>



    </>
  )
}
