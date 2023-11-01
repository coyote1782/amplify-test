/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { People, Home as Home0 } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { Field } from "@aws-amplify/ui-react/internal";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PeopleCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    sex: "",
    Home: undefined,
    image: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [Home, setHome] = React.useState(initialValues.Home);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setSex(initialValues.sex);
    setHome(initialValues.Home);
    setCurrentHomeValue(undefined);
    setCurrentHomeDisplayValue("");
    setImage(initialValues.image);
    setErrors({});
  };
  const [currentHomeDisplayValue, setCurrentHomeDisplayValue] =
    React.useState("");
  const [currentHomeValue, setCurrentHomeValue] = React.useState(undefined);
  const HomeRef = React.createRef();
  const getIDValue = {
    Home: (r) => JSON.stringify({ id: r?.id }),
  };
  const HomeIdSet = new Set(
    Array.isArray(Home)
      ? Home.map((r) => getIDValue.Home?.(r))
      : getIDValue.Home?.(Home)
  );
  const homeRecords = useDataStoreBinding({
    type: "collection",
    model: Home0,
  }).items;
  const getDisplayValue = {
    Home: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    sex: [],
    Home: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          sex,
          Home,
          image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new People(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PeopleCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              sex,
              Home,
              image,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              sex: value,
              Home,
              image,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "sexoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "sexoption1")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "sexoption2")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              sex,
              Home: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.Home ?? value;
          }
          setHome(value);
          setCurrentHomeValue(undefined);
          setCurrentHomeDisplayValue("");
        }}
        currentFieldValue={currentHomeValue}
        label={"Home"}
        items={Home ? [Home] : []}
        hasError={errors?.Home?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Home", currentHomeValue)
        }
        errorMessage={errors?.Home?.errorMessage}
        getBadgeText={getDisplayValue.Home}
        setFieldValue={(model) => {
          setCurrentHomeDisplayValue(model ? getDisplayValue.Home(model) : "");
          setCurrentHomeValue(model);
        }}
        inputFieldRef={HomeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Home"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Home"
          value={currentHomeDisplayValue}
          options={homeRecords
            .filter((r) => !HomeIdSet.has(getIDValue.Home?.(r)))
            .map((r) => ({
              id: getIDValue.Home?.(r),
              label: getDisplayValue.Home?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentHomeValue(
              homeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentHomeDisplayValue(label);
            runValidationTasks("Home", label);
          }}
          onClear={() => {
            setCurrentHomeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Home?.hasError) {
              runValidationTasks("Home", value);
            }
            setCurrentHomeDisplayValue(value);
            setCurrentHomeValue(undefined);
          }}
          onBlur={() => runValidationTasks("Home", currentHomeDisplayValue)}
          errorMessage={errors.Home?.errorMessage}
          hasError={errors.Home?.hasError}
          ref={HomeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Home")}
        ></Autocomplete>
      </ArrayField>
      <Field
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  name,
                  sex,
                  Home,
                  image: value,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImage((prev) => {
              let value = initialValues?.image;
              if (onChange) {
                const modelFields = {
                  name,
                  sex,
                  Home,
                  image: value,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/png"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          maxSize={1000000}
          {...getOverrideProps(overrides, "image")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
