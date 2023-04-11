import { FC } from "react"
import { User } from "@rtrpc/server/src/user/types";

type Props = {
  users: User[]
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div  style={{ textAlign: "left", margin: "20px 10px", padding: "10px",  border: "1px solid lightblue" }}>
      <div>User List</div>
      <ol>
        {
          (users ?? []).map(item => <li key={item.id}>{ item.name }</li>)
        }
      </ol>
    </div>
  )
};

UserList.defaultProps = {
  users: []
}

export default UserList;