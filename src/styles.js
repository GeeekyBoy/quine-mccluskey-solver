import { css } from '@emotion/css';
import BG from "./utils/background";

export default {
  root: css({
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    overflowX: "hidden"
  }),
  centeringRoot: css({
    width: "100%",
    display: "flex",
    height: "100vh",
    margin: 0,
    justifyContent: "center",
    overflow: "hidden"
  }),
  ceneredContainer: css({
    alignSelf: "center",
    width: "80%",
    maxWidth: 600
  }),
  startContainer: css({
    minWidth: "100%",
    paddingTop: 5,
    paddingBottom: 5,
  }),
  startContainerItem: css({
    "& .MuiTextField-root": {
      width: "100%"
    },
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  }),
  mansory: css({
    margin: "0 auto"
  }),
  gridItem: css({
    margin: "2vw auto",
    width: "90vw",
    maxWidth: 600
  }),
  table: css({
    "& .MuiToolbar-root": {
      backgroundColor: "#073042",
      justifyContent: "center",
      "& .MuiTypography-root": {
        fontWeight: "bold",
        color: "#FFFFFF"
      }
    },
    "& .MuiTableHead-root": {
      backgroundColor: "#073042",
      "& .MuiTableCell-head": {
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    },
    "& .MuiTableBody-root": {
      backgroundColor: "#D7EFFE",
      "& .MuiTableCell-body": {
        color: "#073042",
        fontWeight: "bold"
      }
    },
    minWidth: 300,
    borderCollapse: "unset!important"
  }),
  cancelled: css({
    backgroundColor: "#073042!important",
    color: "#3DDC84!important",
    borderBottom: "none!important"
  }),
  single: css({
    color: "#F86734!important",
    fontWeight: "bold"
  }),
  dashedBorder: css({
    border: "dashed!important",
    borderColor: "#3DDC84!important"
  }),
  redBorder: css({
    borderColor: "#F86734!important",
    borderWidth: "thick!important"
  }),
  numberedBG: css({
    backgroundPosition: "left bottom, center!important",
    backgroundRepeat: "no-repeat, repeat!important"
  }),
  petrickCard: css({
    background: "#D7EFFE",
    "& .MuiTypography-root": {
      color: "#073042"
    }
  }),
  newFunctionBtn: css({
    "& .MuiTypography-root": {
      color: "#000000",
      fontWeight: "bold"
    },
    marginTop: "10px!important",
    border: "1px solid #00000080!important"
  }),
  noMinimizationCardMedia:css( {
    height: 260
  }),
  logo: css({
    fontWeight: "900!important",
    marginBottom: "10px!important"
  })
};
