import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
  return (
    <LinkBox>
      <li>
        <Link to={'/bookmark'}>북마크 페이지</Link>
      </li>
      <li>
        <Link to={'/rolling'}>롤링 페이지</Link>
      </li>
    </LinkBox>
  );
}

const LinkBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  li {
    width: 100%;

    a {
      display: block;
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
      font-size: 2rem;
      font-weight: 800;
      color: #000;
      background-color: #efce4a;
      text-align: center;
      border-radius: 3rem;
    }

    + li {
      margin-top: 2rem;
    }
  }
`;
