import {Column, Entity , JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn , } from 'typeorm'
import {v4 as uuid} from 'uuid';
import Municipality from './Municipality';

@Entity('region')
export default class Region{
    @PrimaryColumn()
    readonly id : string;

    @Column()
    name : string


    @OneToMany(()=> Municipality , municipality => municipality.region,{
        cascade :['insert' , 'update']
    })
    @JoinColumn({name : 'region_id'})
    municipality : Municipality[]

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}