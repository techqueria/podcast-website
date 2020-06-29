import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";

const data = [
    { name: 'Spotify', link: 'https://open.spotify.com/show/1LAGqrqpV0vXJQN3bjFtJL?si=4_gDtycxRRGOF_bfHAnW6g', logo: ''},
    { name: 'Apple podcasts', link: 'https://podcasts.apple.com/us/podcast/techqueria/id1518979670', logo: ''},
    { name: 'Pandora', link: 'https://pandora.app.link/zbKLrcXKI7', logo: ''},
    { name: 'Radio Public', link: 'https://radiopublic.com/techqueria-WlZAk7', logo: ''},
    { name: 'Stitcher', link: 'https://www.stitcher.com/s?fid=544620', logo: ''},
];


const LinksPage = () => (
  <Layout>
    <SEO title="Techqueria Podcast: Links" />
    <h1>Techqueria podcast</h1>
    <p>Find us in your favorite apps:</p>
    <div style={{ margin: '32px auto 64px' }}>
        { data.map((d, i) => (
            <div className="link" key={ i } style={{ marginTop: '32px' }}>
                <h2 style={{ marginBottom: '5px' }}>{ d.name }</h2>
                <a href={ d.link } target="_blank">
                    Listen in { d.name }
                </a>
            </div>
        ))}
    </div>
  </Layout>
);


export default LinksPage;
