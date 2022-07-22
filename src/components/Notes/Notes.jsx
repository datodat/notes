import { Grid, Typography } from '@mui/material';
import Note from '../Note/Note';
import './notes.css';

const Notes = ({ notes, handleDelete }) => {
  return (
    <div className='notes'>
      <Typography variant='h2' color='textPrimary' gutterBottom>
        Notes
      </Typography>
      <Grid container spacing={4}>
        {notes?.length > 0 && notes.map((i, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Note note={i} handleDelete={handleDelete} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Notes;