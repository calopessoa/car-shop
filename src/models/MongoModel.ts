import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import CustomError from '../helpers/CustomError';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(400, 'InvalidMongoId');

    return this._model.findOne({ _id });
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(400, 'InvalidMongoId');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(400, 'InvalidMongoId');

    return this._model.findByIdAndRemove({ _id });
  }
}