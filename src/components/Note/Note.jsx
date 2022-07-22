import { Card, CardHeader, CardContent, Typography, Button } from '@mui/material';

const Note = ({ note, handleDelete }) => {
  return (
    <Card>
      <CardHeader 
        title={note.title}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' noWrap={false}>
          {note.content}
        </Typography>
      </CardContent>
      <Button
        onClick={() => handleDelete(note.title)}
        color='error' 
        fullWidth
      >
        delete
      </Button>
    </Card>
  );
}

export default Note;