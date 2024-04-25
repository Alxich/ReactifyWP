import { gql } from "@apollo/client";

const tagPreview = `
  id
  name
  slug
  description
  tagACFFields {
    background
    textColor
  }
`;

export default {
  Queries: {
    queryTag: gql` 
      query queryTag($id: ID!) {
        tag(id: $id) {
          ${tagPreview}
        }
      }
    `,
    queryTags: gql`
      query queryTags {
        tags(first: 99999999) {
          nodes {
            ${tagPreview}
          }
        }
      }
    `,
  },
};
