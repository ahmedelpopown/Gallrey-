 import HeroSection from './hero/HeroSection'
import About from './about/About'
import Gallery from './gallery/Gallery'
import Footer from './footer/Footer'
 

const App = () => {
  return (
 <section className='w-full'>
  <section id="scroll-wrapper" 
  className="h-screen w-full bg-[url('/images/landi.jpg')] bg-cover bg-center bg-no-repeat"
  style={{ backgroundAttachment: "fixed" }}
  
  >
    <HeroSection />
  </section>
      <section className='flex flex-row flex-wrap items-center my-10'>
        <About />
      </section>
     <div className="my-10">
       <Gallery />
     </div>
      <Footer />
    </section>
  )
}

export default App
