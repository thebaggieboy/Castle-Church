import React from 'react'

export default function 
() {
  return (
    <>
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new event</h2>
<form action="#">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div class="w-full">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
            <input type="text" name="Other Name" id="Other Name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
        </div>

     
      </div>

     
      <button style={{backgroundColor:"black"}} type="submit" class="inline-flex items-center  px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white  rounded-lg">
              Add 
            </button>      
    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-dark bg-primary rounded-lg">
        Clear
    </button>
</form>
</div>
    </>
  )
}
