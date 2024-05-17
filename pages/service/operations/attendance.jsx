import Head from 'next/head'
import React from 'react'



export default function CreateMembership() {
  return (
    <>
<Head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
</Head>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new attendance</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <input type="date" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
          
              <div class="sm:col-span-2">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day of the week</label>
                  <input type="date" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
              <div className='sm:col-span-2'>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select </option>
                    

                  </select>
              </div>
             
              <div  className='sm:col-span-2'>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Conductor</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select </option>
                       <option value="TV">John Onobote</option>
                     
                  </select>
                  <div class="flex">
    <div class="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">External</label>
    </div>
 
 
</div>

       
              </div>
              
              <div  className='sm:col-span-2'>

               
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preacher</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select </option>
                      <option value="TV">Adekunle Adams</option>
                      

                  </select>
                  <div class="flex">
    <div class="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">External</label>
    </div>
 
 
</div>

              </div>  
              <div class="sm:col-span-2">
               
           
           <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Conductor</label>
           <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
               <option selected="">Select </option>
               <option value="TV">Henry Olawale</option>
       

           </select>
           <div class="flex">
    <div class="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">External</label>
    </div>
 
 
</div>
       </div>
              
              <div>
           
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preacher</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select</option>
           

                  </select>
                  <div class="flex">
    <div class="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">External</label>
    </div>
 
 
</div>
              </div>
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current group</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>

           
              
    

         


        
          
           
          
          </div>
       
 
        
           
    
        
          <button style={{backgroundColor:"black"}} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg">
              Add
          </button>
      </form>
  </div>
</section>
    </>
  )
}
