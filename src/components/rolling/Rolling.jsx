import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Item from '../item/Item';
import DummyItems from 'data/dummyItems.json';

export default function Rolling({ getSelectedItem }) {
  const itemsLength = DummyItems.length;

  const rollingRef = useRef();
  const [rollingItems, setRollingItems] = useState([]);

  const initRollingItems = () => {
    let newArray = [];

    for (let i = 0; i < 3; i++) {
      DummyItems?.map((item) => {
        return newArray.push(item);
      });
    }

    setRollingItems(newArray);
  };

  const activeRolling = (targetIndex) => {
    let rollingCount = 1;
    let cardItemWidth = 124;
    let cardMargin = 20;
    let cardWidth = cardItemWidth + cardMargin;
    let rollingWidth = rollingCount * itemsLength * cardWidth;
    let stopPosition = rollingWidth + targetIndex * cardWidth - cardItemWidth;

    rollingRef.current.style = `transition-duration: 3s; transform: translate3d(-${stopPosition}px, 0px, 0px);`;

    const selectTimer = setTimeout(function () {
      getSelectedItem(DummyItems[targetIndex]);
    }, 3000);

    return () => {
      clearTimeout(selectTimer);
    };
  };

  useEffect(() => {
    initRollingItems();
  }, []);

  useEffect(() => {
    if (rollingItems.length > 0) {
      const targetIndex = Math.floor(Math.random() * (itemsLength - 1) + 1) - 1;
      activeRolling(targetIndex);
    }
  }, [rollingItems]);

  return (
    <RollingBox>
      <ul ref={rollingRef}>
        {rollingItems.length > 0 &&
          rollingItems.map((item, index) => {
            return <Item key={index} itemData={item} thumbnailWidth={12.4} />;
          })}
      </ul>
    </RollingBox>
  );
}
const RollingBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 37.5rem;
  margin: 0 auto;
  overflow: hidden;

  ul {
    display: flex;

    li {
      flex: 0 0 12.4rem;
      margin: 0 2rem 2rem 0;
      text-align: center;
      box-sizing: border-box;
    }
  }
`;
