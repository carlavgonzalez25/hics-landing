import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { logo_hicsvyda } from 'img'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '13vh',
    backgroundColor: '#C6CED3',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    [theme.breakpoints.up('md')]: {
      padding: '0.8rem 6rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2rem 6rem',
    },
  },
  containerLogoMenu: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      /*borderBottom: 'solid 1px #868686',*/
    },
  },

  img: {
    margin: '0 1rem',
    width: '200px',
  },
  menu: {
    borderLeft: 'solid 1px #868686',
    [theme.breakpoints.up('md')]: {
      borderLeft: 'none',
    },
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '2rem',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
      '& li': {
        marginRight: '2rem',
        flexGrow: '2',
        textTransform: 'uppercase',
        color: '#586066',
        marginBottom: '0.3rem',
        [theme.breakpoints.up('md')]: {
          marginBottom: '0',
        },
      },
    },
  },

  containerLogin: {
    flexGrow: '1',
    justifyContent: 'flex-end',
    marginRight: '2rem',
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      borderBottom: 'solid 1px #868686',
    },
  },
  link: {
    cursor: 'pointer',
  },
  button: {
    height: '40px',
    width: '140px',
    borderRadius: '0px',
  },
}))

const Footer = ({ moveScroller }) => {
  const { t } = useTranslation()

  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Grid item className={classes.containerLogoMenu}>
        <Grid item className={classes.logo}>
          <img src={logo_hicsvyda} alt="Logo hics capital" className={classes.img} />
        </Grid>
        <Grid item className={classes.menu}>
          <ul>
            <li>
              <div className={classes.link} onClick={() => moveScroller(0)}>
                {t('home')}
              </div>
            </li>
            <li>
              <div className={classes.link} onClick={() => moveScroller(1)}>
                {t('services.title')}
              </div>
            </li>
            <li>
              <div className={classes.link} onClick={() => moveScroller(4)}>
                {t('contact.title')}
              </div>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
