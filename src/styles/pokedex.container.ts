import { makeStyles } from  '@material-ui/core';

const useStyles = makeStyles({
    Container: {
        width: '56.25rem',
        maxWidth: '95vw',
        maxHeight: '75vh',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden scroll',
        scrollBehavior: 'smooth',

        '&::-webkit-scrollbar': {
            width: '0.5em',
            height:' 0.5em',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderRadius: '3px',
        }
    }
});

export { useStyles };