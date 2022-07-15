import React from 'react'
import Formulario from  './../../components/Formulario'
import{ makeStyles} from '@material-ui/core'


const estilos = makeStyles(theme =>({

      mTopform: {
        marginTop: 120,
        alignItems: 'center',
        marginLeft: 300,
      },
      container: {
          display: 'flex',
          alignItems: 'center',
      }
}))


const MisDatos = () => {

    const classes = estilos()

    return (
        <div className={classes.container}>
            <section className={classes.mTopform}>
             <Formulario/>
            </section>
        </div>
    )
}

export default MisDatos
