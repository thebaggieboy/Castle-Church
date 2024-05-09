import "@/styles/globals.css";
import Layout from "../components/Layout"
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
       
    
    </Head>
    
  <Layout><Component {...pageProps} /></Layout>
  
    </>
  )

 
}
