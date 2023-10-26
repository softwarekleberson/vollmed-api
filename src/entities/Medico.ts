import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './Endereco';
import { IsEmail } from 'class-validator';
import { Consulta } from './Consulta';

@Entity('medicos')
export class Medico {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    nome: string

    @Column({type: 'text'})
    @IsEmail({}, {message: 'Email inválido'})
    email: string

    @Column({type: 'text', length: 9})
    telefone: string

    @Column({type: 'text', length:5})
    crm: string

    endereco: Endereco

    @OneToMany(() => Consulta, consulta => consulta.medico)
    consulta: Consulta
}