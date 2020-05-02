import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { IRepository } from '../../../domain/interfaces';

import './styles.scss';
import publicIcon from '../../assets/public.svg';
import privateIcon from '../../assets/private.svg';

const RepositoryList = ({ repository }: { repository: IRepository }) => {
  const { name, description, isPrivate, url } = repository.node;

  return (
    <div className='user-repository'>
      <div className='title'>
        <img
          src={isPrivate ? privateIcon : publicIcon}
          alt={isPrivate ? 'Private repo' : 'Public repo'}
          title={isPrivate ? 'Private repo' : 'Public repo'}
        />
        <a href={url} target='_blank' rel='noopener noreferrer'>{name}</a>
      </div>
      {description && !isPrivate ? <p className='description'>{description}</p> : null}
    </div>
  );
};

export default RepositoryList;
