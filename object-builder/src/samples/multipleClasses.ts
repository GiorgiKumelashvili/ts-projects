import { Builder, GenericBuilder } from '../package/BuilderDecorator';

class Model {
	public name: string;
}

@Builder()
class Modelbuilder extends GenericBuilder<Modelbuilder>() {
	public name: string;
}

@Builder()
class CarBuilder extends GenericBuilder<CarBuilder>() {
	public model: Model;
	public price: number;
}

const model = Modelbuilder.builder.setName('Honda').build();
const car = CarBuilder.builder.setModel(model).setPrice(123).build();

console.log(car);
