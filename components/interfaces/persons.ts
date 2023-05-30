export interface Person {
    id: number;
    posterUrl: string;
    nameRu: string;
    nameEn:string;
    roles:roles[];
}

interface roles{
    nameRu:string;
    nameEn:string;
}