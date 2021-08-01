import Municipality from "../models/Municipality";
import imageView from "./imageView";


export default {
  render(municipality : Municipality){
   return {
    id : municipality.id,
    name : municipality.name,
    population : municipality.population,
    climate : municipality.climate,
    temperature : municipality.temperature,
    access : municipality.access,
    history : municipality.history
   }
  },
  renderMany(municipality : Municipality[]){
    return  municipality.map(municipality => this.render(municipality))
  },
  renderName(municipality : Municipality){
    return {
      name: municipality.name
    }
  }
}