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
        <Tabs.Item active title="Income" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for managing exisiting income </h1> <br />
        <a href="/financials/operations/income/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
  
  
        <Tabs.Item active title="Expenditure" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for managing current expenditures</h1> <br />
        <a href="/financials/operations/expenditure/new/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
        <Tabs.Item active title="Commitee" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for managing an existing committee</h1> <br />
        <a href="/financials/operations/committee/new/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>

      </Tabs>
  
      </div>
 

    



    </>
  )
}
