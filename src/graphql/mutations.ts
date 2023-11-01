/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPeople = /* GraphQL */ `mutation CreatePeople(
  $input: CreatePeopleInput!
  $condition: ModelPeopleConditionInput
) {
  createPeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePeopleMutationVariables,
  APITypes.CreatePeopleMutation
>;
export const updatePeople = /* GraphQL */ `mutation UpdatePeople(
  $input: UpdatePeopleInput!
  $condition: ModelPeopleConditionInput
) {
  updatePeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePeopleMutationVariables,
  APITypes.UpdatePeopleMutation
>;
export const deletePeople = /* GraphQL */ `mutation DeletePeople(
  $input: DeletePeopleInput!
  $condition: ModelPeopleConditionInput
) {
  deletePeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePeopleMutationVariables,
  APITypes.DeletePeopleMutation
>;
export const createHome = /* GraphQL */ `mutation CreateHome(
  $input: CreateHomeInput!
  $condition: ModelHomeConditionInput
) {
  createHome(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHomeMutationVariables,
  APITypes.CreateHomeMutation
>;
export const updateHome = /* GraphQL */ `mutation UpdateHome(
  $input: UpdateHomeInput!
  $condition: ModelHomeConditionInput
) {
  updateHome(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHomeMutationVariables,
  APITypes.UpdateHomeMutation
>;
export const deleteHome = /* GraphQL */ `mutation DeleteHome(
  $input: DeleteHomeInput!
  $condition: ModelHomeConditionInput
) {
  deleteHome(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHomeMutationVariables,
  APITypes.DeleteHomeMutation
>;
