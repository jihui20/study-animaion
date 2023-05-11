import GlobalStyle from 'assets/styles/GlobalStyle';
import Router from 'common/Router';
import Header from 'components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
    </>
  );
}

export default App;
