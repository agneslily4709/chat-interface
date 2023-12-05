import theme from "./theme";

// Window styles
const windowStyles = {
  window: {
    backgroundColor: theme.palette.background.default,
    display:"flex",
    flexDirection:"column",
    gap:2
  },
};

// Navbar styles
const navbarStyles = {
  navbar: {
    backgroundColor: theme.palette.background.default,
  },
  navbarBrand: {
    mr: 2,
    fontSize: "30px",
    fontWeight: 700,
    textAlign: "left",
    textDecoration: 'none',
    color: theme.palette.text.contrast,
    display: { md: 'flex', xs: 'none' },
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
    },
  },
  navItems: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  brandDivider: {
    backgroundColor: theme.palette.text.white,
    height: "39px",
    borderRightWidth: 1,
    display: { xs: 'none', md: 'block' },
  },
  navOptions: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    fontSize: "21.51px",
    gap: "1rem",
    ml: 2,
  },
  loginButton: {
    width: "175px",
    height: "30px",
    padding: "15px 40px 20px 40px",
    borderRadius: "200px",
    fontFamily: "Open Sans",
    fontSize: "15px",
    backgroundColor:theme.palette.background.contrast,
    color:theme.palette.text.black,
    fontWeight: 600,
    textTransform: 'capitalize',
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      width: '91px',
      padding: '15px 20px 20px 20px',
    },
    '&:hover': {
        cursor:"pointer",
        backgroundColor:theme.palette.background.contrast,
    },
  },
  navbarDropdown: {
    color: "white",
    backgroundColor:theme.palette.background.default,
    display: { xs: 'flex', md: 'none' },

    "&:hover": {
        backgroundColor: theme.palette.background.sub
      }
  },
};


export { windowStyles, navbarStyles };
