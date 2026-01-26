import HeroSection from '../components/home/HeroSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import TrustSection from '../components/home/TrustSection'
import WhoIsItForSection from '../components/home/WhoIsItForSection'

const Home = () => {
  return (
    <main>
      <section aria-label="EventHub introduction">
        <HeroSection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <TrustSection />
      </section>
    </main>

  )
}

export default Home