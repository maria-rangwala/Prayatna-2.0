import Home from './components/Home';
import About from './components/About';
import Detail from './components/Details';
import Timeline from './components/timeline';
import Prize from "./components/Prize";
import Countdown  from "./components/countdown";
import Sponsor from "./components/Sponsor";
import Footer from './components/footer';
import Slideshow from './components/Problem';
import Pdf from './components/pdf';
import { BrowserRouter } from "react-router-dom";
import Faqq from './components/faq1';

function App() {
  return (
    <BrowserRouter basename="/prayatna2/">
      <Home/>
      <About/>
      <Sponsor/>
      <Prize/>
      <Countdown/>
      <Detail/>
      <Timeline/>
      <Slideshow/>
      <Pdf/>
      <Faqq/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;