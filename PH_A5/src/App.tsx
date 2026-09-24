import { Suspense, useState } from 'react'
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Copyright from './components/Copyright';
import SelectionSection from './components/SelectionSection';
import type { Technology } from "./components/Types/Technology";


const fetchTechnology = async(): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const [technologyPromise] = useState(() => fetchTechnology()); 

  return (
    <>
    <Nav/>
    <Banner/>
    <Suspense fallback={<span className='loading loading-dots loading-dots-xl'></span>}>
      <SelectionSection technologyPromise={technologyPromise}></SelectionSection>
    </Suspense>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App
