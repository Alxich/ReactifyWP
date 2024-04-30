import { gql } from "@apollo/client";
import {
  commentsReview,
  postPagePreview,
  postPreview,
} from "./previews/previews";

export default {
  Queries: {
    queryPost: gql`
      query queryPost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ${postPagePreview}
          comments(first: 100) {
            ${commentsReview}
          }
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
