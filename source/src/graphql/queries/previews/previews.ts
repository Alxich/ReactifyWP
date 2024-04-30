export const tagPreview = `
  id
  name
  slug
  description
  tagACFFields {
    background
    textColor
  }
`;

export const categoryPreview = `
  pageInfo {
    endCursor
    startCursor
  }
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

export const avatarPreview = `
avatar {
  rating
  isRestricted
  url
}
`;

export const authorPreview = `
  author {
    node {
      id
      isRestricted
      name
      ${avatarPreview}
      ... on User {
        id
        slug
        firstName
        username
        nickname
        nicename
        description
      }
    }
  }
`;

export const postPagePreview = `
  title
  date
  status
  commentStatus
  content(format: RENDERED)
  hasPassword
  isPostsPage
  isRestricted
  modified
  commentCount
  featuredImage {
    node {
      sourceUrl(size: LARGE)
    }
  }
  ${authorPreview}
`;

export const postPreview = `
  pageInfo {
    endCursor
    startCursor
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
  nodes {
    id
    slug
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
        ${tagPreview}
      }
    }
    excerpt
    content
  }
`;

export const commentReview = `
  id
  type
  status
  isRestricted
  karma
  ${authorPreview} 
  date
  content
`;

export const commentsReview = `
  pageInfo {
    hasPreviousPage
    hasNextPage
    endCursor
    startCursor
  }
  nodes {
    ${commentReview}
    replies {
      nodes {
        ${commentReview}
      }
    }
  }
`;
