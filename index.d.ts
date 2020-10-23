import { PlainObject } from 'egg';

interface xmlBodyParser extends PlainObject {
  encoding?: string;
  limit?: string;
  key?: string;
  xmlOptions?: PlainObject;
}

declare module 'egg' {
  interface EggAppConfig {
    xmlBodyParser?: xmlBodyParser
  }
}
