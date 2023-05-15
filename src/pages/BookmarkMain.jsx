import { useState } from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Bookmark from 'components/bookmark/Bookmark';
import Button from 'components/bookmark/Button';

export default function BookmarkMain() {
  const [bookmarkList, setBookmarkList] = useState([]);

  const getBookmarkList = (list) => {
    setBookmarkList(list);
  };

  return (
    <Layout padding={'0 2.4rem 6rem'}>
      <Title>클릭으로 북마크 해보세요!</Title>
      <Bookmark getBookmarkList={getBookmarkList} />
      <Button bookmarkList={bookmarkList} />
    </Layout>
  );
}

const Title = styled.h3`
  font-size: 3.2rem;
  color: #060b11;
  line-height: 1.3;
`;
