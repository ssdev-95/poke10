import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    Card: {
        width: '75px',
        height: '125px',
        animation: `$FadeIn 1s 1 ${theme.transitions.easing.easeInOut}`
    },
    '@keyframes FadeIn': {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    }
}));

export { useStyles };