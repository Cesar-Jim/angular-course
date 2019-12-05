// export class Marcador {
//   constructor(public lat: number, public lng: number) {}
// }

export class Marcador {
  public latitude: number;
  public longitude: number;

  public titulo = "Sin titulo";
  public descripcion = "Sin Descripcion";

  constructor(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
  }
}
