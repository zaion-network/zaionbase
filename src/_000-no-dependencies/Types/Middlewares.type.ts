declare module "./Middlewares.type" {
  namespace Middlewares {
    type Middleware<T> = (curr: T) => void;
  }
}
