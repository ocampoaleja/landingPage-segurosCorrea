import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "banner" } } }
      ) {
        nodes {
          frontmatter {
            title
            date
            subtitle
            description
            image {
              publicURL
              base
            }
            alt
          }
          excerpt
          html
        }
      }
    }
  `);

  const backgroundPic = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === 'Seguros Correa'
  ).frontmatter.image.publicURL;
  const logoSc = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.alt === 'Logo Seguros Correa'
  ).frontmatter.image.publicURL;

  return (
    <section
      id="banner"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(25,38,101,0.9122023809523809) 0%, rgba(25,38,101,0.8449754901960784) 1%), url(${backgroundPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: `#192665`,
      }}
    >
      <div className="inner headerText">
        <div className="logo">
          <img
            src={logoSc}
            alt={
              data.allMarkdownRemark.nodes.find(
                element => element.frontmatter.alt === 'Logo Seguros Correa'
              ).frontmatter.image.publicURL
            }
            className="icon"
          />
        </div>
        <div className="header-text">
          <h2>
            {data.allMarkdownRemark.nodes.find(
              element => element.frontmatter.title === ' Seguros Correa'
            )}
          </h2>
          <p>
            {
              data.allMarkdownRemark.nodes.find(
                element => element.frontmatter.alt === 'Mostrando propuesta'
              ).frontmatter.description
            }
          </p>
        </div>
        <p>
          {
            data.allMarkdownRemark.nodes.find(
              element => element.frontmatter.alt === 'Mostrando propuesta'
            ).frontmatter.subtitle
          }
        </p>
      </div>
    </section>
  );
};

export default Banner;
