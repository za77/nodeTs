import { Express, NextFunction, Request, RequestHandler, Response } from 'express';


class ServiceContext {
    static instance: ServiceContext;
    static getInstance() {
      if (!ServiceContext.instance)
        ServiceContext.instance = new ServiceContext();
      return ServiceContext.instance;
    }
  
    
    private app!: Express;
    private hasInitialised: boolean;
  
    constructor() {
    this.hasInitialised = false;
    }

    authenticate(req: Request, res: Response, next: NextFunction) {
      next();
    }
  
    setApp(v: Express) {
      if (this.hasInitialised === true) {
        throw new Error('Service context has been already initialized');
      }
  
      this.hasInitialised = true;
      this.app = v;
      this.app.use((req, res, next) => {
        // (<any>req).context = createRequestContext({});
        next();
      });
      this.app.use(this.authenticate);
    }
  
    hasApp() {
      return this?.app ? true : false;
    }
  
    getApp() {
      if (this.hasApp() === false) {
        throw new Error('Please initialise service context using connectExpress() fn.');
      }
      return this.app;
    }
  
  }

export function useContext() {
    return ServiceContext.getInstance();
  }

  
export function connectExpress(app: Express): Express {
    if (useContext().hasApp() === true) {
      throw new Error('connectExpress should be called only once');
    }
    useContext().setApp(app);
    return app;
  }