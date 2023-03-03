import IconLogo from './assets/images/logo.svg';
import './App.css';
import { Navigation } from './components/navigation';
import { LandingPage } from './pages/landing-page';

function App() {
  return (
    <div id='app'>
      <header className="app-header">
        <img alt="" src={IconLogo} />
        <Navigation />
      </header>
      <nav></nav>
      <main>
        <LandingPage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
