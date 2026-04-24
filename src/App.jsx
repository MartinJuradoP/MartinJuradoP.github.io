import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advisory from './components/Advisory';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Header />

      {/* Hero: Full width */}
      <Hero />

      {/* Remaining sections: Contained */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <About />
        <Advisory />
        <Experience />
        <Writing />
        <Speaking />
        <Contact />
      </div>
    </div>
  );
}

export default App;
