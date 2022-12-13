import styled from "styled-components/macro";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
      flex 
      m-auto 
      flex-col 
      bg-[#26272B]
      pt-16
      pr-12
      max-w-full
      msm:pt-16 pr-8
      mt-8
  `}
`;

export const Column = styled.div`
  ${tw`
      flex 
      flex-col 
      text-left
  `}
`;

export const Row = styled.div`
  grid-gap: 100px;

  ${tw`
      flex 
      justify-center 
      items-center
      grid-cols-13
      msm:grid-cols-14
  `}
`;

export const Link = styled.a`
  ${tw`
      text-white 
      mb-5 
      text-sm 
      no-underline
  `}
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Copyright = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  margin-left: 50px;
`;
