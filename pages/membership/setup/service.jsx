import Head from 'next/head'
import React, { useState } from 'react'
import { Button, Modal } from "flowbite-react";



export default function AccountType() {
    const [isMember , setIsMember] = useState(false)
    const [isUserTable , setIsUserTable] = useState(false)
    const [isMem , setIsMem] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    
    const [openModal3, setOpenModal3] = useState(false);

    const inputChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setIsMember(true)
        } else {
            setIsMember(false)
        }
      }
      
       

  return (
    <>
<Head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
</Head>
<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Setup a new Service</Modal.Header>
        <Modal.Body>
          <div className="p-5">
          <form action="#" className=''>
            <div class="grid gap-2 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
           
                           
                    {/* {  <button style={{backgroundColor:"white", fontWeight:"bold", border:"1px solid black"}} type="submit" class="inline-flex font-bold items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-black rounded-lg">
                        Search
            </button>} */}
                </div>
                
                <div class="sm:col-span-2 ">

                <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Service: </label>
                         
                          <select id="category" class="inline bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-primary-500 focus:border-primary-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                              <option selected="">Select </option>
                              <option selected="">Employed </option>
                              <option selected="">Unemployed </option>
                                 <option selected="">Student </option>
                              
                          </select>

      

                    
                </div>
             
            
            
              
         
        
        
            </div>
            
            </form>

          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className='bg-blue-800 text-white' onClick={() => setOpenModal(false)}>
            Add
          </Button>

          <Button color="gray" onClick={() => setOpenModal(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>

    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
       
        <div class="bg-white dark:bg-gray-800   sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
               
                    <div class="flex items-center space-x-3 w-full md:w-auto">
            
                        <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                            </div>
                        </div>
                 
                        <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li class="flex items-center">
                                    <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                </li>
                                <li class="flex items-center">
                                    <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
<div className="mt-5">

</div>
            <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Service Name</th>
                       
                               
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Sunday</th>
                        
                        </tr>
                        
                   

                       
                    </tbody>
                </table>
            </div>
            <nav class="flex mt-20 flex-col md:flex-row md:items-center space-x-2 space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal(true)}>
            New
          </Button>
          
          <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal2(true)}>
            Edit
          </Button>
          <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal3(true)}>
            Delete
          </Button>
          <Button className='bg-gray-100 text-black text-xs' onClick={() => router.back()}>
            Exit
          </Button>
            </nav>
        </div>
    </div>
    <Modal show={openModal3} onClose={() => setOpenModal3(false)}>
        <Modal.Header>Delete user profile</Modal.Header>
        <Modal.Body>
          <div className="p-5">
        
<section class="bg-white p-5 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 px-4">
        <h4 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-2xl dark:text-white">You are about to delete this user profile, do you want to continue?</h4>
  
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Yes, i want to continue
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="/admin" class="py-3 px-5 sm:ms-4 text-sm font-medium text-blue-400 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Cancel
            </a>  
        </div>
    </div>
</section>

          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className='bg-red-800 text-white' onClick={() => setOpenModal3(false)}>
            Delete
          </Button>

          <Button color="gray" onClick={() => setOpenModal3(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
              
      <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Header>Edit service</Modal.Header>
        <Modal.Body>
          <div className="p-5">
          <form action="#" className='mt-5'>
            <div class="grid gap-2 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
            <div class="flex items-center h-5">   
        <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Member</label>  
          <input id="remember" style={{borderRadius:100}} type="radio" name='radio' value="member" onChange={memberChange2} class="w-4 pl-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
          <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Non Member</label>
          <input id="remember" style={{borderRadius:100}}  type="radio"  name='radio' value="non_member" onChange={nonMemberChange2}  class="w-4 h-4  pl-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
       </div> <br />
          
                </div>
                
             
                <div class="sm:col-span-2 ">

<label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Service: </label>
         
          <select id="category" class="inline bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-primary-500 focus:border-primary-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option selected="">Select </option>
              <option selected="">Employed </option>
              <option selected="">Unemployed </option>
                 <option selected="">Student </option>
              
          </select>



    
</div>

        
        
            </div>
            
            </form>

          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className='bg-blue-800 text-white' onClick={() => setOpenModal2(false)}>
            Update
          </Button>

          <Button color="gray" onClick={() => setOpenModal2(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  )
}
