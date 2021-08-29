import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    '@keyframes Spin': {
        from: {
           transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    },
    Spinner: {
        height: 'fit-content',
        width: 'fit-content',
        margin: '20vh auto',
        background: 'rgba(0,0,0,0)',
        border: 'none',
        boxShadow: 'none',
        '& > img': {
            height: 'auto',
            width: '160px',
            maxWidth: '60vw',
            filter: 'inverse(1)',
            animation: `$Spin 1s infinite ${theme.transitions.easing.easeInOut}`
        }
    }
}));

export { useStyles };