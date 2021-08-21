import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    Label: {
        width: 'fit-content',
        maxWidth: '95vw',
        height: '3rem',
        display: 'flex',
        gap: 0,
        margin: '0 auto',

        '&>input': {
            height: '3rem',
            width: '16rem',
            background: `${theme.palette.secondary['main']}`,
            border: 'none',
            borderRadius: '50px 0 0 50px',
            outline: 'none',
            color: `${theme.palette.primary['main']}`,
            padding: '0 1.5rem',
            fonWeight: 600,
            fontSize: '1rem'
        },

        '&>button': {
            height: '3rem',
            width: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: `${theme.palette.secondary['main']}`,
            borderRadius: '0 50px 50px 0',
            cursor: 'pointer',

            '&:hover': {
                filter: 'brightness(.8)'
            },

            '&>img': {
                height: '98%',
                width: '98%'
            }
        }
    }
}));

export { useStyles };