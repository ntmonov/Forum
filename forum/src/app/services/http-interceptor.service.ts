import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders: {
        Authorization: 'Token ' + localStorage.getItem('token') || null,
        'Content-Type': 'application/json',
      },
    });

    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.toastr.success(event['body']['message']);
          }
        },
        (err) => this.toastr.error(err['error']['message'])
      )
    );
  }
}
