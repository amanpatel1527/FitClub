import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Reason from './Components/Reason/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
import Programs from './Components/programs/Programs';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reason/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Form/>
          <Footer/>
    </div>
  );
}

export default App;
