import TagsOperations from "../queries/tags";
import PostOperations from "../queries/posts";
import CategoryOperations from "../queries/categories";

import { queryData } from "@/lib/types";

// Apollo Client
import { DocumentNode, useQuery } from "@apollo/client";

const QueryData = ({ type, variables }: queryData) => {
  const queryMap: Record<string, DocumentNode> = {
    // Posts
    queryPost: PostOperations.Queries.queryPost,
    queryPosts: PostOperations.Queries.queryPosts,
    queryPostsByVars: PostOperations.Queries.queryPostsByVars,
    // Categories
    queryCategory: CategoryOperations.Queries.queryCategory,
    queryCategories: CategoryOperations.Queries.queryCategories,
    queryCategoriesByVars: CategoryOperations.Queries.queryCategoriesByVars,
    queryCategoriesTotal: CategoryOperations.Queries.queryCategoriesTotal,
    // Tags
    queryTag: TagsOperations.Queries.queryTag,
    queryTags: TagsOperations.Queries.queryTags,
  };

  const queryFunc = (query: DocumentNode, variables: any) => {
    const { data, loading, error, refetch } = useQuery(query, {
      variables,
      onError: ({ message }: {message: string}) => {
        console.error(message);
      },
    });
  
    return {
      data,
      loading,
      error,
      refetch,
    };
  };
  
  return queryFunc(queryMap[type], variables);
};

export default QueryData;
