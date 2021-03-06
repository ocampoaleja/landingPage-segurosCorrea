import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const HeadInsurers = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "headinsurers" } } }
      ) {
        nodes {
          frontmatter {
            title
            date
            subtitle
            description
            image {
              id
              publicURL
            }
            alt
          }
          excerpt
          html
        }
      }
    }
  `);
  return (
    <>
      <h2 className=" major-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.title}
      </h2>
      <p className="paragraph-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.description}
      </p>
    </>
  );
};

export default HeadInsurers;
