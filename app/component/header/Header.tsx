"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="relative flex flex-col items-center">
      <div
        className="mt-20 lg:mt-40 mx-10 px-5 
      flex flex-col 
      w-[320px] sm:w-[520px]"
      >
        <h1 className="text-3xl font-extrabold">나의 성장 이야기</h1>
        <div className="mt-4 text-gray-400 text-sm">
          <span>글쓴이: 김종엽</span>
          <span className=" pl-4">입력: </span>
          <time>2023.07.24</time>
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
          포트폴리오를 만들면서 Intersection Observer을 배웠는데, 이 페이지를
          보자마자 배운걸 써먹어봐야겠다! 라고 생각했어요.
          <br />
          <br />
          이미지는 직접 그린 것 & 유튜브 1분코딩님의 이미지로 구성하였고,
          <br />
          내용은 프론트엔드를 처음 접한 이후 부터 지금까지의 저의 이야기를 짧게
          담아 봤습니다.
        </p>
      </div>
    </header>
  )
}

export default Header
