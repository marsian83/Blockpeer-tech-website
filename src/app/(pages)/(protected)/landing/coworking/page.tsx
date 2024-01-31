import { Metadata } from 'next'
import Hero from './Hero'
import About from './About'
import Features from '../../../(public)/(home)/WhyChooseUs'
import SpaceOptions from './SpaceOptions'
import Testimonials from './Testimonials'
import Footer from './Footer'

//data
import { features, spaceOptions, testimonials } from './data'

export const metadata: Metadata = {
  title: 'CoWorking Landing',
}

const CoWorking = () => {
  return (
    <>
      <Hero />

      <About />

      <Features features={features} />

      <SpaceOptions spaceOptions={spaceOptions} />

      <Testimonials testimonials={testimonials} />

      <Footer />
    </>
  )
}

export default CoWorking
