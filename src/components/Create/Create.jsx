import { useState } from 'react';
import {TextField, Button, Typography} from '@mui/material';
import './create.css';

const Create = ({ handleCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  
  const handleSubmit = e => {
    e.preventDefault();
    setNameError(false);
    setDescriptionError(false);

    if(!name){
      setNameError(true);
    }
    if(!description){
      setDescriptionError(true);
    }

    if(name && description){
      const obj = {
        name,
        description
      }
      handleCreate(obj);
      setName('');
      setDescription('');
    }
  }

  const reset = () => {
    setName('');
    setDescription('');
  }

  return (
    <div className='create'>
      <Typography 
        variant='h2'
        color='textPrimary'
        gutterBottom
      >
        create note
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          onChange={({target}) => setName(target.value)}
          value={name}
          type='text'
          label='name'
          variant='filled' 
          fullWidth
          margin='normal'
          error={nameError}
        />
        <br />
        <TextField 
          onChange={({target}) => setDescription(target.value)}
          value={description}
          type='text' 
          label='description' 
          variant='filled' 
          fullWidth
          margin='normal'
          multiline
          rows={4}
          error={descriptionError}
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