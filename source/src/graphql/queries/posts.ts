import { gql } from "@apollo/client";

const postPreview = `
  nodes {
    title
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        name
      }
    }
    tags {
      nodes {
        tagId
        slug
        name
      }
    }
    excerpt
    content
  }
`;

export default {
  Queries: {
    queryPosts: gql`
      query queryPosts {
        posts {
          ${postPreview}
        }
      }
    `,
    queryPostsTotal: gql`
      query queryPostsTotal {
        posts {
          pageInfo {
            offsetPagination {
              # Boolean whether there are more nodes in this connection.
              # Eg. you can increment offset to get more nodes.
              # Use this to implement "fetch more" buttons etc.
              hasMore

              # True when there are previous nodes
              # Eg. you can decrement offset to get previous nodes.
              hasPrevious

              # Get the total node count in the connection. Using this
              # field activates total calculations which will make your
              # queries slower. Use with caution.
              total
            }
          }
        }
      }
    `,
    queryPostsByVars: gql`
      query queryPostsByVars(
        $orderBy: PostObjectsConnectionOrderbyEnum!
        $order: OrderEnum!
        $first: Int
        $size: Int!
        $offset: Int!
      ) {
        posts(
          where: { 
            orderby: { field: $orderBy, order: $order }
            offsetPagination: {size: $size, offset: $offset}
          }
          first: $first
        ) {
          ${postPreview}
        }
      }
    `,
  },
};
