export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null

  private constructor () {}

  static getInstance () {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic()
    }
    return MyDatabaseClassic.instance
  }
}
