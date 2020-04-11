import React from 'react'

const ContactBox = (props) => {
  const { icon, imgurl, name, address, tel, mail, time } = props
  return <div>{name}</div>
}

export default ContactBox
