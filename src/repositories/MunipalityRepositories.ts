import { EntityRepository, Repository } from "typeorm";
import Municipality from "../models/Municipality";


@EntityRepository(Municipality)
class MunicipalityRepositories extends Repository<Municipality>{

}

export { MunicipalityRepositories }