/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHome = /* GraphQL */ `query GetHome($id: ID!) {
  getHome(id: $id) {
    id
    address
    price
    image_url
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
