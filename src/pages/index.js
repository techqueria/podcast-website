import React from "react";
import { Link } from "gatsby";
import Container from '../components/layout/container';

import SEO from "../components/seo";

const IndexPage = () => (
  <Container>
    <SEO title="Techqueria Podcast: Home" />
    <h1>Techqueria Podcast!</h1>
    <p>
      Techqueria and Points of Presence Media have come together to create a podcast
      featuring in-depth narrative stories, interviews and business advice
      about and from the perspective of the Latinx tech community. With a
      huge need to tell our stories properly and with necessary journalistic
      context, we are here to make a difference and a lot of noise in this
      growing medium!
    </p>
    <p>
      <strong>The first episode of the Techqueria podcast is coming soon!</strong>
    </p>
    <p>
      San Francisco Bay Area tech and culture reporter Jose Fermoso
      introduces the types of stories that will be featured on the show. Look
      for conversations and news context on socioeconomic displacement,
      immigration policies and multigenerational tech and business startups,
      as well as the latest on the effect of the coronavirus pandemic on the
      Latinx community. Get ready!
    </p>
    <p><Link to="/about">About</Link></p>
  </Container>
)

export default IndexPage
