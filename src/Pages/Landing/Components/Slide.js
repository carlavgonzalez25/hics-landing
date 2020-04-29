import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'


/*
const useStyles = makeStyles({
    root: imgUrl => ({
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    })
  });

*/





const Slide = ({ imgUrl, text }) => {


  
    


   const useStyles = makeStyles((theme) => ({
        root: {
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '88vh',
          display: 'flex',
          alignItems: 'flex-end',
        },
        text: {
            width: '100%',
            padding: '0 2rem 3rem 2rem',
            color: '#FFF',
            [theme.breakpoints.up('md')]: { 
                width: '60%',
                padding: '0 0rem 3rem 8rem',
            }
        }
      }));

    const classes = useStyles(imgUrl);

    return (
           <div className={classes.root}>
                <Typography variant='body2' className={classes.text}>{text}</Typography>
           </div>
        )
}

export default Slide
