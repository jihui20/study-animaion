import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useReward } from 'react-rewards';
import Header from 'components/Header';
import Item from '../item/Item';

export default function SelectedItem({ isSelectedItem }) {
  const [isMount, setIsMount] = useState(false);
  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  useEffect(() => {
    setIsMount(true);
    reward();
  }, []);

  return (
    <SelectedItemBox className={isMount ? 'active' : ''}>
      <Header />
      <ul>
        <Item itemData={isSelectedItem} thumbnailWidth={18.6} />
      </ul>
      <RewardId id="rewardId" style={{ width: 2, height: 2 }} />
    </SelectedItemBox>
  );
}

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SelectedItemBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;

  z-index: 10;
  overflow: hidden;

  &.active {
    animation: ${FadeInAnimation} 1.5s;
  }

  ul {
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;

    li {
      flex: 0 0 18.6rem;
    }
  }
`;

const RewardId = styled.span`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;
