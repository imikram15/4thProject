// import { Injectable } from "@angular/core";
// import { PreloadingStrategy, Route } from "@angular/router";
// import { Observable } from "rxjs";
// import 'rxjs/add/Observable/of'

// @Injectable()
// export class CustomPreloading implements PreloadingStrategy{
//     preload(route: Route, load: () => Observable<any>): Observable<any> {
//         if (route.data && route.data['preload']) {
//             console.log('preload Path is : ', route.path);
//             return load();            
//         }
//         else{
//             return Observable.of(null)
//         }
//     }
// }