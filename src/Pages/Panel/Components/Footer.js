import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Header = (props) => {
  const { t } = useTranslation()
  const { back, next } = props

  return (
    <Container>
      <Content {...props}>
        {back && <Btn onClick={() => back()}>{t('buttons.back')}</Btn>}
        <ChildrenContainer>{props.children}</ChildrenContainer>
        {next && <Btn onClick={() => next()}>{t('buttons.next')}</Btn>}
      </Content>
    </Container>
  )
}

const Btn = styled(Button)`
  marginleft: auto;
  margin: 0.5rem;
  background: ${(props) => props.theme.palette.primary.main};
  minwidth: 130px;
`

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: ${(props) => props.theme.headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ChildrenContainer = styled.div`
  flex-grow: 1;
`

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export default Header
