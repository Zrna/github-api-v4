import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { IUser } from '../../../domain/interfaces';

const UserInfo = ({ data: { user } }: { data: { user: IUser } }) => {
  const { avatarUrl, login, email, url } = user;

  return (
    <div>
      <img src={avatarUrl} alt={login} />
      <p>Usename: {login}</p>
      <p>Email: {email}</p>
      <a href={url} target='_blank' rel='noopener noreferrer'>Link to Github profile</a>
      <hr />
    </div>
  );
};

export default UserInfo;
