import {Entity , Column  , ManyToOne , JoinColumn, PrimaryColumn}  from 'typeorm';
import Attractions from './Attractions';
import {v4 as uuid} from 'uuid'


@Entity('images')
export default class Image {
    @PrimaryColumn()
    readonly id : string ;

    @Column()
    path : string;
    
    @ManyToOne(( )=> Attractions , attractions => attractions.images)
    @JoinColumn({name:'attraction_id'})
    attractions : Attractions[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

