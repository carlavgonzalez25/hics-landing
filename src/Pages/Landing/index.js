import React, { useState } from 'react'
import Header from './Sections/Header'
import MySlider from './Sections/Slider'
import Service from './Components/Service'
import ContactUs from './Sections/ContactUs'
import PartnersFooter from './Sections/PartnersFooter'
import ReactPageScroller from 'react-page-scroller'
import { useTranslation } from 'react-i18next'
import { servicios_1, servicios_2, servicios_3, bg_contactForm } from 'img'
import 'style.css'

const Landing = () => {
  const handlePageChange = (number) => {
    setLocalCurrentPage(number)
  }
  const [localCurrentPage, setLocalCurrentPage] = useState(null)
  const { t } = useTranslation()

  return (
    <div className="Landing">
      <Header moveScroller={handlePageChange} />
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={localCurrentPage}>
        <MySlider />
        <Service
          title={t('services.title_construction')}
          text={t('services.text_construction')}
          img={servicios_1}
          layout="Construction"
          sectionTitle={t('services.title')}
        />
        <Service
          title={t('services.title_urbanDevelopment')}
          text={t('services.text_urbanDevelopment')}
          img={servicios_2}
          layout="Development"
          sectionTitle={t('services.title')}
        />
        <Service
          title={t('services.title_loans')}
          text={t('services.text_loans')}
          sectionTitle={t('services.title')}
          img={servicios_3}
          layout="Loans"
        />
        <ContactUs title="Contact Us" img={bg_contactForm} />
        <PartnersFooter moveScroller={handlePageChange} />
      </ReactPageScroller>
    </div>
  )
}
export default Landing
