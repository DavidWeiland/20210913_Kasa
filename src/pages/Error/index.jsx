import '../../styles/Error.css'
import {Link} from 'react-router-dom'
import React from 'react'

class Error extends React.Component {
  render() {
    
    return (
      <div className='body-error'>
      <h1 className='code-error'>404</h1>
      <h2 className='subtitle'>Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to='/' className='suggest'>Retourner sur la page d'acceuil</Link>
    </div>
  )
}
}

export default Error