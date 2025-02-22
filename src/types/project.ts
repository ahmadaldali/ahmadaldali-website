export type TProject = {
    id: string;
    title: string;
    description: string;
    picture: string;
    technologies: string[];
    tasks: string[];
    link?: string;
    isStar?: boolean;
}