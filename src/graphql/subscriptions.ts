/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePeople = /* GraphQL */ `subscription OnCreatePeople($filter: ModelSubscriptionPeopleFilterInput) {
  onCreatePeople(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePeopleSubscriptionVariables,
  APITypes.OnCreatePeopleSubscription
>;
export const onUpdatePeople = /* GraphQL */ `subscription OnUpdatePeople($filter: ModelSubscriptionPeopleFilterInput) {
  onUpdatePeople(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePeopleSubscriptionVariables,
  APITypes.OnUpdatePeopleSubscription
>;
export const onDeletePeople = /* GraphQL */ `subscription OnDeletePeople($filter: ModelSubscriptionPeopleFilterInput) {
  onDeletePeople(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePeopleSubscriptionVariables,
  APITypes.OnDeletePeopleSubscription
>;
export const onCreateHome = /* GraphQL */ `subscription OnCreateHome($filter: ModelSubscriptionHomeFilterInput) {
  onCreateHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHomeSubscriptionVariables,
  APITypes.OnCreateHomeSubscription
>;
export const onUpdateHome = /* GraphQL */ `subscription OnUpdateHome($filter: ModelSubscriptionHomeFilterInput) {
  onUpdateHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHomeSubscriptionVariables,
  APITypes.OnUpdateHomeSubscription
>;
export const onDeleteHome = /* GraphQL */ `subscription OnDeleteHome($filter: ModelSubscriptionHomeFilterInput) {
  onDeleteHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHomeSubscriptionVariables,
  APITypes.OnDeleteHomeSubscription
>;
