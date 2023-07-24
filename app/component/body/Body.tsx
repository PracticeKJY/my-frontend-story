"use client"

import Image from "next/legacy/image"
import Container from "../Container"

const Body = () => {
  return (
    <Container>
      <div className=" flex flex-col m-3 w-full">
        <div className=" relative">
          <Image
            src="/00.png"
            alt=""
            layout="responsive"
            width={100}
            height={70}
            priority
          />
          <ImageList src={"/01.png"} />
          <ImageList src={"/02.png"} />
          <ImageList src={"/03.png"} />
          <ImageList src={"/04.png"} />
          <ImageList src={"/05.png"} />
          <ImageList src={"/06.png"} />
          <ImageList src={"/07.png"} />
          <ImageList src={"/08.png"} />
        </div>
      </div>
    </Container>
  )
}

export default Body

const ImageList = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt=""
      layout="responsive"
      width={100}
      height={70}
      priority
    />
  )
}
