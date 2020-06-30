import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderIllustration from '../images/illustrations/header-1.jpg';

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
    <div style={{
        backgroundImage: `url(${HeaderIllustration})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center center ',
        width: '100%',
        minHeight: '280px',
        padding: '32px 16px',
        position: 'relative',
    }}>
        <h1 style={{
            color: 'white',
            textShadow: ` -4px -4px 0 #000,
                4px -4px 0 #000,
                -4px 4px 0 #000,
                4px 4px 0 #000`,
        }}>
            Techqueria Podcast
        </h1>
        <p
            style={{
                position: 'absolute',
                bottom: '0px',
                right: '12px',
                color: 'white',
            }}
            >Illustration by&nbsp;
            <a href="https://www.instagram.com/marihereiam/" style={{ color: 'inherit'}} target="_blank" rel="norel nofollow">@marihereiam</a>
        </p>
    </div>
    <div style={{ margin: '32px auto 64px' }}>
        <p>Find us in your favorite apps:</p>
        { data.map((d, i) => (
            <div className="link" key={ i } style={{ marginTop: '32px' }}>
                <h2 style={{ marginBottom: '5px' }}>{ d.name }</h2>
                <a href={ d.link } target="_blank" rel="norel nofollow">
                    Listen in { d.name }
                </a>
            </div>
        ))}
    </div>
  </Layout>
);


export default LinksPage;
