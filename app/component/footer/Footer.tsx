"use client"

const Footer = () => {
  return (
    <>
      <footer className="relative flex flex-col items-center">
        <div
          className="m-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
        >
          <h2 className="text-3xl font-extrabold">사용한 기술스택</h2>
          <p className="mt-4 leading-[30px]">
            1. Next.js (App)
            <br />
            2. Tailwind
            <br />
            3. Intersection Observer(JS)
            <br />
            4. TypeScript
          </p>
        </div>
        <div
          className="m-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
        >
          <h2 className="text-3xl font-extrabold">만들면서 고민했던 것</h2>
          <p className="mt-4 leading-[30px]">
            1. 설계부분의 이미지
            <br />
            {"=> 직접 그림.."}
            <br />
            2. 너무나 길어진 코드
            <br />
            {"=> custom hook의 사용 + 컴포넌트 분리로 관리"}
          </p>
        </div>
        <div
          className="m-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
        >
          <h2 className="text-3xl font-extrabold">도전해보고 싶은 것</h2>
          <p className="mt-4 leading-[30px]">
            1. 만든 프로젝트에 lazy Loading 적용
            <br />
            2. interective web
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
