import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    '@keyframes SlideIn': {
        from: {
            transform: 'translateX(100%)',
            opacity: 0
        },
        to: {
            transform: 'translateY(0)',
            opacity: 1
        }
    },
    Modal: {
        height: '100vh',
        width: '40rem',
        maxWidth: '100vw',
        position: 'absolute',
        zIndex: 999,
        top: 0,
        right: 0,
        backgroundColor: '#f0f2f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1rem',
        animation: `$SlideIn 2s 1 ${theme.transitions.easing.easeInOut}`,
        transition: 'all 1s ease',
        '& > button:first-of-type': {
            alignSelf: 'flex-end',
            height: '1rem',
            width: 'auto',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,0)',
            '&:active': {
                backgroundColor: 'rgba(0,0,0,0.15)'
            },
            '&.shiny': {
                filter: 'inverse(100%)'
            }
        },
        '& > img': {
            width: '50%',
            height: 'auto'
        }
    }
}));

export { useStyles };