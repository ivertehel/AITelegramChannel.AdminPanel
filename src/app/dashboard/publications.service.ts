import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ServiceProxy, GetFuturePublicationsResponse } from "src/nswag/service-proxies";

@Injectable()
export class PublicationsService {
    constructor(private _serviceProxy: ServiceProxy) {}

    getPublications() : Observable<GetFuturePublicationsResponse> {
        return this._serviceProxy.publications();
    }
}