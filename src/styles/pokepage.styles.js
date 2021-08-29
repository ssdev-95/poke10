import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  Dex: {
    width: '100vw',
    height: '100vh',
    background: `${theme.palette.primary['main']}`,
    '&>div': {
      width: '100%',
      height: '85vh'
    },
    '&>header': {
      width: '100%',
      height: '15vh',
      padding: '.2rem 2rem',
      display: 'flex',
      alignItems: 'center',
      '&>img': {
        height: '64px',
        width: 'auto'
      }
    }
  }
}));

export { useStyles };