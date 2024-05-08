import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function members() {
  return (
    <>
    
 



<div class="p-4 sm:ml-64" >
 

<section className='flex space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/admin/setup">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Setup</h5>
    </a>
    <p class="mb-3 font-normal  text-xs dark:text-gray-400">Create new setup for members, ranks, groups and others.</p> <br />
    <a href="/admin/setup" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Start Setup 
    
    </a>
</div>
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/admin/user/setup">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is for setting up new user logon and roles to be used to access certain pages on the app.</p> <br />
    <a href="/admin/user/setup" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
        Create User
    
    </a>
</div>

</section>
<section className='flex space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/backup/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backup</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Backup database (Create a .bak file ).</p> <br />
    <a href="/backup/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
       Backup Database
    
    </a>
</div>
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/events/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Security</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">This section is used to add a new Event to the database.</p> <br />
    <a href="/events/create/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup Security
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

</section>
</div>

    </>
  )
}
