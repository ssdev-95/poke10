import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Card: {
    width: "100px",
    height: "130px",
    padding: "8px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
    animation: `$FadeIn 1s 1 ${theme.transitions.easing.easeInOut}`,
    "& > img": {
      width: "80%",
      height: "auto",
    },
    "& > p, & > span": {
      textAlign: "center",
      fontWeight: 700,
      color: `${theme.palette.primary.main}`,
    },
    "& > p": {
      fontSize: "0.75rem",
    },
    "& > span": {
      padding: "2px",
      width: "90%",
      fontSize: "0.65rem",
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "999px",
    },
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
  "@keyframes FadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

export { useStyles };
