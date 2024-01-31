
import Footer from '@/components/common/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Document PDF',
}

const Contact = ({ params }: { params: { pdf: string } }) => {
  return (
    <>
    <div className='w-full h-screen relative flex items-center justify-center mt-6'>
        <iframe src={`/docs/${params.pdf}.pdf`} className='w-4/5 h-5/6' />
    </div>
    <Footer />
    </>
  )
}

export default Contact
