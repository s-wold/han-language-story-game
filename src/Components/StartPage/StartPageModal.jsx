import React from 'react'
import './StartPageModal.scss'

function StartPageModal({setOpenModal}) {
  


  return (
    <div className='modal__background'>
      <div className='modal__container'>
        <div className='modal__title'>
          Hän Language Game
        </div>
       
        <div className='modal__text-info'>
          Welcome to the story! 
          <br />
          <br />
          Hän language is an endangered language from the Yukon Territory, Canada, with only around 10 fluent speakers left.  
          
          <br />
          <br />
          Directions: Fill in the blank with the right word to continue the story. 
          <br />
          Spelling counts here.
        
        </div>
         <button 
         className='modal__start-btn'
         onClick={()=>{setOpenModal(false)}}
         >Start Game</button>
        <div className='modal__credits'>
          <p>Credits to: Erika Scheffen and the TH Heritage Department</p>
        </div>
      </div>
      
    </div>

  )
}

export default StartPageModal