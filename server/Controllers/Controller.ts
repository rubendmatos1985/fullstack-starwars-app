import { Router } from "express";
import autoBind = require("auto-bind");

export interface IController {
  Router: ()=> Router;
  Pathname: string;
}

class Binder {
  constructor() {
    autoBind(this);
  }
}

export class Controller extends Binder implements IController {
  public Router: () => Router;
  public Pathname: string;
  constructor(router: () => Router) {
    super();
    this.Router = router;
  }
}
