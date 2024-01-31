import coworking1 from '@/assets/images/hero/coworking1.jpg'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="pt-36 pb-24 relative">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl/tight sm:text-4xl/tight lg:text-[2.6rem]/tight font-semibold mb-5">
              
Welcome to  &nbsp;
              <span className="relative z-0 after:bg-primary/30 after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0">
              BlockPeer Tech
              </span>
              &nbsp;- Shaping Tomorrows Tech!
            </h1>
            <p className="sm:text-lg text-gray-500 px-12">
            At BlockPeer Tech, we embark on a mission to redefine the future of software development, specializing in the revolutionary realms of blockchain, artificial intelligence, and compliance. 
            </p>
          </div>
        </div>
      </section>
      <section>
        <span className="flex justify-center items-center relative z-20 translate-y-1/2">
          <Link href="/contact" className="bg-primary text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/20 cursor-pointer hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/30 uppercase px-16 py-3">
            Let&apos;s Have Talk
          </Link>
        </span>

        {/*
          The react-scroll-parallax does not support NextJs versions over v13.4.1, 
          you can uncomment and use the below HeroBanner component if you wish to 
          use it by downgrading the NextJs version, or after 
          react-scroll-parallax fixes the issue.
          And if you decide to use it, make sure to uncomment the ParallaxProvider
          from /components/AppProviders.tsx
        */}

        {/* <HeroBanner /> */}

        <div
          className="flex items-center md:py-80 py-44"
          style={{
            background: `url(${coworking1.src})`,
            backgroundPosition: 'center',
          }}
        ></div>
      </section>
    </>
  )
}

export default Hero
