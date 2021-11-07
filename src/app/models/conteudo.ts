export class Conteudo {
    _id?: number;
    titulo: string;
    categoria: string;
    idioma: string;
    imdb: number;

    constructor (titulo: string, categoria: string, idioma: string, imdb: number) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.idioma = idioma;
        this.imdb = imdb;
    }
    
}