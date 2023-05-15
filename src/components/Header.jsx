import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderLayout>
      <CancelButton>
        <Link to={'/'}>
          <span className="blind">닫기</span>
        </Link>
      </CancelButton>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0 1rem 1.5rem;
  box-sizing: border-box;
`;

const CancelButton = styled.div`
  a {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    padding: 1rem;
    background: url(images/icon_cancel.png) no-repeat 50% / 2.4rem auto;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;
