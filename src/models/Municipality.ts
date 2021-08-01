import {Column, Entity , JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn , } from 'typeorm'
import Attractions from './Attractions';
import {v4 as uuid} from 'uuid';
import Region from './Region';


@Entity('municipality')
export default class Municipality{
    @PrimaryColumn()
    readonly id : string;

    @Column()
    name : string

    @Column()
    population : number

    @Column()
    climate : string

    @Column()
    temperature : number

    @Column()
    access : string

    @Column()
    history : string
    
    @Column()
    region_id : string
    
    @ManyToOne(() =>  Region , region => region.municipality)
    @JoinColumn({name : 'region_id'})
    region : Region;
    
    @OneToMany(() => Attractions , attractions => attractions.municipality)
    @JoinColumn({name : 'municipality_id'})
    municipality : Attractions[]
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}