import { useCallback } from "react"

import { trpc } from '../../trpc';

import UserCard from "./UserCard"
import UserList from "./UserList"
import UserForm from "./UserForm"
import type { UserFormItem } from "./UserForm"

const UserData = () => {
  
  const { data: userList, isLoading: isUserListLoading, refetch: fetchUserList } = trpc.user.getUsers.useQuery()
  const mutation = trpc.user.createUser.useMutation({
    onSuccess: () => fetchUserList(),
  })

  const onSubmit = (data: UserFormItem) => {
    mutation.mutate(data)
  }

  if (isUserListLoading) return <span>Loading ...</span>

  return <div className="userData">
    <UserCard />
    <UserList users={ userList } />
    <UserForm onSubmit={ onSubmit } />
  </div>
}

export default UserData