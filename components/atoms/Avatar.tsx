import Image from 'next/image'
import React from 'react'

interface IAvatar {
  imgUrl: string
  customClass?: string
}

const Avatar = ({imgUrl, customClass}: IAvatar) => {
  return (
    <Image src={imgUrl} alt="avatar" fill className={`aspect-square rounded-full ${customClass}`}/>
  )
}

export default Avatar