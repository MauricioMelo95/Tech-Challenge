import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import MainApp from './MainApp';
import './MainApp.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
      padding: '0px 0px 15px 0px',
      borderRadius: '0px',
      
    },
    
  };

export const NewAcccount = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
      };

     const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };
  
    const handleChange = event => {
  
      if (!isValidEmail(event.target.value)) {
        setError('Usa el formato de email correcto ejemplo@hola.com');
        //document.querySelector('.image')
        document.getElementById('imageNA').style.backgroundImage="url(https://www.segundamano.mx/static/img/Icon_UI_Error.484e8b00.svg)";
      } else {
        setError(null);
        document.getElementById('imageNA').style.backgroundImage="url(https://www.segundamano.mx/static/img/Icon_UI_Check_Success.1a6f245a.svg)";
      }
  
      setEmail(event.target.value);
    };


    const handleClickStartSession = () =>{
        closeModal();
        setIsShown(current => !current);

    };

  return (
    <>
    {isShown && <MainApp/>}
    <Modal
    isOpen={isOpen} 
    onRequestClose={closeModal}
    contentLabel="New Account Modal"
    style={customStyles}
    >
     <div className='close-div'>
          <img className='close-icon' alt='close icon' onClick={closeModal} src='http://www.segundamano.mx/static/img/icon_close.cfa5fef3.svg'/>
        </div>

        <div className='main-div'>

            <h1>Crear una cuenta</h1>
          <form>
            <div className='email-input'> 
              <input type="text" id="email" name="email" placeholder='Tu correo electrónico' className='email-input' value={email} onChange={handleChange}/>   
              {error && <p className='validate-label'>{error}</p>}   
              <span id='imageNA' className='image'></span>    
            </div>

            <div className='password-input' >
                <input type="password" placeholder='Tu contraseña' className='current-password' />
          </div>

          <div className='repeat-password-input'>
                <input type="password" placeholder='Repite tu contraseña' className='repeat-password' />
          </div>

            <div className='submit-button'>
              <button type='submit'>Entra</button>
            </div>
          </form>

      </div>
      <div className='footer'>
            <p>¿Ya tienes cuenta? <a className='new-account' onClick={handleClickStartSession}>Inicia sesión</a></p>           
          </div>
</Modal>
    </>
  )
}

export default NewAcccount;