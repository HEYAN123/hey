import { createUseStyles } from "react-jss";


const buttonStyle = createUseStyles({
  myButton: {
    color: "green",
    background: ({ theme }) => theme.background,
    "& span": {
      fontWeight: "bold",
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});
//   const classes = buttonStyle();

export default buttonStyle;
