import { EntityRepository, Repository } from "typeorm";
import Attractions from "../models/Attractions";

@EntityRepository(Attractions)
class AttractionRepositories extends Repository<Attractions> {

}


export { AttractionRepositories }