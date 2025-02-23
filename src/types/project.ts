export type TProject = {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    tasks: string[];
    picture?: string;
    link?: string;
    isStar?: boolean;
}