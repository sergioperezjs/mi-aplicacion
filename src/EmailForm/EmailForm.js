import React, { useState } from 'react';

  function EmailForm({ onEmailSubmitt }) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() !== '') {
      onEmailSubmitt(email);
      setEmail('');
      setSubmitted(true);
    }
  };
  function handleInputChange(event) {
    setEmail(event.target.value);
    setSubmitted(false); // Reinicia el estado de submitted al cambiar el comentario
  }


  const handleClear = () => {
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" value={email} onChange={handleInputChange} />
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleClear}>Borrar</button>
      {submitted && <p>Comentario enviado</p>}
    </form>
  );
}

export default EmailForm;