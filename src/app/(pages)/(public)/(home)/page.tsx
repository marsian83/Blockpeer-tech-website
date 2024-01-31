// import AccountPages from './AccountPages'
// import CTA from './CTA'
// import Demos from './Demos'
// import Features from './Features'
// import InnerPages from './InnerPages'

// //data
// import { accountPages, features, landings, secondaryPages } from './data'
// import Hero from './Hero'

// const Home = () => {
//   return (
//     <>
//       <Hero />

//       <Demos landings={landings} />

//       <InnerPages innerPages={secondaryPages} />

//       <AccountPages accountPages={accountPages} />

//       <Features features={features} />

//       <CTA />
//     </>
//   )
// }

// export default Home


import Image from 'next/image'
import { Metadata } from 'next'
import Hero from './Hero'
import Features from '@/components/common/Features'
import FeedBack from '@/components/common/FeedbackTestimonial'
import FAQs from '@/components/common/FAQs'
import Clients from '@/components/common/Clients'
import Footer from '@/components/common/Footer'
import WhyChooseUs from './WhyChooseUs'

import { whyChooseUsData } from '../../(protected)/landing/sass-modern/data'

//image
import whiteWave from '@/assets/images/shapes/white-wave.svg'

export const metadata: Metadata = {
  title: 'Blockpeer',
}

const Home = () => {
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
            height={195}
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

export default Home

