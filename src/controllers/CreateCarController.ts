import { Request, Response } from 'express';
import { IModel } from '../interfaces/IModel';
import { ICar } from '../interfaces/ICar';

export default class CreateCarController {
  constructor(private _service: IModel<ICar>) {}

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request, 
    res: Response<ICar[]>,
  ) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(
    req: Request, 
    res: Response<ICar>,
  ) {
    const results = await this._service.readOne(req.params.id) as ICar;
    res.status(200).json(results);
  }
}
