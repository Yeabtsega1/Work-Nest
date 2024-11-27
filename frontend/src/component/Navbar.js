// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   makeStyles,
// } from "@material-ui/core";
// import { useHistory } from "react-router-dom";

// import isAuth, { userType } from "../lib/isAuth";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const Navbar = (props) => {
//   const classes = useStyles();
//   let history = useHistory();

//   const handleClick = (location) => {
//     console.log(location);
//     history.push(location);
//   };

//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           Job Portal
//           <br/>Shaping Tommorows Cyber Security<br/>
//         </Typography>
//         {isAuth() ? (
//           userType() === "recruiter" ? (
//             <>
//               <Button color="inherit" onClick={() => handleClick("/home")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/addjob")}>
//                 Add Jobs
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/myjobs")}>
//                 My Jobs
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/employees")}>
//                 Employees
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/profile")}>
//                 Profile
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/logout")}>
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" onClick={() => handleClick("/home")}>
//                 Home
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={() => handleClick("/applications")}
//               >
//                 Applications
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/profile")}>
//                 Profile
//               </Button>
//               <Button color="inherit" onClick={() => handleClick("/logout")}>
//                 Logout
//               </Button>
//             </>
//           )
//         ) : (
//           <>
//             <Button color="inherit" onClick={() => handleClick("/login")}>
//               Login
//             </Button>
//             <Button color="inherit" onClick={() => handleClick("/signup")}>
//               Signup
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center", // Align logo, title, and subtitle vertically
  },
  logo: {
    height: "50px", // Adjust logo height as needed
    marginRight: theme.spacing(2), // Add space between logo and text
  },
  textContainer: {
    display: "flex",
    flexDirection: "column", // Stack title and subtitle vertically
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.9rem",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo, Title, and Subtitle */}
        <div className={classes.titleContainer}>
          <img
            src="TechForing.png" // Replace with the path to your logo
            alt="Job Portal Logo"
            className={classes.logo}
          />
          <div className={classes.textContainer}>
            <Typography variant="h6" className={classes.title}>
              TechForing
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Shaping Tomorrows Cybersecurity
            </Typography>
          </div>
        </div>

        {/* Conditional Buttons */}
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

