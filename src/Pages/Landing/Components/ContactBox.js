import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactBox = (props) => {
  const { t } = useTranslation()
  const { icon, imgurl, name, address, tel, mail, time } = props
  return <div>{`${t('office')} ${name}`}</div>
}

export default ContactBox
