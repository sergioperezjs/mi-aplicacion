import React, { useState } from 'react';

function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      onCommentSubmit(comment);
      setComment('');
      setSubmitted(true);
    }
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
    setSubmitted(false); // Reinicia el estado de submitted al cambiar el comentario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comentario:</label>
      <textarea id="comment" value={comment} onChange={handleInputChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CommentForm;