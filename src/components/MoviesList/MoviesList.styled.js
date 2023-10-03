import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  width: 700px;
  background-color: #CD853F;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  list-style: none;
`;
export const MoviesListLink = styled(Link)`
  display: block;
  color: #FFF5EE;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  max-width: 500px;
  decoration: none;
  transition: 350ms color, font-weight, ease-in;

  &:is(:hover, :focus) {
    color: black;
    font-weight: 600;
    list-style: none;
  }
`;

export const MoviesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
    text - decoration: none;
    list-style: none;
  }
`;