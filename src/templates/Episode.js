import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet";

const EpisodeTemplate = (props) => (
  <Layout>
    <Helmet>
      <title>{ props.pageContext.title || 'Episode : Techqueria Podcast' }</title>
    </Helmet>
    <h1>{ props.pageContext.title || 'Episode : Techqueria Podcast' }</h1>
    <p>Coming soon!</p>
  </Layout>
);

export default EpisodeTemplate;
