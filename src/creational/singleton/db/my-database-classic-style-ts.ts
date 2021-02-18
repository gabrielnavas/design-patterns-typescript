import { User } from './interfaces/user'

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null

  private constructor (
    public user: User[] = []
  ) {}

  static get instance () {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic()
    }
    return MyDatabaseClassic._instance
  }
}
