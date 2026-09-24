import { Suspense, } from 'react'
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Copyright from './components/Copyright';
import SelectionSection from './components/SelectionSection';


function App() {

  return (
    <>
    <Nav/>
    <Banner/>
    <Suspense fallback={<span className='loading loading-dots loading-dots-xl'></span>}>
      <SelectionSection></SelectionSection>
    </Suspense>
    <Footer/>
    <Copyright/>
    
    </>
  )
}

export default App
