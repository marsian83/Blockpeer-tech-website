import { Metadata } from 'next'
import Footer from '@/components/common/Footer'
import Hero from './Hero'
import ContactUs from './ContactUs'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const Contact = () => {
  return (
    <>
      <Hero />

      <ContactUs />

      <Footer />
    </>
  )
}

export default Contact
