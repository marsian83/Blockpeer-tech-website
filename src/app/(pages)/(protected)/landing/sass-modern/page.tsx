import Image from 'next/image'
import { Metadata } from 'next'
import Hero from '../../pages/career/Hero'
import Features from '@/components/common/Features'
import FeedBack from '@/components/common/FeedbackTestimonial'
import FAQs from '@/components/common/FAQs'
import Clients from '@/components/common/Clients'
import Footer from '@/components/common/Footer'
import WhyChooseUs from '../../../(public)/(home)/WhyChooseUs'

import { whyChooseUsData } from './data';

//image
import whiteWave from '@/assets/images/shapes/white-wave.svg'

export const metadata: Metadata = {
  title: 'Blockpeer',
}

const SassModern = () => {
  return (
    <div className="text-gray-800">
      <Hero />
      <Features />
      {/* <Clients /> */}
      <WhyChooseUs features={whyChooseUsData} />
      <FeedBack />

      <section className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative py-16 sm:py-24">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <Image
            width={1905}
            height={150}
            src={whiteWave}
            alt="svg"
            className="w-full -scale-x-100"
          />
        </div>
        {/* <div className="py-5">
          <PricingCards />
        </div> */}
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <Image
            width={1905}
            height={150}
            src={whiteWave}
            alt="svg"
            className="w-full scale-x-100 -scale-y-100"
          />
        </div>
      </section>

      <FAQs />
      <Footer />
    </div>
  )
}

export default SassModern
