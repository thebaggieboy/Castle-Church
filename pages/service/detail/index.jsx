import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";



const options = {
   new:"",
   edit:"",
   delete:""
}



export default function members() {
  
   const setup_type = {
      service:"",
      members:"",
      financials:"",
      events: ""

   }
   const [showOptions, setShowOptions] = useState(false)
   const [showServiceOptions, setShowServiceOptions] = useState(false)
   const [showFinanceOptions, setShowFinanceOptions] = useState(false)
   const [showEventsOptions, setShowEventsOptions] = useState(false)
   function show () {
      console.log("showing options")
      if (showOptions == false) {
         setShowOptions(true)
      }
     
   }
   function unShow () {
      if (showOptions == true) {
         console.log("showing options")
      setShowOptions(false)
      }
   }

   function showService () {
      console.log("showing options")
      if (showServiceOptions == false) {
         setShowServiceOptions(true)
      }
     
   }
   function unShowService () {
      if (showServiceOptions == true) {
         console.log("showing options")
      setShowServiceOptions(false)
      }
   }
   
   function showFinance () {
      console.log("showing options")
      if (showFinanceOptions == false) {
         setShowFinanceOptions(true)
      }
     
   }
   function unShowFinance () {
      if (showFinanceOptions == true) {
         console.log("showing options")
      setShowFinanceOptions(false)
      }
   }

   function showEvents () {
      console.log("showing options")
      if (showEventsOptions == false) {
         setShowEventsOptions(true)
      }
     
   }
   function unShowEvents () {
      if (showEventsOptions == true) {
         console.log("showing options")
      setShowEventsOptions(false)
      }
   }
useEffect(() => {
  console.log(showOptions)
})

  return (
    <>
    
    <div className='' >
      
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Church" icon={HiUserCircle}>
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
        </Tabs.Item>
     
        <Tabs.Item active title="Congregational Gathering (CG) " icon={HiUserCircle}>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Setup a new Congregational Gathering </h2>
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
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Service Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
              </div>
        
             
     
            </div> <br />
    
            <button style={{backgroundColor:"black"}} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black rounded-lg">
              Add 
          </button>
      </form>
  </div>
</section>
        </Tabs.Item>
     
   
      </Tabs>
  
      </div>
  
      
 





    </>
  )
}
