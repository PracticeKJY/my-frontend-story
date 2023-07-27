"use client"

const Footer = () => {
  return (
    <>
      <footer className="relative flex flex-col items-center">
        <div
          className=" mx-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
        >
          <h2 className="text-3xl font-extrabold">요약하자면요..</h2>
          <p className="mt-4 leading-[30px]">
            1. 컴공과를 전공하였지만, 편입 + 군입대 + 코로나 3연타 맞음.
            <br />
            2. 전문성이 없어 악착같이 제로부터 도전함.
            <br />
            3. 어느정도 사람 구실은 할 수 있을 정도로 성장함.
            <br />
            4. 언능 취업하고싶다. 아자아자!!
          </p>
        </div>
        <div
          className="mt-10 px-5 
      flex flex-col 
      w-[300px] sm:w-[500px]"
        >
          <h2 className="text-3xl font-extrabold">그동안 생긴 지병들</h2>
          <h3 className="line-through">(나이가 30 넘어서 생긴거 아님)</h3>
          <p className="mt-4 leading-[30px]">
            1. 일자목(5,6번 척추손상)
            <br />
            2. 허리측만증 (꾸불꾸불 내 허리)
            <br />
            3. 대싱포진 (수면부족,영양실조)
            <br />
            4. 만성피로 (자도자도 피곤해요)
          </p>
        </div>
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
      </footer>
    </>
  )
}

export default Footer
