import CategoryOperations from "../../queries/categories";
import { queryCategoriesData } from "@/lib/types";

// Apollo Client
import { DocumentNode, useQuery } from "@apollo/client";

const useQueryData = ({ type, variables }: queryCategoriesData) => {
  const queryMap: Record<string, DocumentNode> = {
    queryCateogory: CategoryOperations.Queries.queryCategory,
    queryCategories: CategoryOperations.Queries.queryCategories,
    queryCategoriesByVars: CategoryOperations.Queries.queryCategoriesByVars,
    queryCategoriesTotal: CategoryOperations.Queries.queryCategoriesTotal
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
