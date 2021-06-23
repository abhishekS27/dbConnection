import { Injectable } from '@nestjs/common';
import { DbConection } from '../database/connection.database';
import { Cat } from './interfaces/cats.interface';
import { catSchema } from '../shemas/cats.schema';

@Injectable()
export class CatsService {
  async getById(id: string, clientName: string): Promise<Cat> {
    const catModel = await this.getChangeDb(clientName);
    return await catModel.findOne({ _id: id });
  }

  async saveCat(cat: Cat, clientName): Promise<Cat> {
    const catModel = await this.getChangeDb(clientName);
    const newJob = new catModel(cat);
    return await newJob.save();
  }

  async getChangeDb(clientName) {
    const conn = await DbConection.changeDb(clientName);
    // const conn = await DbConection._db.useDb(clientName);
    const catModel = conn.model<Cat>('Cat', catSchema);
    return catModel;
  }
}
