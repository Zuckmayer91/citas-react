import React, {Fragment, useState} from 'react'
import {v4 as uuidv4} from 'uuid';


let myuuid = uuidv4();



const Formulario = ({crearCita}) => {

    // Crear state de citas
    const[cita, actualizarCita] = useState ({
        mascota: '',
         propietario: '',
         fecha:'',
         hora:'',
         sintomas:'',    
        
        });

        const[error, actualizarError] = useState (false)

        const actualizarState = e => {
           actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
           })
        }

        // Extraer los valores

        const { mascota, propietario, fecha, hora, sintomas} = cita;

        // cuando el usuario oprime el boton sucede alggun evento

        const submitCita = e => {
           e.preventDefault();
           console.log(mascota);

        // Validar

         if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
         }
        
        //  Eliminar el mensaje previo 

        actualizarError(false);
         
        // Asignar id
         cita.id = uuidv4();
        
        // Crear la cita
         crearCita(cita);
         
        // Reiniciar el formulario
        }
    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form 
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type= "text"
                    name="mascota"
                    className="u-full-width"
                    placeholder='Nombre de mascota'
                    onChange={actualizarState}
                    value={mascota}
                    />

                <label>Nombre del Dueño</label>
                <input
                    type= "text"
                    name="propietario"
                    className="u-full-width"
                    placeholder='Nombre de dueño de la mascota'
                    onChange={actualizarState}
                    value={propietario}
                    />

                 

                <label>Fecha</label>
                <input
                    type= "date"
                    name="fecha"
                    className="u-full-width"  
                    onChange={actualizarState}
                    value={fecha}                 
                    />

                <label>Hora</label>
                <input
                    type= "time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={hora}                 
                    />
 
                <label>Síntomas</label>
               <textarea  className = "u-full-width"
                 name= 'sintomas'  onChange={actualizarState}  value={sintomas}>  
                               
               </textarea>

               <button type='submiit' className='u-full-width button-primary'>Agregrar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;