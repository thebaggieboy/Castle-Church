import React, { useState } from 'react'

import { Button, Modal } from "flowbite-react";
export  function GroupNameForm() {
    return(
        <>
        <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-white">Group Name</label>
        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
        </>
    )

}
export default function UserRole() {
    const [isMember , setIsMember] = useState(false)
    const [isMember2 , setIsMember2] = useState(false)
    const [isMember3 , setIsMember3] = useState(false)
    const [isUserTable , setIsUserTable] = useState(false)
    const [isMem , setIsMem] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [users, setUsers] = useState([])
    const [openModal3, setOpenModal3] = useState(false);

    const inputChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setIsMember(true)
        } else {
            setIsMember(false)
        }
      }
      async function fetchUsers(){
        const res = await fetch('http://localhost:5000/users', {
            method: "GET",
            headers: {
    
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()
        console.log("Users: ", data)
        setUsers(data)
       
    
      
        if (res.status >= 200 & res.status <= 209) {
          
            console.log("fetch successful")
        }
    }
       
fetchUsers()
  return (
    <>
        <Modal show={openModal2} onClose={() => setOpenModal2(false)} >
        <Modal.Header>Setup a new user role</Modal.Header>
        <Modal.Body>
        <form action="#" className='mt-5'>
          <div class="grid gap-4  sm:gap-6">
        
          <div class="w-full">
          {isMember == true ? <GroupNameForm/> : ""}
          <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Username: </label>
         <input type="text" name="name" id="name" class="mr-1 inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
            
           <button type="submit" class="inline-flex items-center px-3 py-2 mt-2 sm:mt-6 text-xs font-xs text-center text-dark bg-gray-200 rounded-lg">
              Search
          </button>
              </div>

            
        

     
            </div> <br />
            
<div href="#" class="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">



<div class="overflow-x-auto">
<table class="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3 text-xs">MODULE</th>
                            <th scope="col" class="px-4 py-3 text-xs">READ</th>
                            <th scope="col" class="px-4 py-3 text-xs">WRITE</th>
                            <th scope="col" class="px-4 py-3 text-xs">DELETE</th>
                        
                        
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr class="">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Admin</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
               
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Membership</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Service</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Financial</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Report</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Backup</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
               
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Document Management</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>               <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs text-gray-900 dark:text-gray-300"></label> <br />
</td>
                         
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-xs text-gray-900 whitespace-nowrap dark:text-white">Import / Export</th>
                            <td class="px-4 py-3"> 
                                         <input id="default-checkbox" type="checkbox" value="" class="inline w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-xs ml-2 text-gray-900 dark:text-gray-300">YES</label> <br />
</td>          
                         
                        </tr>
               
               

                       
                    </tbody>
                </table>
</div>
  

</div>


        
      </form>
    
        </Modal.Body>



        <Modal.Footer>
        <Button className='bg-blue-800 text-white' onClick={() => setOpenModal2(false)}>
            Add
          </Button>

          <Button color="gray" onClick={() => setOpenModal2(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
       
   <div class="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4">
          
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
           
                     
                    </div>
                </div>
            </div>
      
<br /> <br />
<div className="mt-5">

</div>

         <div className="px-10">
         <div class="overflow-x-auto">
         
         <br />
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-4 py-3">Username</th>
                              <th scope="col" class="px-4 py-3">Name</th>
                            
                          </tr>
                      </thead>
                      <tbody>
  
                          
                      {users.map(user=>(
                     <tr class="border-b dark:border-gray-700">
                     <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.username}</th>
                     <td class="px-4 py-3">{user.non_member_name } </td>
                 
                 </tr>
                   ))}
                     
  
                         
                      </tbody>
                  </table>
              </div>
              <nav class="flex mt-20 flex-col md:flex-row md:items-center space-x-2 space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
              <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal2(true)}>
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
        <h4 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-2xl dark:text-white">You are about to delete this user role, do you want to continue?</h4>
  
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Yes, i want to continue
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
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
      


    </>
  )
}
