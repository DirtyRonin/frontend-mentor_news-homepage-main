import React from 'react';
import IconLogo from './assets/images/logo.svg';
import './App.css';
import { Navigation } from './components/navigation';
import { LandingPage } from './pages/landing-page';

function App() {
  const [state, dispatch] = React.useState({
    showSidebar: false,
    breakpoint: 900,
  });

  const setUiActivity = (showSidebar: boolean): void => dispatch((prevState) => ({ ...prevState, showSidebar }));

  return (
    <>
      <div id="app" >
        <div id="content-container" className={`${state.showSidebar ? 'blured' : ''}`}>
          <header className={`app-header`}>
            <img alt="" src={IconLogo} />
            <Navigation breakpoint={state.breakpoint} onSidebarMenuChanging={setUiActivity} direction="horizontal" expandMenu={state.showSidebar} />
          </header>
          <nav></nav>
          <main>
            <LandingPage />
          </main>
          <footer></footer>
        </div>
        <div id="sidebar" className={`sidebar ${state.showSidebar ? '' : 'hidden'}`}>
          <Navigation breakpoint={state.breakpoint} onSidebarMenuChanging={setUiActivity} direction="vertical" expandMenu={state.showSidebar} />
        </div>
      </div>
    </>
  );
}

export default App;
