import React from "react";
// import { Link } from "gatsby";
import Container from '../components/layout/container';

import SEO from "../components/seo";

import ComingSoon from '../components/pages/comingsoon';

const IndexPage = () => (
  <Container>
    <SEO title="Techqueria Podcast: Coming soon!" />
    <ComingSoon />
    {/* <p><Link to="/about">About</Link></p> */}
  </Container>
)

export default IndexPage;
