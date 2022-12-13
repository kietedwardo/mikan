import styled from "styled-components/macro";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
    flex 
    flex-col 
    justify-center 
    items-center 
    m-auto
    max-w-[80%]
  `}
`;

export const Title = styled.h1`
  ${tw`
      w-full 
      text-white
      text-5xl 
      text-center 
      font-medium
  `}
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Image} {
    border: 3px solid white;
  }
  /* &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  } */
`;
