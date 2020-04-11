import React from 'react'

const ContactBox = (props) => {
  const { imgurl, name, address, tel, mail, time } = props
  return <div>{name}</div>
}

export default ContactBox
