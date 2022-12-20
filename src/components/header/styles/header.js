import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  ${tw`
      flex 
      flex-col
  `}
  background: linear-gradient(
      to bottom,
      #00000000,
      #0000001a,
      #00000033,
      #000000
    ),
    linear-gradient(
      to top,
      #00000000,
      #0000000d,
      #0000001a,
      #0000001a,
      #0000001a,
      #00000026,
      #00000033,
      #000000
    ),
    url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
  @media (max-width: 1100px) {
    background: none;
  }
`;

export const Frame = styled.div``;

export const Container = styled.div`
  ${tw`
      flex
      h-16
      justify-between
      items-center
      my-0
      mr-12
      lg:mt-4
  `}
  a {
    display: flex;
  }
`;

export const Link = styled.p`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};

  ${tw`
      text-white
      font-sans
      text-2xl
      no-underline 
      mr-8 
      ml-2
      cursor-pointer
      hover:font-bold
      last-of-type:mr-0
  `}
`;

export const Group = styled.div`
  ${tw`flex items-center`}
`;

export const SearchInput = styled.input`
  padding-top: -20px;
  ${tw`
  bg-[#40404080]
      text-white 
      h-8 
      text-sm 
      rounded
      focus:bg-[#000000cc]
      border-solid
      border-inherit
      transition-w
      duration-300
  `}
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
`;

export const Search = styled.div`
  ${tw`
      flex 
      items-center
  `}
  svg {
    color: white;
    cursor: pointer;
  }
`;

export const SearchIcon = styled.button`
  ${tw`
      cursor-pointer 
      bg-transparent 
      outline-none 
      p-0 
      flex 
      items-center 
      justify-center
      border-0
  `}
  img {
    filter: brightness(0) invert(1);
    width: 20px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e85a24;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #bf4f2c;
  }
`;

export const Picture = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 10px;
  &:hover {
    border: 2px solid white;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: row;
  }
`;

export const Feature = styled(Container)`
  padding: 100px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  margin-right: 24px;
  width: 50%;
`;

export const FeatureCallOut = styled.h2`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  ${tw`
      font-sans
      text-white 
      text-5xl 
      font-bold 
      mt-0
      ml-12
      mb-2
      leading-normal
  `}
`;

export const SubTitle = styled.h2`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  ${tw`
      text-white 
      text-xl
      font-normal
      text-left 
      leading-normal
      ml-12
      font-sans
  `}
`;

export const Logo = styled.img`
  height: 40px;
  width: 130px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Card = styled.img`
  border-radius: 20px;
  position: relative;
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  max-height: 174px;
  padding: 0;

  @media (max-width: 600px) {
    max-width: 200px;
    max-height: 120px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    z-index: 99;
  }

  &:first-of-type {
    margin-left: 30px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 30px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  /* transition: background-color 0.5s ease; */
  a:link {
    text-decoration: none;
  }
  ${tw`
      ml-12
      border-0
      rounded-lg
      font-bold
      text-black
      text-xl 
      mt-2 
      cursor-pointer
      py-2
      px-4
      max-w-[120px]
      bg-white
      hover:bg-[#e85a24]
      hover:text-white
  `}
`;
