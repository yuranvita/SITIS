import { EntityRepository, Repository } from "typeorm";
import Region from "../models/Region";

@EntityRepository(Region)
class RegionRepositories extends Repository<Region>{

}

export { RegionRepositories }