export interface NewsModel{
    topic : string,
    publisher : string,
    title : string,
    time : string,
    image:string,
    url :string,
    reference : SubNews[],
    fullCover : string
};
export interface SubNews{
    publisher : string,
    title : string,
    time : string,
    url : string
};

export interface NewsShowcase{
    publisher:string,
    isFollow : boolean,
    reference:subShowCase[],
    time : string
};

export interface subShowCase{
    topic:string,
    title : string,
    image : string,
    url:string
};