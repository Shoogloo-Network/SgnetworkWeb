import BackgroundVideo from '@/app/components/backgroundVideo'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import ContactForm from '@/app/components/contactForm'
import React from 'react'
import AddressMap from '@/app/components/addressMap'

const Contact = () => {
  return (
    <div>
      <Header />
      <BackgroundVideo imgUrl="/assets/ContactUsBanner.jpg" imgmobileUrl="/assets/ContactUsBanner.jpg"/>
      <ContactForm/>
      <AddressMap/>      
      <Footer btnText="Subscribe" />
    </div>
  )
}

export default Contact
