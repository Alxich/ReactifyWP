import { gql } from "@apollo/client";
import { categoryPreview, postPreview } from "./previews/previews";

export default {
  Queries: {
    queryCategory: gql`
      query queryCategory(
        $id: ID!
        $idType: CategoryIdType!
        $orderBy: PostObjectsConnectionOrderbyEnum!
        $order: OrderEnum!
        $first: Int
        $last: Int
        $after: String
        $before: String
      ) {
        category(id: $id, idType: $idType) {
          id
          description
          name
          slug
          customFields {
            thumbnail {
              node {
                sourceUrl
              }
            }
          }
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
    queryCategories: gql`
      query queryCategories(
        $orderBy: TermObjectsConnectionOrderbyEnum
        $order: OrderEnum
        $first: Int
        $last: Int
        $hideEmpty: Boolean!
        $after: String
        $before: String
      ) {
        categories(where: {orderby: $orderBy, order: $order, hideEmpty: $hideEmpty}, first: $first, after: $after, before: $before, last: $last,) {
          ${categoryPreview}
        }
      }
    `,
    queryCategoriesTotal: gql`
      query queryCategoriesTotal {
        categories(first: 99999999) {
          edges {
            cursor
          }
        }
      }
    `,
    queryCategoriesByVars: gql`
      query queryCategoriesByVars(
        $orderBy: TermObjectsConnectionOrderbyEnum
        $order: OrderEnum
        $first: Int
        $last: Int
        $slug: [String]
        $hideEmpty: Boolean!
        $after: String
        $before: String
      ) {
        categories(where: {orderby: $orderBy, order: $order, slug: $slug, hideEmpty: $hideEmpty}, first: $first, after: $after, before: $before, last: $last,) {
          ${categoryPreview}
        }
      }
    `,
  },
};
