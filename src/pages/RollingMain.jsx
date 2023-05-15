import { useState } from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Rolling from 'components/rolling/Rolling';
import SelectedItem from 'components/rolling/SelectedItem';

export default function RollingMain() {
  const [isSelectedItem, setIsSelectedItem] = useState(null);

  const getSelectedItem = (value) => {
    setIsSelectedItem(value);
  };

  return (
    <>
      <Layout>
        <TitleBox>
          <Title>당첨된 아이템은?</Title>
        </TitleBox>
        <RollingBox active={isSelectedItem}>
          <Rolling getSelectedItem={getSelectedItem} />
        </RollingBox>
      </Layout>
      {isSelectedItem && <SelectedItem isSelectedItem={isSelectedItem} />}
    </>
  );
}

const TitleBox = styled.div`
  position: relative;
  padding-bottom: 2.2rem;
  background-color: #fff;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -3rem;
    left: 0;
    margin: auto;
    width: 6rem;
    height: 5.6rem;
    background: url(images/ico_triangle.png) no-repeat 50% / 100% auto;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  color: #060b11;
  line-height: 1.5;
`;

const RollingBox = styled.div`
  position: relative;
  width: 100%;
  padding: 10rem 0 0;
  height: 100vh;
  background-color: ${(props) => `rgba(239, 206, 74, ${props.active ? 0.5 : 1})`};
`;
