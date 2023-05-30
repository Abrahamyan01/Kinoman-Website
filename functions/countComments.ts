import { getTopLevelcomments } from "./getTopLevelComments";
import { Comment } from "@/components/interfaces/comment";


export const countComments = (comments: Comment[]):number => {
    const topLevelComments = getTopLevelcomments(comments);

    return comments?.reduce((count, comment) => {
        const childComments = topLevelComments.filter(
            (c:Comment) => c.repliedOnComment === comment.id
        );
        return count + countComments(childComments);
    }, comments.length);
}