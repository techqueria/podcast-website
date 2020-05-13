import React from "react"
import Layout from "../components/layout"

const EpisodeTemplate = (props) => (
  <Layout>
    <h1>{ props.pathContext.title || 'Page Template' }</h1>
  </Layout>
);

export default EpisodeTemplate;
