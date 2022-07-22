import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className={opened ? 'navbar' : 'navbar hidden'}>
      {opened ?
          <i onClick={() => setOpened(!opened)} className="fa-solid fa-angle-left"></i> :
          <i onClick={() => setOpened(!opened)} className="fa-solid fa-angle-right"></i>
      }
      <div style={{ display: opened ? 'flex' : 'none'}}>
        <NavLink onClick={() => setOpened(false)} to="/">
          notes
        </NavLink>  
        <NavLink onClick={() => setOpened(false)} to="/create">
          create
        </NavLink>  
        <NavLink onClick={() => setOpened(false)} to="/about">
          about
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;