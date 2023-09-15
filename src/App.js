import './App.css';
import FooterComponents from './components/FooterComponents';
import HeaderComponent from './components/HeaderComponent';
import ListOfEventsComponent from './components/ListOfEventsComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <ListOfEventsComponent/>
      <FooterComponents/>
    </div>
  );
}

export default App;
