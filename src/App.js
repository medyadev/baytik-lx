import './components/burger/style.scss';
import Burger from './components/burger/Burger';
import Header from "./components/Header/Header";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Objects from './components/objects/Objects';
import ComponentVideo from './components/ComponentVideo';
import Administration from "./components/Administration/administration";
import Figo from "./components/figo/figo";
import Cotege from "./components/cotege/cotege";
import Company from "./components/company/company";



function App() {
    return (
        <div className='flex'>
            <div className='w-[5%]'>
                <Burger />
            </div>
            <div className='w-[95%]'>
                <Header/>
                <Hero/>
                <Administration/>
                <Figo/>
                <ComponentVideo/>
                <Objects />
                <Cotege/>
                <Company/>
                <Partner/>
                <Contact/>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
