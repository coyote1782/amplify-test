/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPeople = /* GraphQL */ `query GetPeople($id: ID!) {
  getPeople(id: $id) {
    id
    name
    sex
    homeID
    Home {
      id
      address
      price
      image_url
      tags
      People {
        items {
          id
          name
          sex
          homeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPeopleQueryVariables, APITypes.GetPeopleQuery>;
export const listPeople = /* GraphQL */ `query ListPeople(
  $filter: ModelPeopleFilterInput
  $limit: Int
  $nextToken: String
) {
  listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sex
      homeID
      Home {
        id
        address
        price
        image_url
        tags
        People {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPeopleQueryVariables,
  APITypes.ListPeopleQuery
>;
export const syncPeople = /* GraphQL */ `query SyncPeople(
  $filter: ModelPeopleFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPeople(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      sex
      homeID
      Home {
        id
        address
        price
        image_url
        tags
        People {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPeopleQueryVariables,
  APITypes.SyncPeopleQuery
>;
export const peopleByHomeID = /* GraphQL */ `query PeopleByHomeID(
  $homeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPeopleFilterInput
  $limit: Int
  $nextToken: String
) {
  peopleByHomeID(
    homeID: $homeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sex
      homeID
      Home {
        id
        address
        price
        image_url
        tags
        People {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PeopleByHomeIDQueryVariables,
  APITypes.PeopleByHomeIDQuery
>;
export const getHome = /* GraphQL */ `query GetHome($id: ID!) {
  getHome(id: $id) {
    id
    address
    price
    image_url
    tags
    People {
      items {
        id
        name
        sex
        homeID
        Home {
          id
          address
          price
          image_url
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetHomeQueryVariables, APITypes.GetHomeQuery>;
export const listHomes = /* GraphQL */ `query ListHomes(
  $filter: ModelHomeFilterInput
  $limit: Int
  $nextToken: String
) {
  listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      address
      price
      image_url
      tags
      People {
        items {
          id
          name
          sex
          homeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListHomesQueryVariables, APITypes.ListHomesQuery>;
export const syncHomes = /* GraphQL */ `query SyncHomes(
  $filter: ModelHomeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncHomes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      address
      price
      image_url
      tags
      People {
        items {
          id
          name
          sex
          homeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncHomesQueryVariables, APITypes.SyncHomesQuery>;
