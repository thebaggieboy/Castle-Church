import Link from "next/link";



export default function Home() {
  return (
    <>
     

<section  class=" bg-cover bg-white ">
    <div class="px-4 mx-auto max-w-screen-xl text-center pt-20" style={{height: "100vh"}}> 
    <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Church Management Made Easy</span>  <br/>
        <p class="mb-4 font-bold mt-5 text-3xl">More Time for Ministry, Less Time for Admin.</p>
        <p>Reclaim your time for meaningful ministry. Automate admin tasks and spend more time connecting with your community.</p>
       <br/>
        <div class="flex flex-col space-y-4 mt-2 sm:flex-row sm:justify-center sm:space-y-0">
        
     
        </div>
        <div style={{ maxWidth:"fit-content", marginInline:"auto" }}>
        <img src="/images/building.png" className="" style={{height:180}}/>
        </div>
        <br/>
        <Link href="/admin/setup/" class="inline-flex justify-center items-center py-3 px-5  text-xs text-center bg-blue-900 text-white  rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Get Started
              
            </Link>
            
          
    </div>
   


  
   

</section>


    </>
  );
}
