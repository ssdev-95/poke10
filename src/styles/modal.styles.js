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
        color: `${theme.palette.primary['main']}`,
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1rem',
        animation: `$SlideIn 2s 1 ${theme.transitions.easing.easeInOut}`,
        transition: 'all 1s ease',
        '& > button': {
            cursor: 'pointer',
            height: '2rem',
            width: 'auto',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,0)',
            '& > img': {
                width: '100%',
                height: '100%'
            },
            '&:active': {
                // backgroundColor: 'rgba(0,0,0,0.15)',
                color: 'red'
            }
        },
        '& > div': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            '&:first-of-type': {
                justifyContent: 'center',
                '& > img': {
                    background: 'red',
                    width: '50%',
                    height: 'auto'
                }
            },
            '& > button': {
                cursor: 'pointer',
                height: '2rem',
                width: 'auto',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0)',
                '& > img': {
                    width: '100%',
                    height: '100%'
                },
                '&[name="shiny"]': {
                    '&.shiny': {
                        '& > img': {
                            filter: 'invert(50%)'
                        }
                    }
                }
            }
        }
    }
}));

export { useStyles };