/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { People, Home as Home0 } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PeopleUpdateFormInputValues = {
    name?: string;
    sex?: string;
    Home?: Home0;
    image?: string;
};
export declare type PeopleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    Home?: ValidationFunction<Home0>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeopleUpdateFormOverridesProps = {
    PeopleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    Home?: PrimitiveOverrideProps<AutocompleteProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeopleUpdateFormProps = React.PropsWithChildren<{
    overrides?: PeopleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    people?: People;
    onSubmit?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onSuccess?: (fields: PeopleUpdateFormInputValues) => void;
    onError?: (fields: PeopleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onValidate?: PeopleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PeopleUpdateForm(props: PeopleUpdateFormProps): React.ReactElement;
