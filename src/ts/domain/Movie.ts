import Buyable from './Buyable';

export default class Movie implements Buyable{
    constructor (
        readonly id: number,
        readonly name: string,
        readonly nameOrigin: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: Array <string>,
        readonly duration: string,
        readonly price: number,
    ) {}
}