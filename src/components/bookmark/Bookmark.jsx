import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Item from '../item/Item';
import DummyItems from 'data/dummyItems.json';

export default function Bookmark({ getBookmarkList }) {
  const didMount = useRef(false);
  const [bookmarkList, setBookmarkList] = useState([]);

  const bookmarkItems = (target) => {
    const isTarget = bookmarkList.map((listItem) => listItem.sortId).includes(target.sortId);

    if (isTarget) {
      setBookmarkList(bookmarkList.filter((item) => item.sortId !== target.sortId));

      return;
    }

    setBookmarkList((prevState) => [...prevState, target]);
  };

  useEffect(() => {
    if (didMount.current && bookmarkList.length >= 0) {
      getBookmarkList(bookmarkList);

      return;
    }

    didMount.current = true;
  }, [bookmarkList]);

  return (
    <BookmarkBox>
      {DummyItems?.map((item) => (
        <Item
          key={item.sortId}
          itemData={item}
          thumbnailWidth={10}
          showName
          bookmarkList={bookmarkList}
          onClick={bookmarkItems}
        />
      ))}
    </BookmarkBox>
  );
}

const BookmarkBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 38rem;
  margin: 6.4rem auto 5.4rem;
  box-sizing: border-box;

  li {
    flex: 0 0 10rem;
    margin-bottom: 2rem;
    text-align: center;
    box-sizing: border-box;
  }
`;
