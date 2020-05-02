import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// eslint-disable-next-line no-unused-vars
import { IRepository } from '../../../domain/interfaces';

import './styles.scss';

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
  return (
    <Query query={GET_USER} variables={{ 'user': user }}>
      {
        ((result: any) => {
          const { loading, error, data } = result;

          if (loading) return <p>Loading...</p>;
          if (user === '') return null;
          if (error) return <p>Error</p>;
          
          const repositories = data.user.repositories.edges;

          return (
            <div className='row'>
              <div className='column'>
                <UserInfo data={data} />
              </div>
              <div className='column'>
                <h1>Repositories</h1>
                {
                  repositories.map((repository: IRepository, i: number) => <UserRepository key={i} repository={repository} />)
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
