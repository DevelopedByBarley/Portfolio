import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Navigation } from './components/Navigation';
import { Header } from './layouts/Header';
import { About } from './layouts/About';
function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Header />
        <About />
      </Container>
    </div>
  );
}

export default App;
