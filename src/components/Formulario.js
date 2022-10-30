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

        const actualizarState = () => {
            console.log('escrbiendo....');
        }
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
                    />

                <label>Nombre del Dueño</label>
                <input
                    type= "text"
                    name="propietario"
                    className="u-full-width"
                    placeholder='Nombre de dueño de la mascota'
                    onChange={actualizarState}
                    />

                 

                <label>Fecha</label>
                <input
                    type= "date"
                    name="fecha"
                    className="u-full-width"  
                    onChange={actualizarState}                 
                    />

                <label>Hora</label>
                <input
                    type= "time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}                  
                    />
 
                <label>Síntomas</label>
               <textarea  className = "u-full-width"
                 name= 'sintomas'  onChange={actualizarState}>  
                               
               </textarea>

               <button type='submiit' className='u-full-width button-primary'>Agregrar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;