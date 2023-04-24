
import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Reason from './Components/Reason/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
import Programs from './Components/programs/Programs';



function App() {
  return (

    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Hero />}></Route>
          <Route exact path='/programs' element={< Programs />}></Route>
          <Route exact path='/reasons' element={< Reason />}></Route>
          <Route exact path='/plans' element={< Plans />}></Route>
          <Route exact path='/testimonials' element={< Testimonials />}></Route>
          <Route exact path='/join' element={< Join />}></Route>
          </Routes>
          </BrowserRouter> 
  */}
     
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div >

  );
}

export default App;
