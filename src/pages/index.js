import React from "react" 
import { ThemeProvider, createMuiTheme, Container } from "@material-ui/core";
import Layout from "../components/layout" 
import SEO from "../components/seo"
import Layout__PLP from "../components/Layout__PLP"


function IndexPage() {

  const theme = createMuiTheme({
    palette: {
      // type: 'dark',
      // fun to try for alternative look/after hours for the range of components used
    },
  });

  return (


    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Layout>
          <SEO title="Home" /> 
          <Layout__PLP />
        </Layout> 
       
      </Container>
    </ThemeProvider>


  );
}

export default IndexPage;
