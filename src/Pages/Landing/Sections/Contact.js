import React from 'react'
//Config
import contactInfo from 'config/contact'

//Components
import ContactBox from '../Components/ContactBox'

const Contact = () => {
  return (
    <div>
      Contact section
      {contactInfo.map((info) => (
        <ContactBox {...info} />
      ))}
    </div>
  )
}

export default Contact
