import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function members() {
  return (
    <>
    
 



<div class="p-4 sm:ml-64" >
 

<section className='flex flex-wrap space-x-4 p-10'>
   

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/admin/setup">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Departments</h5>
    </a>
    <p class="mb-3 font-normal  text-xs dark:text-gray-400">Manage a department.</p> <br />
    <a href="/admin/setup" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Start 
    
    </a>
</div> 


<div style={{backgroundColor:"white"}} class="max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/backup/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unit Head</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Manage the head of unit within a department. </p> <br />
    <a href="/backup/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
       Backup
    
    </a>
</div>
</section>
 
</div>

    </>
  )
}
