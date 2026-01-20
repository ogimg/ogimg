import Navbar from '../landing/home/navbar'
import HeroSection from '../landing/hero'
import Footer from '../landing/home/footer'
import LightRays from '@/components/background/light-ray'

function LandingPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <LightRays
        className="fixed inset-0 z-0"
        raysOrigin="top-center"
        followMouse
      />
      <Navbar />
      <main className="flex min-h-screen w-full items-center justify-center pt-24 pb-24">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
