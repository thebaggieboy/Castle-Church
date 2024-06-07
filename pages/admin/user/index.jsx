import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { Button, Modal } from "flowbite-react";
import { useRouter } from 'next/router';





const dummyUsers = [
    {
        id:1,
        name:"John Onobote",
        membershipNo:1212
    },
    {
        id:2,
        name:"David Okunoye",
        membershipNo:1213
    },
    {
        id:3,
        name:"Daniel Williams",
        membershipNo:1214
    },
]

export  function NoneMemberForm() {

    return(
        <>
        <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Full Name (Non Member): </label>
                    <input type="text" name="name" id="name" class="mr-1 inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                   
        </>
    )
 
 }
 export  function GroupNameForm() {
    return(
        <>
       <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Group Name: </label>
                    <input type="text" name="name" id="name" class="mr-1 inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
            
        </>
    )

}

export default function members() {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);

    const router = useRouter()
   const setup_type = {
      service:"",
      members:"",
      financials:"",
      events: ""

   }
  
   const [isMember , setIsMember] = useState(false)
   const [isNonMember , setIsNonMember] = useState(false)
   const [memberType, setMemberType] = useState('')

   const memberChange = (e) => {
       const { checked, value } = e.target;
       if (checked) {
           setIsMember(true)
           setMemberType(e.target.value)
           console.log("Value: ", e.target.value)
           console.log("Member Type: ", memberType)
       } else {
           setIsMember(false)
           setMemberType('')
       } 
     }
     
      
     const nonMemberChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setIsNonMember(true)
            setMemberType(e.target.value)
            console.log("Value: ", e.target.value)
            console.log("Non Member Type: ", memberType)
        } else {
            setIsNonMember(false)
            setMemberType('')
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
       
    
      
        if (res.status >= 200 & res.status <= 209) {
          
            console.log("fetch successful")
        }
    }
       
fetchUsers()


  return (
    <>
     <div className='px-10  text-xs' >
      
     <section class=" dark:bg-gray-900 sm:p-5 ">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
       
        <div class=" dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden" >
        
        <div class="flex items-start mb-5">
       
  
    
  </div>

<br /> <br />
<div className="mt-5">

</div>

            <div class="overflow-x-auto">
            <div class="flex items-center h-5 mt-10 ml-5">   
        <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Member</label>  
          <input id="remember" style={{borderRadius:100}} type="radio" name='radio' value="member" onChange={memberChange} class="w-4 pl-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
          <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Non Member</label>
          <input id="remember" style={{borderRadius:100}}  type="radio"  name='radio' value="non_member" onChange={nonMemberChange}  class="w-4 h-4  pl-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
       </div>  <br />
       {memberType == "member" ?    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Username</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                            <th scope="col" class="px-4 py-3">Membership No</th>
                    
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">jonobote@gmail.com</th>
                            <td class="px-4 py-3">John Onobote</td>
                            <td class="px-4 py-3">111</td>
                         
                        </tr>
               
                   

                       
                    </tbody>
                </table>
  : ""}
             
             {memberType == "non_member" ?    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Username</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">enimofeodujirin@gmail.com</th>
                            <td class="px-4 py-3">Enimofe Odujirin</td>
                          
                        </tr>
               
                   

                       
                    </tbody>
                </table>
  : ""}
        

            </div> <br />
            <nav  class="flex mt-20 flex-col md:flex-row md:items-center space-x-2 space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal(true)}>
            New
          </Button>
          
          <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal(true)}>
            Edit
          </Button>
          <Button className='bg-gray-600 text-white text-xs' onClick={() => setOpenModal(true)}>
            Delete
          </Button>
          <Button className='bg-gray-100 text-black text-xs' onClick={() => router.back()}>
            Exit
          </Button>
            </nav>


        <div className="flex flex-col">
       
        </div>
        </div>
    </div>
    </section>
    
        <section class="bg-white dark:bg-gray-900">
    <div class="py-4 px-4 mx-auto max-w-2xl lg:py-4">

       
    

        
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Setup a new user profile</Modal.Header>
        <Modal.Body>
          <div className="p-5">
          <form action="#" className='mt-5'>
            <div class="grid gap-2 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
            <div class="flex items-center h-5">   
        <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Member</label>  
          <input id="remember" style={{borderRadius:100}} type="radio" name='radio' value="member" onChange={memberChange} class="w-4 pl-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
          <label for="remember" class="ms-2 mr-2 text-xs font-medium text-gray-900 dark:text-gray-300">Non Member</label>
          <input id="remember" style={{borderRadius:100}}  type="radio"  name='radio' value="non_member" onChange={nonMemberChange}  class="w-4 h-4  pl-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
       </div> <br />
          
                </div>
                
                <div class={`sm:col-span-2 ${memberType == 'member' ? 'block' :  'hidden'}`}>
                <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Username: </label>
                    <input type="email" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                   
                {memberType == 'member' ? 
                <div>
                    <br />

                <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Name: </label>
                   
                <input type="text" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                    
                </div>: ""}
 
                <br />

                {memberType == 'member' ? <>
                    <div className=''>
                    <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Membership No: </label>
                    <input type="text" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                    </div>
                </> : ""}

                {memberType == 'non_member' ? <>
                    <div className=''>
                    <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Name: </label>
                    <input type="text" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                    </div>
                </> : ""}
                </div>
             
            
                <div class={`sm:col-span-2 ${memberType == 'non_member' ? 'block' :  'hidden'}`}>
                <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Username: </label>
                    <input type="email" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                   
                {memberType == 'non_member' ? 
                <div>
                    <br />

                <label for="name" class=" mb-2 inline text-xs font-medium text-gray-900 dark:text-white">Name: </label>
                   
                <input type="text" name="name" id="name" class=" inline bg-gray-50 border border-gray-300 text-gray-900 text-xs h-7 focus:ring-primary-600 focus:border-primary-600 block l dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                    
                </div>: ""}
 
                <br />

          
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
        
            
      
    </div>
    </section>
  
      </div>
  



    </>
  )
}
