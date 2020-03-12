import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoadingServiceService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public torn() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count++;
    }
  }

  public cargando(): boolean {
    return this.count > 0;
  }
}
