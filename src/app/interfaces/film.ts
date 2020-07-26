export class Film {
    constructor(
        public id: string,
        public name: string,
        public date: string,
        public status: string,
        public option: string,
    ){}
}

export interface FilmInterface {
    id: string;
    name: string;
    date: string;
    status: string;
    option: string;
}