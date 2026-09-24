import { Suspense, useState, useEffect} from 'react'
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Copyright from './components/Copyright';
import SelectionSection from './components/SelectionSection';
import type { Technology } from './components/Types/Technology';


function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const res = await fetch("/data.json");
      console.log("well doce");
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);

      }

      const data: Technology[] = await res.json();
      setTechnologies(data);
    };

    fetchTechnologies();
  }, []);
  
  return (
    <>
    <Nav/>
    <Banner/>
    {/* <Suspense fallback={<span className='loading loading-dots loading-dots-xl'></span>}>
      <SelectionSection 
      technologies={technologies}
      />
    </Suspense> */}
    <Footer/>
    <Copyright/>
    
    </>
  )
}

export default App
