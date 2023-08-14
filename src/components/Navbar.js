import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const LinkButton = (props) => (
    <Button color="inherit" component={Link} {...props} />
  );
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <LinkButton to="/">
          <Typography variant="h6" color="inherit" component="div">
            Home
          </Typography>
        </LinkButton>
        <LinkButton to="/videos">
          <Typography variant="h6" color="inherit" component="div">
            Videos
          </Typography>
        </LinkButton>
        <LinkButton to="/login">
          <Typography variant="h6" color="inherit" component="div">
            Login
          </Typography>
        </LinkButton>
        <LinkButton to="/register">
          <Typography variant="h6" color="inherit" component="div">
            Register
          </Typography>
        </LinkButton>
      </Toolbar>
    </AppBar>
  );
};
