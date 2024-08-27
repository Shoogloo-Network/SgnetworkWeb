import BackgroundVideo from '@/app/components/backgroundVideo'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import React from 'react'

const LogIn = () => {
  return (
    <div>
      <Header />
      <BackgroundVideo imgUrl="/assets/header-banner.png" />
      <Footer btnText="Subscribe" />
    </div>
  )
}

export default LogIn
