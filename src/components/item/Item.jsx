import React from 'react';
import styled, { css } from 'styled-components';

export default function Item({
  itemData = {},
  thumbnailWidth,
  showName,
  bookmarkList,
  onClick = () => {},
}) {
  const { name, thumbnail } = itemData;
  const isBookmark = bookmarkList?.map((listItem) => listItem.sortId).includes(itemData?.sortId);

  return (
    <li className={isBookmark ? 'active' : ''}>
      <ThumbBox type="button" onClick={() => onClick(itemData)}>
        <ItemThumb thumbnailWidth={thumbnailWidth} isBookmark={isBookmark}>
          <i
            className="thumb"
            style={{
              backgroundImage: `url(${thumbnail ? thumbnail : 'images/image_no.png'})`,
            }}
          >
            <p className="blind">{name ? name : ''}</p>
          </i>
        </ItemThumb>
        {showName && name && (
          <ItemInfo thumbnailWidth={thumbnailWidth}>
            <p className="ellipsis">{name}</p>
          </ItemInfo>
        )}
      </ThumbBox>
    </li>
  );
}

const ThumbBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const ItemThumb = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: ${(props) => props.thumbnailWidth && `${props.thumbnailWidth}rem`};
  background-color: transparent;
  overflow: hidden;

  .thumb {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto 100%;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  ${(props) =>
    props.isBookmark &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6) url(images/icon_star_on.png) no-repeat 50% / 3rem;
      }
    `}
`;

const ItemInfo = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #060b11;

  span {
    display: block;
    font-size: 1.2rem;
    font-weight: initial;
    color: #060b11;
    opacity: 0.5;
  }

  .ellipsis {
    width: ${(props) => props.thumbnailWidth && `${props.thumbnailWidth}rem`};
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
