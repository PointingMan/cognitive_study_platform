import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';
import ProfileButton from '../../../GeneralComponents/ProfileButton'


function Logic(props){
  const history = useHistory();
  return (
    <>
      <div className = "logic-menu-container">
        <MenuButton url = "/interactive/logic/logical_puzzles" 
        colorOfText = "white" 
        left = "43vw"
        name = "Puzzles" onClick = {() => {
          history.push('/interactive/logic/logical_puzzles')
        }}/>

        <MenuButton url = "/interactive/logic/number_sequence" 
        colorOfText = "white" 
        name = "Number Sequence"
        left = "63vw" onClick = {() => {
          history.push('/interactive/logic/number_sequence')
        }}/>

        <ProfileButton/>
      </div>

      <Route exact path = {'/interactive/logic'}>
        <div id = "Header-container">
          <div className = "logic-header">
            Welcome to the logic page
          </div>,
          <div className = "logic-header">
            <h2>Choose category above to get started!</h2>
          </div>
        </div>
      </Route>
    </>
  );
}

export default Logic;
