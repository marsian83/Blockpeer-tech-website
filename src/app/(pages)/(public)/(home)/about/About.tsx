const About = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <div className="border-t-2 border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl">About Us</h1>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
            Our vision is to be at the forefront of technological evolution, creating solutions that not only meet the demands of today but also anticipate the challenges of tomorrow. We envision a future where blockchain, AI, and compliance seamlessly converge to shape a new era of possibilities for businesses across industries.
            </p>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
            In the dynamic landscape of technology, expertise is paramount. At BlockPeer Tech, our seasoned team of professionals brings together a wealth of experience and knowledge. From designing scalable blockchain solutions to crafting intricate AI algorithms, and ensuring MLETR compliance, we thrive on mastering the complexities that define the modern digital ecosystem.
            </p>
          </div>
        </div>
        <div className="lg:mt-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div />
            <div className="lg:col-span-2">
              <p className="text-sm/relaxed tracking-wider text-gray-600">
              At the core of BlockPeer Tech is a commitment to our clients. With a client-centric approach, we tailor each solution to the unique needs and goals of businesses. Your success is our success, and we take pride in being a trusted technology partner. Join us on the journey of building tomorrows technology landscape today, where innovation and excellence converge at BlockPeer Tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
