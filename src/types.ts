export interface IUser {
    id: number
    name: string
    age: number
    salary: number
    isMarried?: boolean
}
export interface IContext {
    users:IUser[]
    removeUser:(id:number) => void
    onAdd:(user:inputUser) => void
}
export type inputUser = Omit<IUser, "id">;

