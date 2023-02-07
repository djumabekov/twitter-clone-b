import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu />
      <Home />
    </div>
  );
}

export default App;
