import React, { useState } from 'react';
import './index.css';
import HTML5 from './imagen/HTML5.png';
import CSS3 from './imagen/CSS3.png';
import reat from './imagen/reat.png';
import Git from './imagen/Git.png';
import cypress from './imagen/cypress.png';
import CommentForm from './CommentForm/CommentForm';
import './CommentForm/CommentForm.css';

function App() {
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);


  const handleClear = () => {
    setComment('');
    setEmail('');
  };

  function handleCommentSubmit(comment) {
    setComment(comment);
    setCommentSubmitted(true);
  }

  const handleEmailSubmit = (email) => {
    setEmail(email);
    setEmailSubmitted(true);
  };

  const handleCommentClear = () => {
    setComment('');
    setCommentSubmitted(false);
  };

  const handleEmailClear = () => {
    setEmail('');
    setEmailSubmitted(false);

  };
  return (
    <div className="App">
      <div className="jumbotron">
        <p className="lead">Sergio Perez - Desarrollador Front End</p>
      </div>

      <div className="black-line"></div>

      <div className="tecn">
        <strong>Tecnologías</strong>
      </div>

      <div className="image-container">
        <img src={HTML5} alt="HTML5.png" className="image" />
        <img src={CSS3} alt="CSS3" className="image" />
        <img src={reat} alt="reat.png" className="image" />
        <img src={Git} alt="Git.png" className="image" />
        <img src={cypress} alt="cypress.png" className="image" />
      </div>

      <div className="black-line"></div>

      <div className="pro">
        <strong>Proyectos</strong>
      </div>

      <div className="pr-conter">
        <div className="box">
          <h1 className="text">App nutricion</h1>
          </div>
          <div className="not">
            <h1 className="notas">App notas</h1>
        </div>
      </div>

      <div className="black-line"></div>

      <div className="comen">
      <CommentForm
        comment={comment}
        onCommentSubmit={handleCommentSubmit}
        onCommentClear={handleCommentClear}
        submitted={commentSubmitted}
      />

      {commentSubmitted && (
        <div>
          <p>{comment}</p>
          <button type="button" onClick={handleClear}>Borrar</button>
        </div>
      )}

      {emailSubmitted && (
        <div>
          <p>{email}</p>
          <button type="button" onClick={handleClear}>Borrar</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
