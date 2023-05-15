import React from 'react';
import styled, { css } from 'styled-components';
import Item from '../item/Item';

export default function Button({ bookmarkList }) {
  const bookmarkCount = bookmarkList?.length;
  const isActive = bookmarkCount >= 3;

  return (
    <FloatingButton>
      <a className={isActive ? 'active' : ''}>
        <ItemThumbBox selectCount={bookmarkCount > 3 ? bookmarkCount - 2 : null}>
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <Item
                  key={index}
                  itemData={
                    bookmarkList?.[index] ? { thumbnail: bookmarkList?.[index]?.thumbnail } : {}
                  }
                  thumbnailWidth={3.4}
                />
              );
            })}
        </ItemThumbBox>
        <p>{isActive ? '선택 완료!' : '3개이상 선택하세요'}</p>
      </a>
    </FloatingButton>
  );
}

const FloatingButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 3rem;
  left: 0;
  margin: auto;
  padding: 0 1rem;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 34rem;
    width: 100%;
    height: 6rem;
    margin: auto;
    font-size: 1.6rem;
    background-color: #fff9bf;
    border-radius: 3.2rem;
    line-height: 6rem;
    cursor: pointer;

    p {
      flex: 0 0 auto;
      color: #060b11;
      opacity: 0.24;
    }

    &.active {
      background-color: #efce4a;

      p {
        opacity: 1;
      }
    }
  }
`;

const ItemThumbBox = styled.ul`
  flex: 0 0 auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 9.4rem;
  height: 3.4rem;
  margin-right: 0.8rem;
  box-sizing: border-box;

  li {
    flex: 0 0 3.4rem;
    position: relative;
    box-sizing: border-box;
    z-index: 3;

    ${(props) =>
      props.selectCount &&
      css`
        &:first-child div::after {
          content: '${`+${props.selectCount}`}';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-weight: 800;
          color: #fff;
          line-height: 3.4rem;
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}

    + li {
      z-index: 2;
    }

    &:last-child {
      z-index: 1;
    }
  }
`;
