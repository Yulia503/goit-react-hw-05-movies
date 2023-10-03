import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LinkBack = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 10px;
  background: #FFA500;
  color: 0;
  padding: 10px 16px;
  font-size: 1rem;
  cursor: pointer;
  list-style: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: #8B4513;
    color: white;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieWrap = styled.div`
  background: #FFDEAD;
  color: black;
display:flex;
list-style: none;
text - decoration: none;
`

export const MovieInfoWrap = styled.div`
margin-left: 20px;
text - decoration: none;

`

export const GenresList = styled.ul`
display:flex;
list-style:none;
gap: 10px;
padding:0;
text - decoration: none;
`



