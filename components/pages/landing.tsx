import Navbar from '../landing/home/navbar'
import HeroSection from '../landing/hero'
import Footer from '../landing/home/footer'

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
