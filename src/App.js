import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';

import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <Container>
        {/* Navbar */}
        <Navigation />
      </Container>
    </Router>
  );
}

export default App;