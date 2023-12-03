import theme from "./theme";      

const styles = {
        window:{
                backgroundColor:theme.palette.background.default
        },
        navbar:{
                backgroundColor:theme.palette.background.default,
        },
        navbarBrand: {
                mr: 2,
                fontSize: "38px",
                fontWeight: 700,
                lineHeight: "53px",
                letterSpacing: "0em",
                textAlign: "left",
                textDecoration: 'none',
                color: theme.palette.primary.main,
                display: { md: 'flex', xs:"none" },
                [`@media (max-width: ${theme.breakpoints.values.md}px)`]: { display: {xs:'flex', md:"none"},flexGrow: 1,},
},
navItems:{
        flexGrow: 1, 
        display: { xs: 'flex', md: 'none' }
},
      brandDivider:{
                backgroundColor:theme.palette.text.primary,
                height:"36px",
                borderRightWidth: 1,
                display:{ xs: 'none', md: 'block' }
      },
      navOptions:{
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' },
                fontSize:"21.51px",
                gap:"1rem",
                ml:2
      },
      loginButton:{
                width:"182px",
                height:"47px",
                padding:"15px 40px 20px 40px",
                borderRadius:"200px",
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontWeight: 600,
                textTransform: 'capitalize',
                [`@media (max-width: ${theme.breakpoints.values.md}px)`]: { width: '91px',padding: '15px 20px 20px 20px'},
      },
      navbarDropdown:{
                color:"black",
                display: { xs: 'block', md: 'none' }
      }
}
      
      
      export default styles;