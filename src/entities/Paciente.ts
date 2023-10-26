import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { IsEmail } from "class-validator";
import { Consulta } from "./Consulta";

@Entity('pacientes')
export class Paciente {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    nome: string

    @Column({type: 'text'})
    @IsEmail({}, {message: 'Email Inválido'})
    email: string

    @Column({type: 'text', length: 9})
    telefone: string

    @Column({type: 'text', length: 11})
    cpf: string

    endereco: Endereco //Associação simples entre Paciente e Endereco

    @OneToMany(() => Consulta, consulta => consulta.paciente)
    consulta: Consulta[]

}