/* eslint-disable prettier/prettier */
import { connect, Connection } from 'mongoose';
export class DbConection {
  static _db: Connection;

 static async changeDb(clientName ) {
    return await DbConection._db.useDb(clientName);  
  }

  static async connect() {
    const db = await this.createConnection();
    console.log(db.connection.readyState);
         this._db = db.connection
  }

  private static async createConnection() {
    try{
      return await connect(
        'mongodb://localhost/ketch',{
             useNewUrlParser: true ,
             useUnifiedTopology: true ,
             dbName: 'ktech'
            }
      )
    }catch(err){
      console.log('Error While Connecting To Database');   
    }
  }
}

