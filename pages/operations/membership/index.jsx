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
        <div className='p-5' >
      
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Membership" icon={HiUserCircle}>
  
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Personal</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Manage members personal information. Add, Edit & Delete members in the database </p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Birth</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Birth . </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>

   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Death</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Death </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Anointment</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Anointment </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Group</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Group </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

        </div>

        </Tabs.Item>

        <Tabs.Item title="Service" icon={MdDashboard}>
            
  
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Attendance</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Attendance </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>
      
        </div>
 
   </Tabs.Item>
        <Tabs.Item title="Financials" icon={HiAdjustments}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Income</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Income </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div> 
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Expenditure</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage member expenses. </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div> 
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Committee</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Committee </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>
       </div>

        </Tabs.Item>
        <Tabs.Item title="Document Management" icon={HiAdjustments}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Reports</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Reports </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div> 
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Service Announcements</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Service Announcements. </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div> 
        <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Meetings</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Meetings </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Sermon</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage Meetings </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

       </div>

        </Tabs.Item>
    
      </Tabs>
  
      </div>
  



    </>
  )
}
