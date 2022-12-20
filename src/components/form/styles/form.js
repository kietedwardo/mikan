import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  backdrop-filter: blur(5px);
  ${tw`
      flex 
      flex-col 
      w-full
      m-auto 
      mb-24
      max-w-[450px]
      min-h-[660px]
      pt-16
      px-8
      pb-10
      bg-[#000000b3]
      rounded-3xl
  `}
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Error = styled.div`
  ${tw`
      bg-orange-600 
      rounded 
      text-sm 
      text-white
      py-4
      px-5
      mb-4
  `}
`;

export const Base = styled.form`
  ${tw`
      flex 
      flex-col 
      w-full
      mt-4
      max-w-[450px]
  `}
`;

export const Title = styled.h1`
  ${tw`
      text-[#EA580C]
      text-3xl 
      font-bold 
      mb-6
  `}
`;

export const Text = styled.p`
  ${tw`
      text-[#EA580C]
      text-base 
      font-medium
  `}
`;

export const TextSmall = styled.p`
  ${tw`
      mt-2 
      text-base 
      text-[#EA580C]
      leading-normal
  `}
`;

export const Link = styled(ReachRouterLink)`
  ${tw`
      text-white 
      no-underline
      hover:underline
  `}
`;

export const Input = styled.input`
  ${tw`
      rounded-xl
      text-white 
      h-12 
      mb-5
      bg-[#333]
      border-0
      py-1
      px-5
      leading-10
      last-of-type:mb-8
  `}
`;

export const Submit = styled.button`
  ${tw`
      bg-[#EA580C]
      rounded-xl
      text-base 
      font-bold 
      p-4 
      text-white 
      mt-[-10px]
      mb-0
      border-0
      cursor-pointer
      disabled:opacity-50
  `}
`;
