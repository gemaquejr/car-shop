import { IModel } from '../interfaces/IModel';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { ErrorTypes } from '../errors/catalog';

export default class CreateCarService implements IModel<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const results = await this._car.read();
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    return results;
  }

  public async readOne(_id: string): Promise<ICar> {
    const results = await this._car.readOne(_id);
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    return results;
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(_id);
    const results = await this._car.update(_id, obj);
    return results;
  }
}