import LightRays from '@/components/background/light-ray'
import CTAEditorSection from '../landing/cta-editor'
import FAQSection from '../landing/faq'
import FeaturesSection from '../landing/features'
import HeroSection from '../landing/hero'
import Footer from '../landing/home/footer'
import Navbar from '../landing/home/navbar'
import SponsorsSection from '../landing/sponsors'

function LandingPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <LightRays
        className="fixed inset-0 z-0"
        raysOrigin="top-center"
        followMouse
      />
      <Navbar />
      <main className="flex min-h-screen w-full items-center justify-center pt-24">
        <HeroSection />
      </main>
      <FeaturesSection />
      <SponsorsSection />
      <CTAEditorSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
