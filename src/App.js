import React from 'react';
import {
  Layout, Header, Navigation, Drawer, Content,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.scss';

/* FIXME */
/* NO VALIDATION, NO STYLES */
function App() {
  return (
    <div id="custom-styles" className="App">
      <div>
        <Layout style={{ background: 'silver' }}>
          <Header
            transparent
            title={<Link to="welcome">my page</Link>}
            style={{
              color: 'white', fontFamily: 'Quicksand', textTransform: 'uppercase', paddingLeft: '30px',
            }}
          >
            <Navigation>
              <Link to="/welcome">welcome</Link>
              <Link to="/clients">clients</Link>
              <Link to="/contacts">contacts</Link>
              <Link to="/signIn">Sign In</Link>
              <Link to="/logIn">Log In</Link>
            </Navigation>
          </Header>
          <Drawer title="my page" style={{ color: 'black', fontFamily: 'Quicksand', textTransform: 'uppercase' }}>
            <Navigation>
              <Link to="/clients">clients</Link>
              <Link to="/contacts">contacts</Link>
              <Link to="/signIn">Sign In</Link>
              <Link to="/logIn">Log In</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
