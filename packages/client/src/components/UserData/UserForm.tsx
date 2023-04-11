import { useState, FC, useCallback, ChangeEvent, FormEvent } from "react"
import { User } from "@rtrpc/server/src/user/types";

export type UserFormItem = Omit<User, "id">

type Props = {
  onSubmit?: (user: UserFormItem) => void
}

const UserForm: FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("")

  const _onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    onSubmit?.({
      name: name.trim()
    })

    event.preventDefault()
    setName("")
  }, [onSubmit, name])

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }, [])

  return (
    <form onSubmit={ _onSubmit }>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={onNameChange}
        />

        <button type="submit">Create</button>
      </form>
  )
}

export default UserForm