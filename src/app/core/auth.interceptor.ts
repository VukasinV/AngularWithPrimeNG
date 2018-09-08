import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TokenService } from "./token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.tokenService.getToken();

        if (token) {

            const cloned = req.clone({
               headers: req.headers
               .set("Authorization", "Bearer " + token)
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
