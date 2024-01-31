import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from './data'

//image
import logoDark from '@/assets/images/logo-dark.png'

import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container">
        <div className="grid xl:grid-cols-5 gap-6 py-12">
          <div className="xl:col-span-2">
            <div>

            <Link href="/" className='flex justify-start text-2xl font-bold'>
              <Image
                width={50}
                height={32}
                alt="logoDark"
                src={logo}
                className="h-8"
                />
                <div>
              Blockpeer-Tech
                </div>
            </Link>
                </div>
            <p className="text-gray-500/80 mt-5 lg:w-4/5">
            Embarking on a mission to redefine the future of software development
            </p>
          </div>
          <div className="xl:col-span-3 col-span-4">
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
              {Object.keys(footerLinks).map((title, idx) => {
                return (
                  <div className="flex flex-col gap-3" key={idx}>
                    <h5 className="mb-3 uppercase">{title}</h5>
                    {footerLinks[title].links.map((link, idx) => {
                      return (
                        <div className="text-gray-500/80" key={idx}>
                          <Link href="">{link}</Link>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
            <div>
            <p className="my-5">
              2023© BlockPeer-Tech. All rights reserved. 
            </p>
            </div>
            <div className="flex justify-center sm:justify-end gap-7">
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
