import { Comment } from "@/components/interfaces/comment";

export const getTopLevelcomments = (comments: Comment[]) => {
  return comments?.filter((c) => c.repliedOnComment === null);
};