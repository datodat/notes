import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Navigation from './components/Navigation/Navigation';
import Create from './components/Create/Create';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleCreate = obj => {
    setNotes(notes.concat(obj));
  }

  return (
    <Router>
      <Container>
        {/* Navbar */}
        <Navigation />

        <Routes>
          <Route path='/' element={<Create handleCreate={handleCreate} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;