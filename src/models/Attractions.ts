import {Entity , Column , OneToMany , JoinColumn, ManyToOne, PrimaryColumn, CreateDateColumn, UpdateDateColumn}  from 'typeorm';
import {v4 as uuid} from 'uuid'
import Image from './Image';
import Municipality from './Municipality';
import { User } from './User'

@Entity('attractions')
export default class Attractions{
    @PrimaryColumn()
    readonly id : string;

    @Column()
    user_id : string

    @ManyToOne(()=>User , user => user.id)
    @JoinColumn({name : 'user_id'})
    user : User
    

    @Column()
    name : string;

    @Column()
    latitude : number;

    @Column()
    longitude: number;

    @Column()
    about : string ;

    @Column()
    instruction : string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @Column()
    whatsapp : number;
    
    @Column()
    municipality_id: string

   
    @OneToMany(() => Image, image => image.attractions,{
        cascade :['insert' , 'update']
    })
    @JoinColumn({name : 'attraction_id'})
    images:Image[];

    @ManyToOne(()=>Municipality , municipality => municipality.municipality)
    @JoinColumn({name : 'municipality_id'})
    municipality : Municipality;

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}