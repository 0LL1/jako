import { browser } from "$app/environment";

export class PersistedState<T> {
  #key: string;
  #initialValue: T;
  #storageArea: Storage | null;
  #state: T | undefined = $state();

  constructor(key: string, initialValue: T) {
    this.#key = key;
    this.#initialValue = initialValue;
    this.#storageArea = browser ? localStorage : null;

    let storedValue: T;

    try {
      const item = this.#storageArea?.getItem(this.#key);
      storedValue = item ? JSON.parse(item) : this.#initialValue;
    } catch (error) {
      console.error(error);
      storedValue = this.#initialValue;
    }

    this.#state = storedValue;

    if (browser) {
      window.addEventListener("storage", this.handleStorageEvent.bind(this));
    }

    $effect.root((): void => {
      $effect((): void => {
        this.updateStorage(this.#state);
      });
    });
  }

  private handleStorageEvent(event: StorageEvent): void {
    if (event.key === this.#key) {
      try {
        const newValue: T = event.newValue
          ? JSON.parse(event.newValue)
          : this.#initialValue;
        this.#state = newValue;
      } catch (error) {
        console.error(error);
      }
    }
  }

  private updateStorage(value: T | undefined): void {
    try {
      this.#storageArea?.setItem(this.#key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  get current(): T {
    return this.#state || this.#initialValue;
  }

  set current(newValue: T) {
    this.#state = newValue;
  }

  reset(): void {
    this.#state = this.#initialValue;
  }
}
