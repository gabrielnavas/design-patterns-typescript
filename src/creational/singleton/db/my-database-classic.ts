interface User {
  name: string
  age: number
}
export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null
  private users: User[] = []

  private constructor () {}

  static getInstance () {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic()
    }
    return MyDatabaseClassic.instance
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
