import { Store } from "./store.tool";

class Token extends Store<string> {
  asHeader() {
    const token = this.get();
    return token ? `Bearer ${token}` : "";
  }
}

export const token = new Token("token");
