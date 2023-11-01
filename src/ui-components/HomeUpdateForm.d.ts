/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Home, People as People0 } from "../models";
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
export declare type HomeUpdateFormInputValues = {
    address?: string;
    price?: number;
    image_url?: string;
    tags?: string[];
    People?: People0[];
};
export declare type HomeUpdateFormValidationValues = {
    address?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    image_url?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    People?: ValidationFunction<People0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeUpdateFormOverridesProps = {
    HomeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    People?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type HomeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    home?: Home;
    onSubmit?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onSuccess?: (fields: HomeUpdateFormInputValues) => void;
    onError?: (fields: HomeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onValidate?: HomeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomeUpdateForm(props: HomeUpdateFormProps): React.ReactElement;
