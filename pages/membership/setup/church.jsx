import Head from 'next/head'
import React from 'react'



export default function AccountType() {
  return (
    <>
<Head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
</Head>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Setup Church </h2>
      <button style={{backgroundColor:"gray"}} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-xs font-medium text-center text-white bg-black rounded-lg">
              View
          </button>
    
          <button style={{backgroundColor:"gray"}} type="submit" class="inline-flex items-center  ml-2 px-5 py-2.5 mt-4 sm:mt-6 text-xs font-medium text-center text-white bg-black rounded-lg">
              New
          </button>
            
          <button style={{backgroundColor:"gray"}} type="submit" class="inline-flex ml-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-xs font-medium text-center text-white bg-black rounded-lg">
              Edit 
          </button>  
          <button style={{backgroundColor:"red"}} type="submit" class="inline-flex ml-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-xs font-medium text-center text-white bg-black rounded-lg">
              Delete
          </button>
      
      <form action="#" className='mt-5'>
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Church </label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
        
             
     
            </div> <br />
    
            <button style={{backgroundColor:"black"}} type="submit" class="inline-flex items-center  px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white  rounded-lg">
              Add 
          </button>
       
      </form>
  </div>
</section>
    </>
  )
}
