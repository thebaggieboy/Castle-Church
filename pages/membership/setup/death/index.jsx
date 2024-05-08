import React from 'react'

export default function 
() {
  return (
    <>
         <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <p>Membership birth</p>
            <form action="">
            <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Membership no</label>
                  <input type="number" name="Other Name" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
              <div class="w-full py-4">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                  <input type="number" name="Other Name" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
             

             
              <div class="w-full py-4">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of death</label>
                  <input type="number" disabled name="Other Name" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
              <div class="w-full py-4">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                  <input type="number" disabled name="Other Name" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>

              <div class="w-full py-4">
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Burial date</label>
                  <input type="date" name="date" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
                </form>
         </div>
    </>
  )
}
