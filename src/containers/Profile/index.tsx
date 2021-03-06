import * as React from 'react';
import { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// eslint-disable-next-line no-unused-vars
import { IRepository } from '../../../domain/interfaces';

import './styles.scss';

import Spinner from '../../components/Spinner';
import UserInfo from '../../components/UserInfo';
import UserRepository from '../../components/UserRepository';

const GET_USER = gql`
  query($user: String!){
    user(login: $user) {
      avatarUrl
      login
      email
      url
      id
      repositories(first: 100) {
        edges {
          node {
            name
            description
            url
            isPrivate
          }
        }
      }
    }
  }
`;

const Profile = ({ user }: { user: string }) => {
  const [repositories, setRepositories] = useState([]);
  const [sortedRepositories, setSortedRepositories] = useState([]);

  useEffect(() => {
    setRepositories(sortedRepositories);
  }, [sortedRepositories]);

  const sortRepositoriesByName = () => {  
    const sorted = repositories.sort((a: IRepository, b: IRepository) => {
      return a.node.name.toLowerCase().localeCompare(b.node.name.toLowerCase());
    });
    setSortedRepositories(sorted);
  };

  return (
    <Query
      query={GET_USER}
      variables={{ 'user': user }}
      onCompleted={(data: any) => setRepositories(data.user.repositories.edges)}
    >
      {
        ((result: any) => {
          const { loading, error, data } = result;

          if (loading && user !== '') return <Spinner />;
          if (user === '') return null;
          if (error) return <p>Something went wrong :( <br /> Check the entered username.</p>;

          return (
            <div className='row'>
              <div className='column'>
                <UserInfo data={data} />
              </div>
              <div className='column'>
                <h1>Repositories</h1>

                {repositories.length === 0 ?
                  <p>No repositories available.</p>
                  :
                  <>
                    <p className='pointer' onClick={sortRepositoriesByName}>Sort repositories by name</p>
                    {repositories.map((repository: IRepository, i: number) => <UserRepository key={i} repository={repository} />)}
                  </>
                }
              </div>
            </div>
          );
        })
      }
    </Query>
  );
};

export default Profile;
