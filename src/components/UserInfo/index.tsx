import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { IUser } from '../../../domain/interfaces';

import './styles.scss';

import userIcon from '../../assets/user.svg';
import linkIcon from '../../assets/link.svg';
import emailIcon from '../../assets/email.svg';

const UserInfo = ({ data: { user } }: { data: { user: IUser } }) => {
  const { avatarUrl, login, email, url } = user;

  return (
    <div className='user-info'>
      <img className='avatar' src={avatarUrl} alt={login} />
      <div>
        <img className='icon' src={userIcon} alt='User icon' />
        <span>{login}</span>
      </div>
      { email ?
        <div>
          <img className='icon' src={emailIcon} alt='Email icon' />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        :
        null
      }
      <div>
        <img className='icon' src={linkIcon} alt='Link icon' />
        <a href={url} target='_blank' rel='noopener noreferrer'>Github profile</a>
      </div>
    </div>
  );
};

export default UserInfo;
