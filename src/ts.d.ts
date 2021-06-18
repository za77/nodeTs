

declare namespace API{
    export interface response{
        data:any,
        count:number
    }
}

// This represents the JavaScript class which would be available at runtime
export class API {
    constructor(baseURL: string);
    getInfo(opts: API.response): API.response;
  }
