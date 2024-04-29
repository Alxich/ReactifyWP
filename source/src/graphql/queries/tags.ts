import { gql } from "@apollo/client";
import { postPreview, tagPreview } from "./previews/previews";

export default {
  Queries: {
    queryTag: gql` 
      query queryTag(
        $id: ID!
        $idType: TagIdType!
        $orderBy: PostObjectsConnectionOrderbyEnum!
        $order: OrderEnum!
        $first: Int
        $last: Int
        $after: String
        $before: String
      ) {
        tag(id: $id, idType: $idType) {
          ${tagPreview}
          posts(
            where: { 
              orderby: { field: $orderBy, order: $order }
            }
            first: $first
            after: $after
            before: $before
            last: $last
          ) {
            ${postPreview}
          }
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
