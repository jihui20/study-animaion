import React from 'react';
import styled from 'styled-components';

export default function Layout({ children, padding }) {
  return (
    <MainLayout padding={padding}>
      <div className="inner">{children}</div>
    </MainLayout>
  );
}

const MainLayout = styled.main`
  width: 100%;
  text-align: center;
  background-color: #fff;

  .inner {
    width: 100%;
    margin: 0 auto;
    padding: ${(props) => props.padding || 0};
    box-sizing: border-box;
  }
`;
