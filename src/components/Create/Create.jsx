import { useState } from 'react';
import {TextField, Button, Typography} from '@mui/material';
import './create.css';

const Create = ({ handleCreate, notes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    setTitleError(false);
    setContentError(false);
    setErrorMessage('');

    if(!title){
      setTitleError(true);
    }
    if(!content){
      setContentError(true);
    }

    if(title && content){
      if(notes) {
        if(notes.find(i => i.title === title)){
          setErrorMessage('* This note is already added');
          setTitleError(true);
        }else{
          const obj = {
            title,
            content
          }
          handleCreate(obj);
          setTitle('');
          setContent('');
        }
      }
    }
  }

  const reset = () => {
    setTitle('');
    setContent('');
  }

  return (
    <div className='create'>
      <Typography 
        variant='h2'
        color='textPrimary'
        gutterBottom
      >
        Create Note
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          onChange={({target}) => setTitle(target.value)}
          value={title}
          type='text'
          label='Title'
          variant='filled' 
          fullWidth
          margin='normal'
          error={titleError}
          helperText={errorMessage}
        />
        <br />
        <TextField 
          onChange={({target}) => setContent(target.value)}
          value={content}
          type='text' 
          label='Content' 
          variant='filled' 
          fullWidth
          margin='normal'
          multiline
          rows={4}
          error={contentError}
        />
        <br />
        <Button 
          type='submit'
          color='success'
        >
          create
        </Button>
        <Button
          onClick={reset}
          color='error'
        >
          reset
        </Button>
      </form>
    </div>
  )
}

export default Create