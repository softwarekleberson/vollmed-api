import { Column } from 'typeorm';

export class Endereco {

    @Column({type: 'text'})
    logradouro:string

    @Column({type: 'text'})
    bairro:string

    @Column({type: "text"})
    cep:string

    @Column({type: 'text'})
    numero:string

    @Column({type: 'text', nullable: true})
    complemento:string

    @Column({type: 'text'})
    cidade:string

    @Column({type: 'text'})
    uf:string
}