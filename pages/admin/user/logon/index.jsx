import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'



const options = {
   new:"",
   edit:"",
   delete:""
}
export  function NoneMemberForm() {
   return(
       <>
       <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name (Non-Member)</label>
       <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required=""/>
       </>
   )

}


export default function members() {
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


  return (
    <>
   
<div class="p-4 sm:ml-64" >
 

<section className='flex flex-wrap space-x-4 p-10'>
   
<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/service/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add a new Service to the database.</p> <br />
   
</div>
<br />

<div style={{backgroundColor:"white"}} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/service/create/">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logon</h5>
    </a>
    <p class="mb-3 font-normal text-xs text-black dark:text-gray-400">This section is used to add a new Logon to the database.</p> <br />


</div>


</section>
</div>

    </>
  )
}
