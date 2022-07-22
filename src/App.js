import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Navigation from './components/Navigation/Navigation';
import Create from './components/Create/Create';
import Notes from './components/Notes/Notes';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleCreate = obj => {
    setNotes(notes.concat(obj));
  }

  const handleDelete = title => {
    setNotes(notes.filter(i => i.title !== title));
  }

  return (
    <Router>
      <Container>
        {/* Navbar */}
        <Navigation />

        <Routes>
          <Route path='/create' element={<Create handleCreate={handleCreate} notes={notes} />} />
          <Route path='/' element={<Notes notes={notes} handleDelete={handleDelete} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;