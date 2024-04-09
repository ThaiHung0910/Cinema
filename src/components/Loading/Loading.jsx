import React from 'react'
import { useSelector } from 'react-redux'
import loading from '../../assets/json/loading.json'
import Lottie from "lottie-react";

const Loading = () => {
  const {isLoading} = useSelector((state) => state.loadingReducer)
  return (
    <div className={`w-screen h-screen bg-black text-white fixed top-0 left-0 z-50 ${isLoading ? '' : 'hidden'}`}>
      <div className="scale-50 flex w-full h-full items-center justify-center">
        <Lottie animationData={loading} />
      </div>
    </div>
  )
}

export default Loading