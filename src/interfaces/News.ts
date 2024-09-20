export interface INews {
    id: string;
    title: string;
    cover: {
        src: string,
        desc: string
    };
    paragraphs: string[];
    preview?: string;
};