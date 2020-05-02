import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { IRepository } from '../../../domain/interfaces';

import './styles.scss';

const RepositoryList = ({ repository }: { repository: IRepository }) => {
  const { name, description, isPrivate, url } = repository.node;

  return (
    <div className='user-repository'>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Is private: {isPrivate.toString()}</p>
      <a href={url}>{url}</a>
    </div>
  );
};

export default RepositoryList;
