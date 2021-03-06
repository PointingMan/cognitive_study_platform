import React from 'react';
import './index.css';
import palace from '../../../../assets/palace.png'
import GeneralButton from '../../../../GeneralComponents/GeneralButton';
import {useHistory, Route} from 'react-router-dom';


function MemoryPalace(props){
  const history = useHistory();
  return (
    <>
    <div className = "memory-container">
        <div className = "welcome-text">
          Welcome to the memory palace!
        </div>
        <div>
          <img id = "image" src = {palace}></img>
        </div>

        <div className = {"Text-container"}>
          <div id = "left-btn">
          <GeneralButton name = "Create a new palace"
            size = "2.5vh" colorOfText = "white"
            onClick={() => {
              history.push(`./memory_palace/create`)
              }}/>
          </div>

          <div id = "right-btn">
          <GeneralButton name = "List of your palaces"
            size = "2.5vh" colorOfText = "white"
            onClick={() => {
              history.push(`./memory_palace/list_of_palaces`)
              }}/>
          </div>
        </div>

        <div className = {"Text-container"}>
          <div id = "left-btn">
          <GeneralButton name = "Test yourself in a chosen palace"
            size = "2.5vh" colorOfText = "white"
            onClick={() => {
              history.push(`./memory_palace/test`)
              }}/>
          </div>

          <div id = "right-btn">
            <GeneralButton name = "Learn the Memory Palace Technique"
            size = "2.5vh" colorOfText = "white"
            onClick={() => {
              history.push(`./memory_palace/learn`)
              }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemoryPalace;
