import { User } from './interfaces/user'

export class MyDatabaseStyleTS {
  private static _instance: MyDatabaseStyleTS | null = null

  private constructor (
    public user: User[] = []
  ) {}

  static get instance () {
    if (MyDatabaseStyleTS._instance === null) {
      MyDatabaseStyleTS._instance = new MyDatabaseStyleTS()
    }
    return MyDatabaseStyleTS._instance
  }
}
