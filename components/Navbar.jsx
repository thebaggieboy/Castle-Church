import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { Tabs } from "flowbite-react";


import { Dropdown } from "flowbite-react";


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Admin', href: '/admin' },
  { name: 'Find a service', href: '/' },
  { name: 'User Guide', href: '/' },
  
 
]
console.log(navigation)



export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const path = router.pathname
  
  console.log("The current path for this route is ", path)
  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      
    <div className="isolate bg-blue-800 text-white">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      
      </div>
      <div className="px-4  lg:px-8">
        <nav className="flex items-center justify-between p-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-lg"><Link href={'/'}>Home</Link></span>
              
            </Link>

          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 sm:hidden" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">

<Menu as="div" className="relative inline-block text-left ml-1">

      
  
      <div>
        
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
          Setup
          <ChevronDownIcon className="-mr-1 h-5  text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-800 text-white font-light text-xs   ring-opacity-5 focus:outline-none"> 
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
             
                  <Dropdown  renderTrigger={() => <div className='text-center p-2' style={{cursor:'pointer' }}>User</div>}  className="mt-2 bg-blue-800 text-white" dismissOnClick={true} label="User" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                    <Dropdown.Item as={"a"} className='text-white hover:text-black'  href="/admin/user/">
                      User Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={"a"} className='text-white hover:text-black'  href="/admin/user/role/setup">
                      Roles
                    </Dropdown.Item>
                  </Dropdown> 
             
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                      <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Membership</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Membership" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                       <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/rank?membership=rank">
                         Rank
                       </Dropdown.Item>
                       <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/group_?membership=group">
                         Group
                       </Dropdown.Item>
                       <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/marital_status?membership=marital_status">
                         Marital Status
                       </Dropdown.Item>
                       <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/rank?occupation=occupation">
                         Occupation
                       </Dropdown.Item>
                     </Dropdown> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                  <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Service</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Service" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/church?membership=church">
                    Church
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/service?service=service">
                    Congregational Gathering
                  </Dropdown.Item>
               
                </Dropdown> 
              )}
            </Menu.Item>
        
            <Menu.Item>
              {({ active }) => (
                  <Dropdown renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Financials</div>} className=" ml-1 bg-blue-800" dismissOnClick={true} label="Financials" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto",  MozAppearance:'none' }}>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/fund_channel">
                    Fund Channel
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/banks">
                    Bank
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/budget">
                    Budget
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/loan_account">
                   Loan Account
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/account_type">
                    Account Type
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/expenditure">
                    Expenditure
                  </Dropdown.Item>
                </Dropdown> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                     <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Events</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Events" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                     <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/event_name?events=event_name">
                       Event Name
                     </Dropdown.Item>
                     <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/formation?events=formation">
                       Formation
                     </Dropdown.Item>
                     <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/committee?events=committee">
                      Committee
                     </Dropdown.Item>
             
                   </Dropdown> 
              )}
            </Menu.Item>
        
            <Menu.Item>
              {({ active }) => ( 
                  <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Departments</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Departments" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
                    Coordinator
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
                    Head of department
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
                    Units
                  </Dropdown.Item>

                </Dropdown> 
              )}
              
            </Menu.Item>
        

          </div>
        </Menu.Items>
      </Transition>

      
    </Menu>

    
    <Menu as="div" className="relative inline-block  text-left">

      
  
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
          Operations
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-800 text-white  font-light text-xs    ring-opacity-5 focus:outline-none"> 
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                  <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Membership</div>} className=" ml-1 bg-blue-800 bg-blue-800" dismissOnClick={true} label="Membership" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/personal?membership=personal">
                    Personal
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/birth?membership=birth">
                    Birth
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/death?membership=death">
                   Death
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/anointment?membership=anointment">
                    Anointment
                  </Dropdown.Item>
                  <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/group?membership=group">
                   Group
                  </Dropdown.Item>
          
                </Dropdown> 
              )}
            </Menu.Item>
         
            <Menu.Item>
              {({ active }) => (
                <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Service</div>}className=" ml-1 bg-blue-800" dismissOnClick={true} label="Service" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/service/operations/attendance?service=attendance">
                  Attendance
                </Dropdown.Item>

        
              </Dropdown> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
              <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Financials</div>} className=" ml-1 bg-blue-800" dismissOnClick={true} label="Financials" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
              <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/income?financials=income">
                Income
              </Dropdown.Item>
              <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/expenditure?financials=expenditure">
                Expenditure
              </Dropdown.Item>
              <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/committee?financials=committee">
               Committee
              </Dropdown.Item>
            
       
            </Dropdown> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Document Management</div>} className=" ml-1 bg-blue-800" dismissOnClick={true} label="Document Management" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/reports?document_management=reports">
                  Reports
                </Dropdown.Item>
                <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/service_announcements?document_management=service_announcements">
                  Service Announcements
                </Dropdown.Item>
                <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/meetings?document_management=meetings">
                 Meetings
                </Dropdown.Item>
                <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/sermon?document_management=sermon">
                  Sermon
                </Dropdown.Item>
              
              </Dropdown> 
              )}
            </Menu.Item>
        
          </div>
        </Menu.Items>
      </Transition>

      
    </Menu>
    <Menu as="div" className="relative inline-block text-left">

      
  
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
          Reports
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-800 text-white    ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/reports/individual/"
                  className={ active ? 'bg-gray-100  text-black text-xs' : 'text-gray-700','block px-4 py-2 text-xs' }
                >
                  Selected Report
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/reports/selected_reports/"
                  className={
                    active ? 'bg-gray-100  text-xs text-black' : 'text-gray-700 ',
                    'block px-4 py-2 text-xs'
               }
                >
                  Fixed Report
                </a>
              )}
            </Menu.Item>
         
        
          </div>
        </Menu.Items>
      </Transition>

      
    </Menu><Menu as="div" className="relative inline-block text-left">

      
  
