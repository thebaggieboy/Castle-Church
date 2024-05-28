
export default function Home() {
  return (
    <>
     

<section  class=" bg-cover bg-white ">
    <div class="px-4 mx-auto max-w-screen-xl text-center pt-20" style={{height: "100vh"}}> 
    <span class="text-xs bg-blue-800 rounded-full text-white px-4 py-1.5 mr-3">Church Management Made Easy</span>  <br/>
        <p class="mb-4 font-bold mt-5 text-3xl">More Time for Ministry, Less Time for Admin.</p>
        <p>Reclaim your time for meaningful ministry. Automate admin tasks and spend more time connecting with your community.</p>
       <br/>
        <div class="flex flex-col space-y-4 mt-2 sm:flex-row sm:justify-center sm:space-y-0">
            <a  href="/accounts/signup" class="inline-flex justify-center items-center py-3 px-5  text-xs text-center bg-blue-900 text-white  rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Get Started
              
            </a>
            
          
     
        </div>
        <div style={{ maxWidth:"fit-content", marginInline:"auto" }}>
        <img src="/images/building.png" className="mt-5" style={{height:160}}/>
        </div>
    </div>
   


  
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Church Management Made Easy.</h1>
            <p class="max-w-2xl mb-6 font-bold text-black lg:mb-8 md:text-lg lg:text-xl dark:text-white">Simplify Church Operations. Strengthen Your Community.</p>
           
        </div>
                     
    </div>

</section>


    </>
  );
}
