import { Builder as ObjectBuilder, IBuilder as IObjectBuilder } from './Builder';

export function Builder<T extends { new (...args: any[]): {} }>() {
  return (constructor: any) => {
    constructor.builder = ObjectBuilder<T>();
  };
}

/**
 * @description this class serves as intelisense
 * @returns
 */
export function GenericBuilder<T>() {
  abstract class GenericBuilder {
    static builder: IObjectBuilder<T>;
  }

  return GenericBuilder;
}
