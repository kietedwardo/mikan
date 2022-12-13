import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Frame = styled.div`
  ${tw`
      flex 
      h-auto
      max-w-[2000px]
      items-center
      mt-0
      mr-12
      lg:mt-0 mr-8 mb-8
  `}
  a {
    display: flex;
  }
`;

export const Container = styled.div`
  ${tw`h-[100px]`}
`;

export const ButtonLink = styled(ReachRouterLink)`
  ${tw` 
      bg-[#e85a24]
      text-white 
      text-lg 
      cursor-pointer 
      no-underline
      h-fit
      border-0
      py-2
      px-4
      mb-[80px]
      hover:bg-[#bf4f2c]
  `}
`;

export const Logo = styled.img`
  ${tw`
      h-8 
      w-32 
      m-10
      mixl:h-12 w-40
  `}
`;
