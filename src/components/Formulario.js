import React, {Fragment, useState} from 'react'

const Formulario = () => {

    // Crear state de citas
    const[cita, actualizarCita] = useState ({
        mascota: '',
         propietario: '',
         fecha:'',
         hora:'',
         sntomas:''
        
        })

        const actualizarState = e => {
           actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
           })
        }

        const { mascota, propietario, fecha, hora, sintomas} = cita;
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            <form>
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