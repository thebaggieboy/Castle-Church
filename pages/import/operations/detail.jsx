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
    
    <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Personal" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for setting up new ranks and adding them to the database.</h1> <br />
        <a href="/import/operations/personal" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
  
        <Tabs.Item active title="Birth" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This section is used to add new user roles into the database.</h1> <br />
        <a href="/import/operations/birth" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
  
        <Tabs.Item active title="Marriage" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This section is used to add a new user marital status into the database.</h1> <br />
        <a href="/import/operations/marriage/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
        <Tabs.Item active title="Death" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This section is used to add a new occupation into the database.</h1> <br />
        <a href="/import/operations/death" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
  

      </Tabs>


<div class="p-4 sm:ml-64" >
 
 

</div>




    </>
  )
}
