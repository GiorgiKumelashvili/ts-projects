import { Builder, GenericBuilder } from '../package/BuilderDecorator';

@Builder()
class CarBuilder extends GenericBuilder<CarBuilder>() {
	public model: string;
	public price: number;
}

const car = CarBuilder.builder.setModel('ddd').setPrice(123).build();
console.log(car);
