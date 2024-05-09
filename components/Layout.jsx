import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from './Navbar'
 
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
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </Head>
      <NavBar/>  
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
   </button>
   
 
         {children}
     
      
       </>
    )
  }

  return (
    <>
   <Head>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
   <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
   </Head>
   <NavBar/>  
   <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-42 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <Link href="/admin" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </Link>
         </li> <hr />
         <li href='/admin'>
            <button type="button" class={`flex  p-1  ${path_ == "/admin" ? activeLink : 'text-white'}  items-center w-full  text-base transition duration-75 rounded-lg group " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
            <svg class={`w-[30px] h-[30px] ${path_ == "/admin" ? iconColor : 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd"/>
</svg>

               <span class="p-3 whitespace-nowrap">Admin</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="/admin" class="flex items-center w-full p-2 text-white ${activeLink} transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">Admin</a>
                  </li>
                  
                  <li>
                     <a href="/admin/setup" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">Setup</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">Backup</a>
                  </li>
            </ul>
         </li>
    <hr />
         <li>
            <Link href="/operations" class={`flex items-center p-2 ${path_ == "/operations" ? activeLink : 'text-white ' } rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group`}>
            <svg class={`w-[30px] h-[30px] ${path_ == "/operations" ? iconColor : 'text-white'} dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
</svg>

               <span class="flex-1 ms-3 whitespace-nowrap">Operations</span>
             
            </Link>
         </li>
      <hr />
       
      
  
        
        
        
       
         <li>
            <Link href="/reports" class={`flex items-center p-2 ${path_ == "/reports" ? activeLink : 'text-white ' } rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group`}>
            <svg class={`w-[30px] h-[30px] ${path_ == "/reports" ? iconColor : 'text-white'} dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clip-rule="evenodd"/>
</svg>


               <span class="flex-1 ms-3 whitespace-nowrap">Reports</span>
            </Link>
         </li> <hr />
         <li>
            <Link href="/import" class={`flex items-center p-2 ${path_ == "/import" ? activeLink : 'text-white ' } rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group`}>
            <svg class={`w-[30px] h-[30px] ${path_ == "/import" ? iconColor : 'text-white'} dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.41A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
</svg>

               <span class="flex-1 ms-3 whitespace-nowrap">Import</span>
            </Link>
         </li>
          <hr />
         <li>
            <Link href="#" class={`flex items-center p-2 ${path_ == "/logout" ? activeLink : 'text-white ' } rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group`}>
            <svg class={`w-[30px] h-[30px] ${path_ == "/logout" ? iconColor : 'text-white'} dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
</svg>

               <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>
      {children}
  
   
    </>
  )
}
