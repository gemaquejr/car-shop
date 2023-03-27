import { IModel } from '../interfaces/IModel';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import { ErrorTypes } from '../errors/catalog';

export default class CreateCarService implements IModel<IMotorcycle> {
    private _car: IModel<IMotorcycle>;

    constructor(model: IModel<IMotorcycle>) {
        this._car = model;
    }

    public async create(obj: IMotorcycle): Promise<IMotorcycle> {
        const parsed = motorcycleZodSchema.safeParse(obj);
        if (!parsed.success) {
            throw parsed.error;
        }
        return this._car.create(obj);
    }

    public async read(): Promise<IMotorcycle[]> {
        const results = await this._car.read();
        if (!results) throw new Error(ErrorTypes.EntityNotFound);
        return results;
    }

    public async readOne(_id: string): Promise<IMotorcycle> {
        const results = await this._car.readOne(_id);
        if (!results) throw new Error(ErrorTypes.EntityNotFound);
        return results;
    }

    public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
        const parsed = motorcycleZodSchema.safeParse(obj);
        if (!parsed.success) {
            throw parsed.error;
        }
        await this.readOne(_id);
        const results = await this._car.update(_id, obj);
        return results;
    }

    public async delete(_id: string): Promise<IMotorcycle> {
        const results = await this._car.delete(_id);
        if (!results) throw new Error(ErrorTypes.EntityNotFound);
        return results;
    }
}