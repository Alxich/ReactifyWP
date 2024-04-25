import queryPostsData from "./posts/postsData";
import queryCategoriesData from "./categories/categoriesData";
import queryTagsData from "./tags/tagsData";

const getOperationsRequest = {
  GET: { queryPostsData, queryCategoriesData, queryTagsData },
};

export default getOperationsRequest;
