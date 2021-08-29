import { makeStyles } from  '@material-ui/core';

const useStyles = makeStyles({
    Container: {
        width: '65rem',
        maxWidth: '90vw',
        maxHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        margin: '1.5rem auto',
        gap: '1rem',

        '&::-webkit-scrollbar': {
            width: '0',
            height:' 0.5em',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderRadius: '3px',
        }
    }
});

export { useStyles };