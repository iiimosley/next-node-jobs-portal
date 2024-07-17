import { Geolocated } from "../shared/geolocated";

interface Provider extends Partial<Geolocated> {
  id: number;
  name: string;
}

export default Provider;
