import React from 'react'
import notFound from "../../assets/json/notFound.json"
import Lottie from 'lottie-react'


const Page404 = () => {
  return (
    <div>
      <div className='container mx-auto' style={{width: '600px'}}>
        <Lottie animationData={notFound} />
      </div>
    </div>
  )
}

export default Page404