<div>
  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
    Import
    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
  </Menu.Button>
</div>

<Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-800 text-white    ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/detail/"
            className={ active ? 'bg-gray-100  text-black text-xs' : 'text-gray-700 text-xs','block px-4 py-2 text-xs' }
          >
            Setup
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/operations/detail/"
            className={
              active ? 'bg-gray-100  text-black text-xs' : 'text-xs text-gray-700',
              'block px-4 py-2 text-xs'
         }
          >
            Operations
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/finance/detail/"
            className={
              active ? 'bg-gray-100  text-black text-xs' : 'text-xs text-gray-700',
              'block px-4 py-2 text-xs'
            }
          >
            Finance
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/attendance/"
            className={
              active ? 'bg-gray-100  text-black text-xs' : 'text-xs text-gray-700',
              'block px-4 py-2 text-xs'
            }
          >
            Attendance
          </a>
        )}
      </Menu.Item>  <Menu.Item>
        {({ active }) => (
          <a
            href="/import/templates/"
            className={
              active ? 'bg-gray-100  text-black text-xs' : 'text-xs text-gray-700',
              'block px-4 py-2 text-xs'
            }
          >
            Templates
          </a>
        )}
      </Menu.Item>
  
    </div>
  </Menu.Items>
</Transition>


</Menu>

<div>
  <a href="#" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white">
    File
    
  </a>
</div>


<div>
  <a href="#" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white">
    Help
    
  </a>
</div>

          </div>





          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/accounts/signup" className="text-sm font-semibold leading-6  text-white">
              Signup 
            </Link>
            <Link href="/accounts/login" className="ml-10 text-sm font-semibold leading-6  text-white">
              Login 
            </Link>
          </div>
        </nav>


        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-blue-600 text-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 font-bold">
                <span className="">Home</span>
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                <Menu as="div" className="relative inline-block text-left ml-1">

      
  
<div>
  
  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold  text-white ">
    Setup
    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
  </Menu.Button>
</div>

<Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-blue-800 text-white font-light text-xs   ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
       
            <Dropdown  renderTrigger={() => <div className='text-center p-2' style={{cursor:'pointer' }}>User</div>}  className="mt-2 bg-blue-800 text-white" dismissOnClick={true} label="User" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
              <Dropdown.Item as={"a"} className='text-white hover:text-black text-xs'  href="/admin/user/">
                User Profile
              </Dropdown.Item>
              <Dropdown.Item as={"a"} className='text-white hover:text-black text-xs'  href="/admin/user/role/setup">
                Roles
              </Dropdown.Item>
            </Dropdown> 
       
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
                <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Membership</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Membership" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
                 <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/rank?membership=rank">
                   Rank
                 </Dropdown.Item>
                 <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/group_?membership=group">
                   Group
                 </Dropdown.Item>
                 <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/marital_status?membership=marital_status">
                   Marital Status
                 </Dropdown.Item>
                 <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/rank?occupation=occupation">
                   Occupation
                 </Dropdown.Item>
               </Dropdown> 
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
            <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Service</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Service" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/church?membership=church">
              Church
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/service?service=service">
              Congregational Gathering
            </Dropdown.Item>
         
          </Dropdown> 
        )}
      </Menu.Item>
  
      <Menu.Item>
        {({ active }) => (
            <Dropdown renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Financials</div>} className=" ml-1 bg-blue-800" dismissOnClick={true} label="Financials" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto",  MozAppearance:'none' }}>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/fund_channel">
              Fund Channel
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/banks">
              Bank
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/budget">
              Budget
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/loan_account">
             Loan Account
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/account_type">
              Account Type
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/setup/expenditure">
              Expenditure
            </Dropdown.Item>
          </Dropdown> 
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
               <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Events</div>}  className=" ml-1 bg-blue-800" dismissOnClick={true} label="Events" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
               <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/event_name?events=event_name">
                 Event Name
               </Dropdown.Item>
               <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/formation?events=formation">
                 Formation
               </Dropdown.Item>
               <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/events/setup/committee?events=committee">
                Committee
               </Dropdown.Item>
       
             </Dropdown> 
        )}
      </Menu.Item>
  
      <Menu.Item>
        {({ active }) => ( 
            <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Departments</div>}  className=" ml-1 bg-blue" dismissOnClick={true} label="Departments" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
              Coordinator
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
              Head of department
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="#">
              Units
            </Dropdown.Item>

          </Dropdown> 
        )}
        
      </Menu.Item>
  

    </div>
  </Menu.Items>
