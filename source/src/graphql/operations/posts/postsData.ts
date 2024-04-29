import PostOperations from "../../queries/posts";
import { queryPostsData } from "@/lib/types";

// Apollo Client
import { DocumentNode, useQuery } from "@apollo/client";

const useQueryData = ({ type, variables }: queryPostsData) => {
  const queryMap: Record<string, DocumentNode> = {
    queryPost: PostOperations.Queries.queryPost,
    queryPosts: PostOperations.Queries.queryPosts,
    queryPostsByVars: PostOperations.Queries.queryPostsByVars,
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

export default useQueryData;
