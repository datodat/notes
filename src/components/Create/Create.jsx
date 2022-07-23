import { useState } from 'react';
import {
  TextField, 
  Button, 
  Typography, 
  RadioGroup, 
  Radio, 
  FormControlLabel, 
  FormControl, 
  FormLabel} from '@mui/material';
import './create.css';

const Create = ({ handleCreate, notes }) => {
  // Note title
  const [title, setTitle] = useState('');
  // Note content
  const [content, setContent] = useState('');
  // Note category
  const [category, setCategory] = useState('reminders');
  // Error if input is empty on submit
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  // Error message
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    // Resetting errors on submit
    setTitleError(false);
    setContentError(false);
    setErrorMessage('');
    // Checking title
    if(!title){
      setTitleError(true);
    }
    // Checkig content
    if(!content){
      setContentError(true);
    }

    if(title && content){
      if(notes) {
        if(notes.find(i => i.title === title.trim())){
          setErrorMessage('* This note is already added');
          setTitleError(true);
        }else{
          const obj = {
            title: title.trim(),
            content: content.trim(),
            category
          }
          handleCreate(obj);
          setTitle('');
          setContent('');
        }
      }
    }
  }

  // Reset button
  const reset = () => {
    setTitle('');
    setContent('');
    setCategory('reminders');
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
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup 
            value={category} 
            onChange={({target}) => setCategory(target.value)}
          >
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
            <FormControlLabel value='money' control={<Radio />} label='Money' />
          </RadioGroup>
        </FormControl>
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
  );
}

export default Create;