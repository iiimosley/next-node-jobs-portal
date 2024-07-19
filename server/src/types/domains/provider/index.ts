import { Locatable } from "../shared/locatable";

interface Provider extends Partial<Locatable> {
  id: number;
  name: string;
}

export default Provider;
