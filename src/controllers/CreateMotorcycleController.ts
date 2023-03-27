import { Request, Response } from 'express';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class CreateMotorcycleController {
    constructor(private _service: IModel<IMotorcycle>) { }

    public async create(
        req: Request & { body: IMotorcycle },
        res: Response<IMotorcycle>,
    ) {
        const results = await this._service.create(req.body);
        return res.status(201).json(results);
    }

    public async read(
        _req: Request,
        res: Response<IMotorcycle[]>,
    ) {
        const results = await this._service.read();
        return res.status(200).json(results);
    }

    public async readOne(
        req: Request,
        res: Response<IMotorcycle>,
    ) {
        const results = await this._service.readOne(req.params.id) as IMotorcycle;
        res.status(200).json(results);
    }

    public async update(
        req: Request,
        res: Response<IMotorcycle | null>,
    ) {
        const results = await this._service.update(req.params.id, req.body);
        return res.status(200).json(results);
    }

    public async delete(
        req: Request,
        res: Response<IMotorcycle>,
    ) {
        const results = await this._service.delete(req.params.id) as IMotorcycle;
        res.status(204).json(results);
    }
}