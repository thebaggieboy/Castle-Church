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
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Coordinator</h5>
    </a>
    <p class="mb-3 font-normal  text-xs dark:text-gray-400">Setup coordinators of a department.</p> <br />
    <a href="/admin/setup" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Start 
    
    </a>
</div>
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/backup/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Head of department</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">Setup the head of department </p> <br />
    <a href="/backup/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">
       Backup
    
    </a>
</div>
</section>
<section className=' space-x-4 p-10'>
   


<div style={{backgroundColor:"white"}} class="max-w-sm p-6 text-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/events/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Units</h5>
    </a>
    <p class="mb-3 font-normal text-black dark:text-gray-400">Setup units.</p> <br />
    <a href="/events/create/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800">
        Setup
      
    </a>
</div>

</section>
</div>

    </>
  )
}
