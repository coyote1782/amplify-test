/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHomeInput = {
  id?: string | null,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  _version?: number | null,
};

export type ModelHomeConditionInput = {
  address?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  and?: Array< ModelHomeConditionInput | null > | null,
  or?: Array< ModelHomeConditionInput | null > | null,
  not?: ModelHomeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Home = {
  __typename: "Home",
  id: string,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateHomeInput = {
  id: string,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  _version?: number | null,
};

export type DeleteHomeInput = {
  id: string,
  _version?: number | null,
};

export type ModelHomeFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  and?: Array< ModelHomeFilterInput | null > | null,
  or?: Array< ModelHomeFilterInput | null > | null,
  not?: ModelHomeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelHomeConnection = {
  __typename: "ModelHomeConnection",
  items:  Array<Home | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionHomeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image_url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHomeFilterInput | null > | null,
  or?: Array< ModelSubscriptionHomeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateHomeMutationVariables = {
  input: CreateHomeInput,
  condition?: ModelHomeConditionInput | null,
};

export type CreateHomeMutation = {
  createHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHomeMutationVariables = {
  input: UpdateHomeInput,
  condition?: ModelHomeConditionInput | null,
};

export type UpdateHomeMutation = {
  updateHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHomeMutationVariables = {
  input: DeleteHomeInput,
  condition?: ModelHomeConditionInput | null,
};

export type DeleteHomeMutation = {
  deleteHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetHomeQueryVariables = {
  id: string,
};

export type GetHomeQuery = {
  getHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHomesQueryVariables = {
  filter?: ModelHomeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHomesQuery = {
  listHomes?:  {
    __typename: "ModelHomeConnection",
    items:  Array< {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHomesQueryVariables = {
  filter?: ModelHomeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHomesQuery = {
  syncHomes?:  {
    __typename: "ModelHomeConnection",
    items:  Array< {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateHomeSubscriptionVariables = {
  filter?: ModelSubscriptionHomeFilterInput | null,
};

export type OnCreateHomeSubscription = {
  onCreateHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHomeSubscriptionVariables = {
  filter?: ModelSubscriptionHomeFilterInput | null,
};

export type OnUpdateHomeSubscription = {
  onUpdateHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHomeSubscriptionVariables = {
  filter?: ModelSubscriptionHomeFilterInput | null,
};

export type OnDeleteHomeSubscription = {
  onDeleteHome?:  {
    __typename: "Home",
    id: string,
    address?: string | null,
    price?: number | null,
    image_url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
