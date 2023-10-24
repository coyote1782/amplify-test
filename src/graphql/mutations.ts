/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHome = /* GraphQL */ `mutation CreateHome(
  $input: CreateHomeInput!
  $condition: ModelHomeConditionInput
) {
  createHome(input: $input, condition: $condition) {
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
