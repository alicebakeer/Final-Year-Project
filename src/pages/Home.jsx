import HeroSection from '../components/HomePage/HeroSection'
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Section3 from '../components/HomePage/Section3'
import Section4 from '../components/HomePage/Section4'

export default function Home() {
  return (
    <div className="space-y-0">
        <HeroSection />
        <Section1 />
        <Section4 /> {/* Testimonials after features */}
        <Section2 /> {/* How it works */}
        <Section3 /> {/* Security & CTA */}
    </div>
  )
}
