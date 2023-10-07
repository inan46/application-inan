export interface IUser {
    id?: number
    name?: string
    username?: string
    email?: string
    address?: IAddress
    phone?: string
    website?: string
    company?: ICompany
  }

  export class User implements IUser {
    constructor(
      public id?: number,
      public name?: string,
      public username?: string,
      public email?: string,
      public address?: IAddress,
      public phone?: string,
      public website?: string,
      public company?: ICompany,
    ) {
      this.name = '';
      this.username = '';
      this.email = '';
      this.address = new Address();
      this.phone = '';
      this.website = '';
      this.company = new Company();
    }
  }
  
  export interface IAddress {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
    geo?: IGeo
  }

  export class Address implements IAddress {
    constructor(
      public street?: string,
      public suite?: string,
      public city?: string,
      public zipcode?: string,
      public geo?: IGeo,
      ){
        this.street = '';
        this.suite = '';
        this.city = '';
        this.zipcode = '';
        this.geo = new Geo();
      }
  }
  
  export interface IGeo {
    lat?: string
    lng?: string
  }

  export class Geo implements IGeo {
    constructor(
      public lat?: string,
      public lng?: string,
    ){
      this.lat = '';
      this.lng = '';
    }
    }

  export interface ICompany {
    name?: string
    catchPhrase?: string
    bs?: string
  }

  export class Company implements ICompany {
    constructor(
      public name?: string,
      public catchPhrase?: string,
      public bs?: string,
    ){
      this.name = '';
      this.catchPhrase = '';
      this.bs = '';
    }
    }