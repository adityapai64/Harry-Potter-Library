export interface Book{
    index: number,
    quantity: number,
    title: string,
    originalTitle: string,
    pages: number,
    description: string,
    releaseDate: Date,
    cover: string,
    price?: number,
    wandBookmark: boolean,
    hardCover: boolean
}