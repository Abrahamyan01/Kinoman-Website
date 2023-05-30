export interface Comment {
    movieId: number;
    id: number;
    repliedOnComment: number | null;
    description: string;
    createdAt: string;
    author: string;
    comment:Comment[];
}
