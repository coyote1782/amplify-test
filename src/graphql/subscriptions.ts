/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHome = /* GraphQL */ `subscription OnCreateHome($filter: ModelSubscriptionHomeFilterInput) {
  onCreateHome(filter: $filter) {
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
