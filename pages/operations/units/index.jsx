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
    
  
        <Tabs.Item active title="Department" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>Manage a department</h1> <br />
        <a href="/financials/operations/expenditure/new/" class="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
         Continue
      
      </a>
        </div>
        </Tabs.Item>
        <Tabs.Item active title="Unit Head" icon={HiUserCircle}>
        <div className='p-10 text-center'>
        <h1>This tab is for managing existing departments</h1> <br />
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
