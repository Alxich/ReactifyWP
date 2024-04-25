import { gql } from "@apollo/client";
import { postPreview } from "./posts";

const CategoryPreview = `
  nodes {
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
  }
`;

export default {
  Queries: {
    queryCategory: gql`
      query queryCategory($id: String) {
        category(id: $id) {
          nodes {
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
            posts {
              ${postPreview}
            }
          }
        }
      }
    `,
    queryCategories: gql`
      query queryCategories {
        categories {
            ${CategoryPreview}
        }
      }
    `,
    queryCategoriesTotal: gql`
      query queryCategoriesTotal {
        categories(first: 9999999) {
          nodes {
            id
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
            ${CategoryPreview}
            pageInfo {
              endCursor
              startCursor
            }
        }
      }
    `,
  },
};
