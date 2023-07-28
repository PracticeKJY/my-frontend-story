"use client"

import Image from "next/legacy/image"
import Container from "../Container"
import { ReactNode, forwardRef, useEffect, useRef } from "react"

const Body = () => {
  const stepOne = useRef<HTMLDivElement>(null)
  const stepTwo = useRef<HTMLDivElement>(null)
  const stepThree = useRef<HTMLDivElement>(null)
  const stepFour = useRef<HTMLDivElement>(null)
  const stepFive = useRef<HTMLDivElement>(null)
  const stepSix = useRef<HTMLDivElement>(null)
  const stepSeven = useRef<HTMLDivElement>(null)
  const stepEight = useRef<HTMLDivElement>(null)
  const stepNine = useRef<HTMLDivElement>(null)
  const textOne = useRef<HTMLDivElement>(null)
  const textTwo = useRef<HTMLDivElement>(null)
  const textThree = useRef<HTMLDivElement>(null)
  const textFour = useRef<HTMLDivElement>(null)
  const textFive = useRef<HTMLDivElement>(null)
  const textSix = useRef<HTMLDivElement>(null)
  const textSeven = useRef<HTMLDivElement>(null)
  const textEight = useRef<HTMLDivElement>(null)
  const textNine = useRef<HTMLDivElement>(null)
  const textExtra = useRef<HTMLDivElement>(null)
  const textExtra2 = useRef<HTMLDivElement>(null)
  const textExtra3 = useRef<HTMLDivElement>(null)

  //새로고침 시, 스크롤 최상단이동
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver
    if (stepOne.current) {
      stepOne.current.classList.add("opacity-100")
    }

    if (textExtra) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (e.isIntersecting && stepOne.current && stepTwo.current) {
            stepOne.current.classList.add("opacity-100")
            stepTwo.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textExtra.current as Element)
    }
    if (textTwo) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepOne.current &&
            stepTwo.current &&
            stepThree.current
          ) {
            stepOne.current.classList.remove("opacity-100")
            stepTwo.current.classList.add("opacity-100")
            stepThree.current.classList.remove("opacity-100")
          }
        },

        { threshold: 1 },
      )
      observer.observe(textTwo.current as Element)
    }
    if (textExtra2) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepOne.current &&
            stepTwo.current &&
            stepThree.current
          ) {
            stepTwo.current.classList.add("opacity-100")
            stepThree.current.classList.remove("opacity-100")
          }
        },

        { threshold: 1 },
      )
      observer.observe(textExtra2.current as Element)
    }

    if (textThree) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepTwo.current &&
            stepThree.current &&
            stepFour.current
          ) {
            // stepTwo.current.style.cssText = "display:none";
            // stepThree.current.style.cssText = "display:block";
            // stepFour.current.style.cssText = "display:none";
            stepTwo.current.classList.remove("opacity-100")
            stepThree.current.classList.add("opacity-100")
            stepFour.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textThree.current as Element)
    }
    if (textFour) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepThree.current &&
            stepFour.current &&
            stepFive.current
          ) {
            stepThree.current.classList.remove("opacity-100")
            stepFour.current.classList.add("opacity-100")
            stepFive.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textFour.current as Element)
    }
    if (textExtra3) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepThree.current &&
            stepFour.current &&
            stepFive.current
          ) {
            stepThree.current.classList.add("opacity-100")
            stepFour.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textExtra3.current as Element)
    }
    if (textFive) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepFour.current &&
            stepFive.current &&
            stepSix.current
          ) {
            stepFour.current.classList.remove("opacity-100")
            stepFive.current.classList.add("opacity-100")
            stepSix.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textFive.current as Element)
    }
    if (textSix) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepFive.current &&
            stepSix.current &&
            stepSeven.current
          ) {
            stepFive.current.classList.remove("opacity-100")
            stepSix.current.classList.add("opacity-100")
            stepSeven.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textSix.current as Element)
    }
    if (textSeven) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepSix.current &&
            stepSeven.current &&
            stepEight.current
          ) {
            // stepOne.current.classList.remove("opacity-100");
            stepSix.current.classList.remove("opacity-100")
            stepSeven.current.classList.add("opacity-100")
            stepEight.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textSeven.current as Element)
    }
    if (textEight) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (
            e.isIntersecting &&
            stepSeven.current &&
            stepEight.current &&
            stepNine.current
          ) {
            // stepOne.current.classList.remove("opacity-100");
            stepSeven.current.classList.remove("opacity-100")
            stepEight.current.classList.add("opacity-100")
            stepNine.current.classList.remove("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textEight.current as Element)
    }
    if (textNine) {
      observer = new IntersectionObserver(
        async ([e]) => {
          if (e.isIntersecting && stepEight.current && stepNine.current) {
            // stepOne.current.classList.remove("opacity-100");
            stepEight.current.classList.remove("opacity-100")
            stepNine.current.classList.add("opacity-100")
          }
        },
        { threshold: 1 },
      )
      observer.observe(textNine.current as Element)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className=" min-w-screen">
        <div className="sticky top-0">
          <div className="relative  flex flex-col items-center justify-center m-3 min-w-screen min-h-screen">
            <ImageList src={"/00.png"} ref={stepOne} />
            <ImageList src={"/01.png"} ref={stepTwo} />
            <ImageList src={"/02.png"} ref={stepThree} />
            <ImageList src={"/03.png"} ref={stepFour} />
            <ImageList src={"/04.png"} ref={stepFive} />
            <ImageList src={"/05.png"} ref={stepSix} />
            <ImageList src={"/06.png"} ref={stepSeven} />
            <ImageList src={"/07.png"} ref={stepEight} />
            <ImageList src={"/08.png"} ref={stepNine} />
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-[540px] m-[auto] px-4">
          <TextWrapper ref={textOne}>
            <p>
              나의 프론트엔드 도전기를 소개한다.
              <br />
              나는 원주 쪽의 대학교에 다녔고, 컴퓨터정보통신공학부를 전공했다.
            </p>
          </TextWrapper>
          <TextWrapper>
            <p>
              원래는 강릉 쪽에 학교를 다니면서 정보통신을 전공했는데, 좀 더
              배우고 싶은 마음에 편입에 도전했고 편입에 성공 후 바로 군대를
              다녀왔다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textExtra}>
            <p>
              그런데 전역 후 복학해 보니까 정보통신의 커리큘럼이 거의 없었다.
              <br />
              이름은 분명 컴퓨터정보통신공학부인데.. 이 학교는 코드 제조기를
              만들고 싶은 건가?
            </p>
          </TextWrapper>
          <TextWrapper ref={textTwo}>
            <p>
              코로나의 비대면 zoom수업과 매 학기마다 풀전공 수강신청..
              <br />
              편입 + 군입대 + 코로나 비대면의 효과는 나를 투명인간으로 만들기
              충분했다.
            </p>
          </TextWrapper>

          <TextWrapper ref={textExtra2}>
            <p>
              학점 4.5 → 2 .. 과탑에서 학고가 되었다.
              <br />
              수업의 이론적인 부분들은 달달 외어서라도 따라갔지만, 직접 코드들을
              다루는 수업을 따라가기가 힘들었다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textThree}>
            <p>
              그렇게 어찌어찌 필요한 전공 점수들을 모두 채웠고, 직종에 대해
              고민해야 할 시기가 왔다. 특히 '전공을 살려야 하나?' 에 대한 고민이
              많았었는데, 고민이 길어질수록 오기가 생겼다.
              <br />
              <br />
              그리고 마지막으로 독하게 한번 해봐야겠다는 생각이 들었다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textExtra3}>
            <p>
              그렇게 국비지원,부트캠프,독학 해볼수있는건 다 찔러보았다.
              <br />
              그러던 차, 멋쟁이 사자처럼이라는 국비교육에 합격했고 프론트엔드
              공부를 시작하게 되었다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textFour}>
            <p>
              처음엔 HTML5의 시멘틱마크업, CSS3의 스타일링을 배우고 그 다음엔
              JavaScript를 배웠는데,
            </p>
          </TextWrapper>
          <TextWrapper ref={textFive}>
            <p>
              객체와 배열, 그리고 메서드들이 어려웠다. forEach,filter,map,some..
              이해가 안 되는 만큼 잠을 줄여서 붙잡으려 했다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textSix}>
            <p>
              노력은 배신하지 않는다는 말이 있듯 계속 붙잡은 만큼 요령이 생겼다.
              학교다닐 때 힘들었던 툴의 환경설정과 사용법에도 익숙해지고, 팀
              프로젝트를 진행하며 Git을 다룰 줄 알게 되었으며, 나아가 React와
              TypeScript, Next.js까지 조금 친해지게 되었다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textSeven}>
            <p>
              처음엔 "어떻게 구현해야 하지?"로 접근했지만, 이제는 "이건 왜
              그렇지? 이걸 써서 뭘 개선하고 있지?"라며 고민하는 내 모습을 보면서
              조금씩 성장하고 있는지를 느낄 수 있었다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textEight}>
            <p>
              요즘 생긴 목표가 있다면, "일을 하면서 이것저것 더 많이 경험하고
              싶다"는 것이다. 혼자 프로젝트들을 진행하면서 애자일방법론에 대해
              많은 생각들이 들었는데, 실무에서는 어떤 흐름으로 진행이 되는지
              궁금하다.
            </p>
          </TextWrapper>
          <TextWrapper ref={textNine}>
            <p>
              '꾸준히 하다 보면 언젠간 다 잘 되겠지..!'
              <br />
              그렇게 오늘도 다짐하면서 잠자리에 든다. 힘내자. 화이팅!
            </p>
          </TextWrapper>
        </div>
      </section>
    </>
  )
}

export default Body

interface ImageListProps {
  src: string
}

const ImageList = forwardRef<HTMLDivElement, ImageListProps>(({ src }, ref) => {
  return (
    <div
      className=" absolute w-[100vw] 2xl:w-[60vw] opacity-0 
    transition-opacity duration-500 ease-in-out
    "
      ref={ref}
    >
      <Image
        src={src}
        alt=""
        layout="responsive"
        width={100}
        height={76}
        priority
      />
    </div>
  )
})

ImageList.displayName = "scrollImage"

interface TextWrapperProps {
  children: ReactNode
}

const TextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(
  ({ children }, ref) => {
    return (
      <div
        className="mb-[50vh] px-4 py-8 
    flex flex-col 
    opacity-90 "
        ref={ref}
      >
        <div className=" shadow-md px-4 py-8 rounded-[10px] bg-white">
          {children}
        </div>
      </div>
    )
  },
)

TextWrapper.displayName = "scrollText"
