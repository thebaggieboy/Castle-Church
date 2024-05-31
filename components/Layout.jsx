import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from './Navbar'
import Script from "next/script" 

export default function Layout({children}) {

  const router = useRouter()
  const path_ = router.pathname
  let activeLink = ""

   let  iconColor = ""
   if (path_ === "/admin") {
      activeLink = "bg-yellow-50 text-black font-extrabold"
      iconColor = "text-black"
   }else if(path_ === "/operations"){
      activeLink = "bg-yellow-50 text-black font-extrabold"
      iconColor = "text-black"
   }
   else if(path_ === "/reports"){
      activeLink = "bg-yellow-50 text-black font-extrabold"
      iconColor = "text-black"
   }else if(path_ === "/import"){
      activeLink = "bg-yellow-50 text-black font-extrabold"
      iconColor = "text-black"
   }else if(path_ === "/logout"){
      activeLink = "bg-yellow-50 text-black font-extrabold"
      iconColor = "text-black"
   }

console.log(activeLink)
  if (path_ == "/" || path_ == "/accounts/signup") {
    return (
      <>
      
      <NavBar/>  
     
   
 
         {children}
     
      
       </>
    )
  }

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      
   <Head>
   <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      
   <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
   <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
   </Head>
   <NavBar/>  
  
      {children}
  
   
    </>
  )
}
