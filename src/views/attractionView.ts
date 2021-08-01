import Attractions from "../models/Attractions";
import imageView from "./imageView";



export default {
  render(attractions : Attractions){
    return{
      id : attractions.id,
      name : attractions.name,
      latitude : attractions.latitude,
      longitude : attractions.longitude,
      about : attractions.about,
      instruction : attractions.instruction,
      opening_hours : attractions.opening_hours,
      open_on_weekends : attractions.open_on_weekends,
      whatsapp : attractions.whatsapp,
      images : imageView.renderMany(attractions.images)
    }
  },
  renderMany(attractions : Attractions[]){
    return attractions.map(attractions => this.render(attractions));
  }
}