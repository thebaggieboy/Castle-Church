import Head from 'next/head'
import React, { useState } from 'react'


export  function NoneMemberForm() {
    return(
        <>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name (Non-Member)</label>
        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
        </>
    )

}

export default function CreateMembership() {


    const [isMember , setIsMember] = useState(false)
    const [isUserTable , setIsUserTable] = useState(false)
    const [isMem , setIsMem] = useState(null)

    const inputChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setIsMember(true)
        } else {
            setIsMember(false)
        }
      }
      
    function showNonMember(){
        console.log("Showing Non member form")
        setIsMember(true)
    }
    
    function showUsersTable(){
        console.log("Showing users table")
        setIsUserTable(true)
    }


  return (
    <>
<Head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
</Head>

    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Setup a new User</h2>
        
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
            </button> <br /> <hr />
        <form action="#" className='mt-5'>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" name="Other Name" id="Other Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                    <input id="default-checkbox" type="checkbox"  onChange={inputChange} value="" class="inline w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-checkbox" name="checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non Member</label> <br />
                    {/* {  <button style={{backgroundColor:"white", fontWeight:"bold", border:"1px solid black"}} type="submit" class="inline-flex font-bold items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-black rounded-lg">
                        Search
            </button>} */}
                </div>
                
                <div class="sm:col-span-2">

                {isMember == false ? 
                <div>
                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">Select </option>
                        
                    </select>
                    
                </div>: ""}
            
    <br />

                {isMember == true ? <NoneMemberForm/> : ""}
            
                <br/>
                {isMember == false ? <>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Membership No</label>
                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                </> : ""}

                    
                </div>
                {isMember == false ?    <div class="w-full">
                
                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
            </div> : ""}
            
            
                {isMember == false ? <div class="w-full">
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Other Names</label>
                    <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
                </div>: ""}
                
                
        
            </div>
            
    

            <button style={{backgroundColor:"black"}} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black rounded-lg">
                Add
            </button>
        
        
            
        </form>
    </div>
    </section>
    </>
  )
}
