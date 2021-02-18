import { User } from './interfaces/user'

export class MyDatabaseStyleTS {
  private static _instance: MyDatabaseStyleTS | null = null

  private constructor (
    public users: User[] = []
  ) {}

  static get instance () {
    if (MyDatabaseStyleTS._instance === null) {
      MyDatabaseStyleTS._instance = new MyDatabaseStyleTS()
    }
    return MyDatabaseStyleTS._instance
  }

  add (user: User):void {
    this.users.push(user)
  }

  remove (index: number): void {
    this.users.splice(index, 1)
  }

  show (): void {
    console.log(this.users)
  }
}
