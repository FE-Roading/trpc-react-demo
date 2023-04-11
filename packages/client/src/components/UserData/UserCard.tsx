import { trpc } from '../../trpc';

const UserCard = () => {
  const { data, isLoading } = trpc.user.getUserById.useQuery('1');

  if (isLoading) return <div>Loading ...</div>;

  return <div>{data?.name}</div>;
};

export default UserCard;