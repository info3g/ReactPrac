import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { faFacebookF,faInstagram,faGoogle,faTwitter } from '@fortawesome/free-brands-svg-icons' 
library.add(faFacebookF,faInstagram,faGoogle,faTwitter);

// library.add(faInstagram); 
function Footer() {
    return <div>
        <div className='row'>
            <div className='col-md-3'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></div>
            <div className='col-md-3'><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
            <div className='col-md-3'><FontAwesomeIcon icon={['fab', 'google']} /></div>
            <div className='col-md-3'><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
        </div>
    </div>    
}
export default Footer