import {Router} from "@angular/router";


export abstract class InheritanceComponent {


  protected constructor(
    public router: Router
  ) {
  }

  routerToMove(param: any) {
    this.router.navigate([param]);
  }

}
