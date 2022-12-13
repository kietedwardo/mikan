import styled from "styled-components/macro";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
      flex
      border-b-8
      border-t-0
      border-x-0
      border-solid
      border-black
      bg-banner
  `}
`;

export const Frame = styled.div`
  ${tw`mb-10`}
`;

export const Inner = styled.div`
  ${tw`
      flex 
      flex-col 
      m-auto
      pt-16
      pr-12
      max-w-screen-1.5md
  `}
`;

export const Title = styled.h1`
  ${tw`
      text-5xl 
      mt-0 
      mb-2 
      text-white
      text-center
      leading-tight
      msm:text-4xl
  `}
`;

export const Item = styled.div`
  ${tw`
      text-white 
      m-auto 
      mb-2 
      w-full
      max-w-[675px]
      first-of-type:mt-[3em]
      last-of-type:mb-0
  `}
`;

export const Header = styled.div`
  padding: 0.8em 1.2em 0.8em 1.2em;

  ${tw`
      flex 
      justify-between 
      cursor-pointer
      mb-0 
      text-2xl 
      font-bold 
      bg-[#EA580C]
      select-none 
      items-center
      msm:text-base
  `}
  img {
    filter: brightness(0) invert(1);
    ${tw`
        msm:w-4
        w-6 
        select-none
    `}
  }
`;

export const Body = styled.div`
  padding: 0.8em 2.2em 0.8em 1.2em;
  backdrop-filter: blur(3px);
  ${tw`
      text-2xl 
      font-normal 
      bg-[#EA580C33]
      whitespace-pre-wrap 
      select-none 
      overflow-hidden
      leading-normal
      msm:text-base leading-5
  `}
  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
`;
