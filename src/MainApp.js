import './MainApp.css';
import Modal from 'react-modal';
import React, { useState } from 'react';

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


Modal.setAppElement('#root');


export const MainApp = () => {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(1);
  const [footerPage, setFooterPage] = useState(1);
  const [addRepeatPwd, setAddReapeatPwd] = useState(false);
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const [shownPassword, setShownPassword] = useState(false);

  

 const openModal =() => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showhide = () =>{
    const text = document.getElementById('showhide').textContent;
    if( text === 'Mostrar' ){
      setShownPassword(true);

    }
    else{
      setShownPassword(false);
    }
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = event => {

    if (!isValidEmail(event.target.value)) {
      setError('Usa el formato de email correcto ejemplo@hola.com');
      document.getElementById('image').style.backgroundImage="url(https://www.segundamano.mx/static/img/Icon_UI_Error.484e8b00.svg)";
    } else {
      setError(null);
      document.getElementById('image').style.backgroundImage="url(https://www.segundamano.mx/static/img/Icon_UI_Check_Success.1a6f245a.svg)";
    }

    setEmail(event.target.value);
  };

  const handleClickNewAccount = () =>{ 
    document.getElementById('current-password').value = '';
    setTitle(2);
    setFooterPage(2);
    setAddReapeatPwd(true);
    setButtonSubmit(true);
  };

  const handleClickStartSession = () =>{    
    document.getElementById('current-password').value = '';
    setTitle(1);
    setFooterPage(1);
    setAddReapeatPwd(false);
    setButtonSubmit(false);
};

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="Initial Modal"
        style={customStyles}
      >
        <div className='close-div'>
          <img className='close-icon' alt='close icon' onClick={closeModal} src='http://www.segundamano.mx/static/img/icon_close.cfa5fef3.svg'/>
        </div>

        <div className='main-div'>

          {
            title === 1 ?
            <h1>Iniciar sesión</h1>
            :
            <h1>Crear una cuenta</h1>
          }
          <form>
            <div className='email-input' >
              <input type="text" id="email-input" name="email" placeholder='Tu correo electrónico' className='email-input' value={email} onChange={handleChange}/>   
              {error && <p className='validate-label'>{error}</p>}   
              <span id='image' className='image'></span>      
            </div>
          <div className='password-input'>
                <input type={shownPassword ? 'text' : 'password'} id='current-password' placeholder='Tu contraseña' className='current-password' />
                { addRepeatPwd === false ? <span id='showhide' onClick={showhide} >{ shownPassword ? 'Ocultar' : 'Mostrar' }</span> : ''}
          </div>

          {
            addRepeatPwd === true ?
            <div className='repeat-password-input'>
              <input type="password" placeholder='Repite tu contraseña' className='repeat-password' />
            </div>
            :
            ''
          }

            <div className='submit-button' id=''>
                { 
                buttonSubmit === false ? 
                <button type='submit'>Entra</button>
                :
                <button type='submit'>Crear una cuenta</button>
                }
            </div>

          </form>
        </div>
          <div className='footer'>
            {
              footerPage === 1 ?
              <p>¿No tienes cuenta? <a className='new-account' onClick={handleClickNewAccount}>Crear una nueva</a></p>           
              :
              <p>¿Ya tienes cuenta? <a className='new-account' onClick={handleClickStartSession}>Inicia sesión</a></p>  
            }

            
          </div>
      </Modal>

    </div>
  );
}

export default MainApp;
