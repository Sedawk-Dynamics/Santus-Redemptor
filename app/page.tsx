import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stats } from '@/components/stats'
import { Services } from '@/components/services'
import { Platforms } from '@/components/platforms'
import { Portfolio } from '@/components/portfolio'
import { Publications } from '@/components/publications'
import { WhyUs } from '@/components/why-us'
import { Team } from '@/components/team'
import { Insights } from '@/components/insights'
import { CtaBanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Platforms />
      <Portfolio />
      <Publications />
      <WhyUs />
      <Team />
      <Insights />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  )
}
