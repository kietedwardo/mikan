import styled from "styled-components/macro";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
      flex 
      flex-col 
      text-center
      px-40
      py-2
      mb-auto
  `}
`;

export const Title = styled.h1`
  ${tw`
      text-white 
      my-8
      max-w-screen-sm 
      text-5xl 
      font-bold 
      m-auto
      sm:text-4xl
  `}
`;

export const SubTitle = styled.h2`
  ${tw`
      text-white 
      text-center
      font-bold
      mx-2
      mt-4
      sm:text-lg
  `}
`;

export const Column = styled.div`
  ${tw`
      flex 
      flex-col 
      text-left
  `}
`;

export const Item = styled.div``;

export const Row = styled.div`
  grid-gap: 100px;

  ${tw`
      flex 
      text-white
      justify-center 
      items-center
      grid-cols-13
      msm:grid-cols-14
  `}
`;
