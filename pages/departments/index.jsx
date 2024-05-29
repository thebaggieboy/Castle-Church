import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function members() {
  return (
    <>
     <div className='p-5 text-center' >
      
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Coordinator" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>Setup coordinators of a department..</h1> <br />
        <a href="/admin/user/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
          Setup
      
      </a>
        </div>
        </Tabs.Item>
        <Tabs.Item title="Head of department" icon={MdDashboard}>
    <div className="p-10 text-center">
    <p class="mb-3 font-normal text-black  dark:text-gray-400">This section is used to add a new Member.</p> <br />
      <h1 href='/membership/detail/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </h1> <br />
    </div>
        </Tabs.Item>
        <Tabs.Item title="Units" icon={HiAdjustments}>
         <div className="p-10 text-center">
         <h1 class="mb-3 font-normal  text-black dark:text-gray-400">This section is used to setup a new Unit.</h1> <br />
      <a href='/service/detail'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
          Setup 
        
      </a> 
         </div>
        </Tabs.Item>
      
   
      </Tabs>
  
      </div>
  
      
 


    </>
  )
}
