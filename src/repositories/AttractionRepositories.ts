import { EntityRepository, Repository } from "typeorm";
import Attractions from "../models/Attractions";

@EntityRepository(Attractions)
class attractionRepositories extends Repository<Attractions> {

}


export { attractionRepositories }