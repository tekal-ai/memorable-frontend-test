export class Store<T> {
  private storage: Storage;

  // Cache the value to avoid reading from / writing to the disk on every call
  // since those operations are synchronous and thus, slow as fuck. 🍻
  private cache: T | null = null;

  public constructor(private readonly key: string, persistent?: boolean) {
    if (typeof persistent === "undefined") {
      persistent = localStorage.getItem(key) !== null;
    }
    this.storage = persistent ? localStorage : sessionStorage;
  }

  public flush() {
    this.cache = null;
  }

  public clear() {
    this.storage.removeItem(this.key);
    this.flush();
  }

  public set(value: T) {
    this.storage.setItem(this.key, JSON.stringify(value));
    this.flush();
  }

  public get(): T | null {
    if (!this.cache) {
      const value = this.storage.getItem(this.key);
      if (value) {
        this.cache = JSON.parse(value) as T;
      }
    }
    return this.cache;
  }

  set persist(persistent: boolean) {
    const value = this.get();
    this.clear();
    this.storage = persistent ? localStorage : sessionStorage;
    if (value) this.set(value);
  }
}
