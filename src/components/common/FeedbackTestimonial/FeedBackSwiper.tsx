'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa6'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import google from '@/assets/images/brands/google.svg'
import amazon from '@/assets/images/brands/amazon.svg'
import lenovo from '@/assets/images/brands/lenovo.svg'

import 'swiper/css'
import 'swiper/css/navigation'

const fakeFeedbacks = [
  {
    name: "John D.",
    description:
      "BlockPeer Tech has truly set a new standard in blockchain and AI development. Their expertise in compliance solutions is unmatched. They've streamlined our processes, mitigated risks, and brought unparalleled efficiency to our operations. Highly recommend!",
    image: avatar1
  },
  {
    name: "Emily S.",
    description:
      "Incredible work by BlockPeer Tech! Their innovative approach to decentralized finance and AI solutions has transformed our business. The MLETR compliance tools are a game-changer, providing a seamless experience in navigating complex regulatory landscapes.",
      image: avatar2
  },
  {
    name: "David R.",
    description:
      "Kudos to the BlockPeer Tech team for their exceptional work! The AI solutions have revolutionized the way we operate, providing valuable insights and boosting our competitive edge. Their commitment to compliance ensures we're always on the right side of regulations.",
      image: avatar3
  },
  {
    name: "Sophia M.",
    description:
      "BlockPeer Tech delivers excellence! The blockchain solutions have added a layer of transparency and security to our financial transactions. The MLETR compliance tools are a lifesaver, making it easy to navigate the intricate world of regulations.",
      image: avatar2
  },
  {
    name: "Alex B.",
    description:
      "Impressed with BlockPeer Tech's commitment to innovation. The AI and blockchain solutions have brought efficiency and reliability to our operations. The MLETR compliance tools have made regulatory navigation a breeze. A trustworthy partner in technology.", 
      image: avatar1

  },
];


const CommonSlide1 = ({
  image,
  logo,
  name,
  description
}: {
  image: StaticImageData
  logo: string
  name: string
  description: string
}) => {
  return (
    <>
      <FaQuoteLeft className="text-gray-500 text-5xl" />
      
      <p className="my-4">
        {description}
      </p>
      <div className="border-b border-gray-200 w-full my-7"></div>

      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <Image
            alt="userImg"
            height={40}
            width={40}
            src={image}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="text-sm mb-1">{name}</h1>
            {/* <p className="text-gray-500 text-xs">Senior Project Manager</p> */}
          </div>
        </div>
        {/* <div>
          <Image
            alt="companyLogo"
            height={32}
            width={96}
            src={logo}
            className="w-24"
          />
        </div> */}
      </div>
</>
  )}

const FeedBackSwiper = () => {
  return (
    <div className="col-span-3 lg:col-span-2 xl:col-span-3">
      <div className="relative">
        <div className="hidden sm:block">
          <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
          <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
        </div>
        <div id="swiper_one" className="swiper relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev',
            }}
            loop
            spaceBetween={30}
          >
            {fakeFeedbacks.map((feedback, index)=>(
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow" key={index}>
              <CommonSlide1 image={feedback.image} logo={google} name={feedback.name} description={feedback.description} ></CommonSlide1>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeedBackSwiper
