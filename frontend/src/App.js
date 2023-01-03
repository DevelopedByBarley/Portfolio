import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Navigation } from './components/Navigation';
import { Header } from './layouts/Header';
import { About } from './layouts/About';
import { Services } from './layouts/Services';
import { Loader } from './components/Loader';
import { Works } from './layouts/Works';
import { Skills } from './layouts/Skills';
function App() {
  return (
    <div className="App">
      <Loader />
      <Container>
        <Navigation />
        <Header />
        <About />
        <Services />
        <Works/>
        <Skills/>
      </Container>
    </div>
  );
}

export default App;
