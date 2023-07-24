"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="relative flex flex-col items-center">
      <div
        className="mt-20 lg:mt-40 mx-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
      >
        <h1 className="text-3xl font-extrabold">나의 성장 이야기</h1>
        <div className="mt-4">
          <span className="">글쓴이: 김종엽</span>
          <time className=" pl-4">2023.07.24</time>
        </div>
        <p className="mt-10 leading-[30px]">
          이 페이지는 BBC 비주얼저널리즘 팀에서 제작한{" "}
          <Link
            href="https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5"
            target="_blank"
          >
            <span className="underline">
              {"'재택근무의 일상화'... 코로나19가 바꿀 사무실의 미래"}
            </span>
          </Link>{" "}
          페이지를 비슷하게 구현해 본 개발 예제입니다.
          <br />
          아래의 내용은 프론트엔드를 처음 접한 이후 부터 지금까지의 저의
          이야기를 짧게 담아 봤습니다.
        </p>
      </div>
    </header>
  )
}

export default Header
