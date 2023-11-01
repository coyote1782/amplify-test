import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type EagerPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly homeID: string;
  readonly Home?: Home | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly homeID: string;
  readonly Home: AsyncItem<Home | undefined>;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type People = LazyLoading extends LazyLoadingDisabled ? EagerPeople : LazyPeople

export declare const People: (new (init: ModelInit<People>) => People) & {
  copyOf(source: People, mutator: (draft: MutableModel<People>) => MutableModel<People> | void): People;
}

type EagerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly People?: (People | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly People: AsyncCollection<People>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}