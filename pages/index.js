
export default function Home() {
  return (
    <>
     

<section  class=" bg-cover bg-[url('https://images.pexels.com/photos/133699/pexels-photo-133699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] ">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">More Time for Ministry, Less Time for Admin.</h1>
       <br/>
        <div class="flex flex-col space-y-4 mt-10 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/accounts/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Find a service
              
            </a>
            <a href="/accounts/signup" class="ml-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Admin login
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          
          
        </div>
    </div>


  
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Church Management Made Easy.</h1>
            <p class="max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">Simplify Church Operations. Strengthen Your Community.</p>
           
        </div>
                     
    </div>

</section>


    </>
  );
}
