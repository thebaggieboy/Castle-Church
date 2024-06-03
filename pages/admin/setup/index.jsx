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
   function showTab () {
      console.log("showing options")
      if (showOptions == false) {
         setShowOptions(true)
      }
     
   }
   function unShowTab () {
      if (showOptions == true) {
         console.log("showing options")
      setShowOptions(false)
      }
   }


   

useEffect(() => {
  console.log(showOptions)
})

  return (
    <>
    <section >
    <div className='relative text-center p-5' style={{zIndex:-1}} >
      
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="User" icon={HiUserCircle} >
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">User Profile</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup user profile & login information</p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Roles</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup user roles & app priviledges (Read, Write, Delete) </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   


        </div>
  
        </Tabs.Item>

        <Tabs.Item title="Membership" icon={MdDashboard}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Rank</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup ranks of different members.</p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Group</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup groups members belong to. </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   
   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Marital Status</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup Marital Status) </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Occupation</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup occupation of a member</p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>


        </div>
  
        </Tabs.Item>





        <Tabs.Item title="Service" icon={HiAdjustments}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Church</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup Church.</p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Congregational Gathering (CG)</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup Congregational Gathering </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   


        </div>
  
        </Tabs.Item>



        <Tabs.Item title="Financials" icon={HiClipboardList}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Fund Channel</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup Fund Channel </p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Bank</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup Bank information </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Loan Account</h5>

<p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup Loan Accounts.</p> <br />
<Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
</Link>
</div>
<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Account Type</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup type of account. </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>
<div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Expenditure</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup expenditure. </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>


        </div>

  
        </Tabs.Item>



        
        <Tabs.Item title="Events" icon={HiClipboardList}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Event Name</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup name of an event.</p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Formation</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup Formation </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   
   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Committee</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup committee </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>
   


        </div>
        </Tabs.Item>
        <Tabs.Item title="Department" icon={HiClipboardList}>
        <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-5">
         <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <h5 class="mb-2 text-md font-bold tracking-tight text-black dark:text-white">Coordinator</h5>
    
       <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup the coordinator of a particular department.</p> <br />
       <Link href="/admin/user/" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
Continue       
       </Link>
   </div>



   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
           <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Head of Department</h5>
    
       <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup the head of a particular department. </p> <br />
       <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Continue
       
       </Link>
   </div>

   <div style={{backgroundColor:"white", borderRadius:0, boxShadow:2}} class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       
       <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Units</h5>

   <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup Units </p> <br />
   <Link href="/admin/user/role" class="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
      Continue
   
   </Link>
</div>

   


        </div>
        </Tabs.Item>
      </Tabs>
  
      </div>
    </section>
 

    
<div class="p-4 sm:ml-64" >
 
<section className=' space-x-4 p-10'>
   

<br />





</section>




</div>



    </>
  )
}
