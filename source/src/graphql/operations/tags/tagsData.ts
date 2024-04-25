import TagsOperations from "../../queries/tags";
import { queryTagsData } from "@/lib/types";

// Apollo Client
import { DocumentNode, useQuery } from "@apollo/client";

const useQueryData = ({ type, variables }: queryTagsData) => {
  const queryMap: Record<string, DocumentNode> = {
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

export default useQueryData;
