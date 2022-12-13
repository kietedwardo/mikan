import styled from 'styled-components/macro';
import tw from "twin.macro";

export const Item = styled.div`
  ${tw`
      flex 
      text-white 
      overflow-hidden
      p-[5%]
  `}
`;

export const Inner = styled.div`
  flex-direction: ${({ direction }) => direction};

  ${tw`
      flex 
      items-center 
      justify-between 
      m-auto 
      w-full
      max-w-screen-lg
      mlg:flex-col
  `}
`;

export const Pane = styled.div`
  ${tw`
      w-6/12
      mlg:w-full pt-0 pr-12 text-center
  `}
`;

export const Title = styled.h1`
  ${tw`
      text-5xl 
      mb-2 
      text-orange-600
      leading-tight
      msm:text-4xl
  `}
`;

export const SubTitle = styled.h2`
  ${tw`
      text-2xl 
      font-normal
      leading-normal
      msm:text-lg
  `}
`;

export const Image = styled.img`
  ${tw`max-w-full h-auto`}
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;