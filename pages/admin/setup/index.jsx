import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";



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
    <div className='p-5 text-center' >
      
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="User" icon={HiUserCircle}>
      <div className='p-10 text-center'>
      <h1>This tab is for setup of user credentials, permissions and admin roles.</h1> <br />
      <a href="/admin/user/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
        Setup
    
    </a>
      </div>
      </Tabs.Item>
      <Tabs.Item title="Membership" icon={MdDashboard}>
  <div className="p-10 text-center">
  <p class="mb-3 font-normal text-black text-xs dark:text-gray-400">This section is used to add a new Member to the database.</p> <br />
    <h1 href='/membership/detail/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </h1> <br />
  </div>
      </Tabs.Item>
      <Tabs.Item title="Service" icon={HiAdjustments}>
       <div className="p-10 text-center">
       <h1 class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add a new Service to the database.</h1> <br />
    <a href='/service/detail'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a> 
       </div>
      </Tabs.Item>
      <Tabs.Item title="Financials" icon={HiClipboardList}>
     <div className="p-10 text-center">
     <h1 class="mb-3 font-normal text-black dark:text-gray-400">This section is used to add a new Financials to the database.</h1> <br />
    <a href="/financials/detail" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a>
       </div>
      </Tabs.Item>
      <Tabs.Item title="Events" icon={HiClipboardList}>
      <div className="p-10 text-center">
      <h1 class="mb-3 font-normal text-black dark:text-gray-400">This section is used to add a new Event to the database.</h1> <br />
    <a href="/events/detail" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a>
         </div>
      </Tabs.Item>
      <Tabs.Item title="Department" icon={HiClipboardList}>
      <div className="p-10 text-center">
      <h1 class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add new Department to the database.</h1> <br />
    <a href="/departments/"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup
      
    </a>
       </div>
      </Tabs.Item>
    </Tabs>

    </div>

    
<div class="p-4 sm:ml-64" >
 
<section className=' space-x-4 p-10'>
   

<br />





</section>




</div>



    </>
  )
}
