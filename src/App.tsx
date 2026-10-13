import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
