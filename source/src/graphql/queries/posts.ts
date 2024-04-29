import { gql } from "@apollo/client";
import { postPreview, tagPreview } from "./previews/previews";

export default {
  Queries: {
    queryPost: gql`
      query queryPost($id: String) {
        post(id: $id) {
          title
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              ${tagPreview}
            }
          }
          content
        }
      }
    `,
    queryPosts: gql`
      query queryPosts {
        posts {
          ${postPreview}
        }
      }
    `,
    queryPostsByVars: gql`
      query queryPostsByVars(
        $orderBy: PostObjectsConnectionOrderbyEnum!
        $order: OrderEnum!
        $first: Int
        $size: Int
        $offset: Int
        $tagId: String
        $tag: String
      ) {
        posts(
          where: { 
            orderby: { field: $orderBy, order: $order }
            offsetPagination: {size: $size, offset: $offset}
            tagId: $tagId,
            tag: $tag
          }
          first: $first
        ) {
          ${postPreview}
        }
      }
    `,
  },
};
