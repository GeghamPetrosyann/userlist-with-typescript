import { useContext, useState } from 'react';
import { inputUser } from '../types';
import { UserContext } from '../context';

export default function AddUser() {

    const [user, setUser] = useState<inputUser>({ name: '', age: 0, salary: 0 });
    const [error, setError] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement | undefined>) => {
        event.preventDefault()
        if (!user.name.trim() || !user.age || !user.salary) {
            return setError("Plz fill all fileds")
        } else if (!isNaN(Number(user.name))) {
            return setError("name must be text")
        }
        setError("")
        onAdd(user)
        setUser({ name: '', age: 0, salary: 0 })
    }

    const context = useContext(UserContext);

    if (!context) {
        throw new Error("Context not found");
    }

    const { onAdd } = context;


    return <>
        <form
            onSubmit={handleSubmit}
        >
            {error && <p className='error'>{error}</p>}
            <input
                type="text"
                placeholder='enter the name'
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="text"
                placeholder='enter the age'
                value={user.age}
                onChange={e => setUser({ ...user, age: +e.target.value })}
            />
            <input
                type="text"
                placeholder='enter the salary'
                value={user.salary}
                onChange={e => setUser({ ...user, salary: +e.target.value })}
            />
            <button>save</button>
        </form>
    </>
}
