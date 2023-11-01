/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePeopleInput = {
  id?: string | null,
  name?: string | null,
  sex?: Sex | null,
  homeID: string,
  _version?: number | null,
};

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type ModelPeopleConditionInput = {
  name?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  homeID?: ModelIDInput | null,
  and?: Array< ModelPeopleConditionInput | null > | null,
  or?: Array< ModelPeopleConditionInput | null > | null,
  not?: ModelPeopleConditionInput | null,
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

export type ModelSexInput = {
  eq?: Sex | null,
  ne?: Sex | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type People = {
  __typename: "People",
  id: string,
  name?: string | null,
  sex?: Sex | null,
  homeID: string,
  Home?: Home | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Home = {
  __typename: "Home",
  id: string,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  tags?: Array< string | null > | null,
  People?: ModelPeopleConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPeopleConnection = {
  __typename: "ModelPeopleConnection",
  items:  Array<People | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePeopleInput = {
  id: string,
  name?: string | null,
  sex?: Sex | null,
  homeID?: string | null,
  _version?: number | null,
};

export type DeletePeopleInput = {
  id: string,
  _version?: number | null,
};

export type CreateHomeInput = {
  id?: string | null,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelHomeConditionInput = {
  address?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelHomeConditionInput | null > | null,
  or?: Array< ModelHomeConditionInput | null > | null,
  not?: ModelHomeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type UpdateHomeInput = {
  id: string,
  address?: string | null,
  price?: number | null,
  image_url?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteHomeInput = {
  id: string,
  _version?: number | null,
};

export type ModelPeopleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  homeID?: ModelIDInput | null,
  and?: Array< ModelPeopleFilterInput | null > | null,
  or?: Array< ModelPeopleFilterInput | null > | null,
  not?: ModelPeopleFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelHomeFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelHomeFilterInput | null > | null,
  or?: Array< ModelHomeFilterInput | null > | null,
  not?: ModelHomeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelHomeConnection = {
  __typename: "ModelHomeConnection",
  items:  Array<Home | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionPeopleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sex?: ModelSubscriptionStringInput | null,
  homeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPeopleFilterInput | null > | null,
  or?: Array< ModelSubscriptionPeopleFilterInput | null > | null,
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

export type ModelSubscriptionHomeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image_url?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHomeFilterInput | null > | null,
  or?: Array< ModelSubscriptionHomeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type CreatePeopleMutationVariables = {
  input: CreatePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type CreatePeopleMutation = {
  createPeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePeopleMutationVariables = {
  input: UpdatePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type UpdatePeopleMutation = {
  updatePeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePeopleMutationVariables = {
  input: DeletePeopleInput,
  condition?: ModelPeopleConditionInput | null,
};

export type DeletePeopleMutation = {
  deletePeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPeopleQueryVariables = {
  id: string,
};

export type GetPeopleQuery = {
  getPeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPeopleConnection",
    items:  Array< {
      __typename: "People",
      id: string,
      name?: string | null,
      sex?: Sex | null,
      homeID: string,
      Home?:  {
        __typename: "Home",
        id: string,
        address?: string | null,
        price?: number | null,
        image_url?: string | null,
        tags?: Array< string | null > | null,
        People?:  {
          __typename: "ModelPeopleConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
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

export type SyncPeopleQueryVariables = {
  filter?: ModelPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPeopleQuery = {
  syncPeople?:  {
    __typename: "ModelPeopleConnection",
    items:  Array< {
      __typename: "People",
      id: string,
      name?: string | null,
      sex?: Sex | null,
      homeID: string,
      Home?:  {
        __typename: "Home",
        id: string,
        address?: string | null,
        price?: number | null,
        image_url?: string | null,
        tags?: Array< string | null > | null,
        People?:  {
          __typename: "ModelPeopleConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
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

export type PeopleByHomeIDQueryVariables = {
  homeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeopleByHomeIDQuery = {
  peopleByHomeID?:  {
    __typename: "ModelPeopleConnection",
    items:  Array< {
      __typename: "People",
      id: string,
      name?: string | null,
      sex?: Sex | null,
      homeID: string,
      Home?:  {
        __typename: "Home",
        id: string,
        address?: string | null,
        price?: number | null,
        image_url?: string | null,
        tags?: Array< string | null > | null,
        People?:  {
          __typename: "ModelPeopleConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
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
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type OnCreatePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnCreatePeopleSubscription = {
  onCreatePeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnUpdatePeopleSubscription = {
  onUpdatePeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePeopleSubscriptionVariables = {
  filter?: ModelSubscriptionPeopleFilterInput | null,
};

export type OnDeletePeopleSubscription = {
  onDeletePeople?:  {
    __typename: "People",
    id: string,
    name?: string | null,
    sex?: Sex | null,
    homeID: string,
    Home?:  {
      __typename: "Home",
      id: string,
      address?: string | null,
      price?: number | null,
      image_url?: string | null,
      tags?: Array< string | null > | null,
      People?:  {
        __typename: "ModelPeopleConnection",
        items:  Array< {
          __typename: "People",
          id: string,
          name?: string | null,
          sex?: Sex | null,
          homeID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
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
    tags?: Array< string | null > | null,
    People?:  {
      __typename: "ModelPeopleConnection",
      items:  Array< {
        __typename: "People",
        id: string,
        name?: string | null,
        sex?: Sex | null,
        homeID: string,
        Home?:  {
          __typename: "Home",
          id: string,
          address?: string | null,
          price?: number | null,
          image_url?: string | null,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
