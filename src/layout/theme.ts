import { extendTheme ,type ThemeConfig} from '@chakra-ui/react'

const config:ThemeConfig={
     initialColorMode:'dark' ,
        useSystemColorMode: false 
}

 const theme = extendTheme({
    config,
    breakpoints:{
      base:'0em',
      xs:'20em',
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '80em', // 1280px
      '2xl': '96em', // 1536px
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      }
    })
  export default theme