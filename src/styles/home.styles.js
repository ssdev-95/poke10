import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    Home: {
        width: '100vw',
        height: '100vh',
        background: `${theme.palette.primary['main']}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > button': {
            border: 'none',
            background: 'rgba(0,0,0,0)',
            cursor: 'pointer',
            '& > img': {
                height: '10vh',
                width: 'auto'
            },
            '&:active': {
                filter: 'inverse(100%)'
            }
        }
    }
}));

export { useStyles };