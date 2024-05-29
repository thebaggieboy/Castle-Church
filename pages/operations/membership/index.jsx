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
        <div className='p-5 text-center' >
      
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Personal" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for managing  user personal information.</h1> <br />
        <a href="/membership/setup/personal/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Setup
      
      </a>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Births" icon={MdDashboard}>
    <div className="p-10 text-center">
    <h1 class="mb-3 font-normal text-black  dark:text-gray-400">This section is used to manage births .</h1> <br />
      <a href='/membership/setup/births' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </a> <br />
    </div>
        </Tabs.Item>
        <Tabs.Item title="Death" icon={HiAdjustments}>
         <div className="p-10 text-center">
         <h1 class="mb-3 font-normal  text-black dark:text-gray-400">This section is used to manage an existing Service in the database.</h1> <br />
      <a href='/membership/setup/death'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </a> 
         </div>
        </Tabs.Item>
        <Tabs.Item title="Anointment" icon={HiClipboardList}>
       <div className="p-10 text-center">
       <h1 class="mb-3 font-normal text-black dark:text-gray-400">This section is used to manage exisiting Financials in the database.</h1> <br />
      <a href="/membership/setup/anointment" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </a>
         </div>
        </Tabs.Item>
        <Tabs.Item title="Group" icon={HiClipboardList}>
        <div className="p-10 text-center">
        <h1 class="mb-3 font-normal text-black dark:text-gray-400">This section is used to manage an existing Group in the database.</h1> <br />
      <a href="/membership/setup/group" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </a>
           </div>
        </Tabs.Item>
    
      </Tabs>
  
      </div>
  



    </>
  )
}
