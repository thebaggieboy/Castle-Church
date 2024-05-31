import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";


export  function NoneMemberForm() {
   return(
       <>
       <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name (Non-Member)</label>
       <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
       </>
   )

}
export  function GroupNameForm() {
   return(
       <>
       <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-white">Group Name</label>
       <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
       </>
   )

}
export default function members() {
  
   const [isMember , setIsMember] = useState(false)
   const inputChange = (e) => {
      const { checked, value } = e.target;
      if (checked) {
          setIsMember(true)
      } else {
          setIsMember(false)
      }
    }

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
  <h1 class="mb-3 font-normal text-black  dark:text-gray-400">This section is used to add a new Member to the database.</h1> <br />
    <a href='/membership/detail/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup 
      
    </a> <br />
  </div>
      </Tabs.Item>
      <Tabs.Item title="Service" icon={HiAdjustments}>
       <div className="p-10 text-center">
       <h1 class="mb-3 font-normal  text-black dark:text-gray-400">This section is used to add a new Service to the database.</h1> <br />
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
      <h1 class="mb-3 font-normal  text-black dark:text-gray-400">This section is used to add new Department to the database.</h1> <br />
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
