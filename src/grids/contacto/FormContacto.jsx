import React, { useState } from 'react'
import Swal from 'sweetalert2';

const FormContacto = () => {

  const initialFormData = {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setFormData(initialFormData);
    mostrarMensajeExito();
  }

  //Pueden cambiar el text si quieren.
  const mostrarMensajeExito = () => {
    Swal.fire({
      title: '¡Formulario enviado!',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#55AECA",
    });
  };

  return (
    <div className="contacto-container">
      <h2 className="contacto-titulo">Contacto</h2>
      <form onSubmit={handleSubmit} method="POST">

        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            id='inputNombre'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label"></label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            id='inputMail'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label"></label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Dejanos tu consulta"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            id='inputMensaje'
          ></textarea>
        </div>
        <input className="btn btnEnviar" type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default FormContacto