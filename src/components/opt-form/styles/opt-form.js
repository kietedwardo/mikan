import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  ${tw`
      flex 
      justify-center 
      h-full 
      mt-5 
      flex-wrap
      msm:flex-col items-center
  `}
`;

export const Input = styled.input`
  ${tw`
      w-full
      p-2 
      h-[70px] 
      box-border
      max-w-[400px]
      border-0
  `}
`;

export const Frame = styled.div``;

export const Button = styled(ReachRouterLink)`
  ${tw`
      flex 
      h-[70px]
      w-fit
      items-center 
      bg-orange-600
      text-white
      no-underline
      uppercase 
      text-2xl 
      cursor-pointer
      pt-0
      px-[32px]
      border-0
      max-w-[400px]
  `}

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    backdrop-filter: blur(3px);
    background: #dd3b0080;
  }
`;