</Transition>


</Menu>
<br />

<Menu as="div" className="relative inline-block  text-left">



<div>
  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold  text-white ">
    Operations
    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
  </Menu.Button>
</div>

<Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-blue-800 text-white  font-light   text-xs  ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
            <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Membership</div>} className=" ml-1 bg-blue-800 bg-blue-800" dismissOnClick={true} label="Membership" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/personal?membership=personal">
              Personal
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/birth?membership=birth">
              Birth
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/death?membership=death">
             Death
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/anointment?membership=anointment">
              Anointment
            </Dropdown.Item>
            <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/membership/setup/group?membership=group">
             Group
            </Dropdown.Item>
    
          </Dropdown> 
        )}
      </Menu.Item>
   
      <Menu.Item>
        {({ active }) => (
          <Dropdown   renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Service</div>}className=" ml-1 bg-blue-800" dismissOnClick={true} label="Service" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
          <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/service/operations/attendance?service=attendance">
            Attendance
          </Dropdown.Item>

  
        </Dropdown> 
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
        <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Financials</div>} className=" ml-1 bg-blue-800" dismissOnClick={true} label="Financials" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
        <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/income?financials=income">
          Income
        </Dropdown.Item>
        <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/expenditure?financials=expenditure">
          Expenditure
        </Dropdown.Item>
        <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/financials/operations/committee?financials=committee">
         Committee
        </Dropdown.Item>
      
 
      </Dropdown> 
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Dropdown  renderTrigger={() => <div className='text-center  p-2' style={{cursor:'pointer'}}>Document Management</div>} className=" ml-1 " dismissOnClick={true} label="Document Management" placement='right-start' style={{ marginLeft:10,textAlign:"center", color:"white", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
          <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/reports?document_management=reports">
            Reports
          </Dropdown.Item>
          <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/service_announcements?document_management=service_announcements">
            Service Announcements
          </Dropdown.Item>
          <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/meetings?document_management=meetings">
           Meetings
          </Dropdown.Item>
          <Dropdown.Item as={""} className='text-white hover:text-black text-xs'  href="/document_management/sermon?document_management=sermon">
            Sermon
          </Dropdown.Item>
        
        </Dropdown> 
        )}
      </Menu.Item>
  
    </div>
  </Menu.Items>
</Transition>


</Menu>

<br />


    <Menu as="div" className="relative inline-block text-left">

      
  
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
          Reports
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-blue-800  text-xs    ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/reports/individual/"
                  className={ active ? 'bg-gray-100  text-white' : 'text-gray-700','block px-4 py-2 text-xs font-light' }
                >
                  Selected Report
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/reports/selected_reports/"
                  className={
                    active ? 'bg-gray-100  text-white text-xs' : 'text-gray-700 text-xs',
                    'block px-4 py-2 text-xs font-light'
               }
                >
                  Fixed Report
                </a>
              )}
            </Menu.Item>
         
        
          </div>
        </Menu.Items>
      </Transition>

      
    </Menu>
    <br />
    <Menu as="div" className="relative inline-block text-left">

      
  
<div>
  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white ">
    Import
    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
  </Menu.Button>
</div>

<Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="absolute right-0 z-10 mt-2 w-34 origin-top-right text-white rounded-md bg-blue-800    ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/detail/"
            className={ active ? 'bg-gray-100  text-white text-xs' : 'text-gray-700','block px-4 py-2 text-xs' }
          >
            Setup
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/operations/detail/"
            className={
              active ? 'bg-gray-100  text-white  text-xs' : 'text-gray-700  text-xs',
              'block px-4 py-2 text-xs font-light'
         }
          >
            Operations
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/finance/detail/"
            className={
              active ? 'bg-gray-100  text-white  text-xs' : 'text-gray-700  text-xs',
              'block px-4 py-2 text-xs font-light'
            }
          >
            Finance
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="/import/attendance/"
            className={
              active ? 'bg-gray-100  text-white  text-xs' : 'text-gray-700  text-xs',
              'block px-4 py-2 text-xs font-light'
            }
          >
            Attendance
          </a>
        )}
      </Menu.Item>  <Menu.Item>
        {({ active }) => (
          <a
            href="/import/templates/"
            className={
              active ? 'bg-gray-100  text-white  text-xs' : 'text-gray-700  text-xs',
              'block px-4 py-2 text-xs font-light'
            }
          >
            Templates
          </a>
        )}
      </Menu.Item>
      
  
    </div>
  </Menu.Items>
</Transition>


</Menu>
<br />
<div className='flex'>
  <a href="#" className=" w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white">
    File
    
  </a>
</div>


<div>
  <a href="#" className=" w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold   text-white">
    Help
    
  </a>
</div>
                </div>
             
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      
    </div>
    </>
  )
}