import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Medico } from "./Medico";

@Entity('consultas')
export class Consulta {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: Date})
    data: Date

    @ManyToOne(() => Paciente, paciente => paciente.consulta)
    @JoinColumn({name: 'paciente_id'})
    paciente: Paciente

    @ManyToOne(() => Medico, medico => medico.consulta)
    @JoinColumn({name: 'medico_id'})
    medico: Medico

}