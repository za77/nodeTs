export interface _login {
    mobile?: string;
    email?: string;
    password?: string;
  }

  export interface _register{
    mobile?: string;
    email?: string;
    password?: string;
  }

  export interface _user{
    status? : boolean,
    _id?: string,
    firstName? : string,
    lastName?: string,
    mobile?: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  }