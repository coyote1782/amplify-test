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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Home, People as People0 } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
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
export default function HomeUpdateForm(props) {
  const {
    id: idProp,
    home: homeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    address: "",
    price: "",
    image_url: "",
    tags: [],
    People: [],
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [price, setPrice] = React.useState(initialValues.price);
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [People, setPeople] = React.useState(initialValues.People);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = homeRecord
      ? { ...initialValues, ...homeRecord, People: linkedPeople }
      : initialValues;
    setAddress(cleanValues.address);
    setPrice(cleanValues.price);
    setImage_url(cleanValues.image_url);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setPeople(cleanValues.People ?? []);
    setCurrentPeopleValue(undefined);
    setCurrentPeopleDisplayValue("");
    setErrors({});
  };
  const [homeRecord, setHomeRecord] = React.useState(homeModelProp);
  const [linkedPeople, setLinkedPeople] = React.useState([]);
  const canUnlinkPeople = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Home, idProp)
        : homeModelProp;
      setHomeRecord(record);
      const linkedPeople = record ? await record.People.toArray() : [];
      setLinkedPeople(linkedPeople);
    };
    queryData();
  }, [idProp, homeModelProp]);
  React.useEffect(resetStateValues, [homeRecord, linkedPeople]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const [currentPeopleDisplayValue, setCurrentPeopleDisplayValue] =
    React.useState("");
  const [currentPeopleValue, setCurrentPeopleValue] = React.useState(undefined);
  const PeopleRef = React.createRef();
  const getIDValue = {
    People: (r) => JSON.stringify({ id: r?.id }),
  };
  const PeopleIdSet = new Set(
    Array.isArray(People)
      ? People.map((r) => getIDValue.People?.(r))
      : getIDValue.People?.(People)
  );
  const peopleRecords = useDataStoreBinding({
    type: "collection",
    model: People0,
  }).items;
  const getDisplayValue = {
    People: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    address: [],
    price: [],
    image_url: [],
    tags: [],
    People: [],
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
          address,
          price,
          image_url,
          tags,
          People,
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
          const promises = [];
          const peopleToLink = [];
          const peopleToUnLink = [];
          const peopleSet = new Set();
          const linkedPeopleSet = new Set();
          People.forEach((r) => peopleSet.add(getIDValue.People?.(r)));
          linkedPeople.forEach((r) =>
            linkedPeopleSet.add(getIDValue.People?.(r))
          );
          linkedPeople.forEach((r) => {
            if (!peopleSet.has(getIDValue.People?.(r))) {
              peopleToUnLink.push(r);
            }
          });
          People.forEach((r) => {
            if (!linkedPeopleSet.has(getIDValue.People?.(r))) {
              peopleToLink.push(r);
            }
          });
          peopleToUnLink.forEach((original) => {
            if (!canUnlinkPeople) {
              throw Error(
                `People ${original.id} cannot be unlinked from Home because undefined is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                People0.copyOf(original, (updated) => {
                  updated.Home = null;
                })
              )
            );
          });
          peopleToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                People0.copyOf(original, (updated) => {
                  updated.Home = homeRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            address: modelFields.address,
            price: modelFields.price,
            image_url: modelFields.image_url,
            tags: modelFields.tags,
          };
          promises.push(
            DataStore.save(
              Home.copyOf(homeRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HomeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              price,
              image_url,
              tags,
              People,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              price: value,
              image_url,
              tags,
              People,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={image_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              price,
              image_url: value,
              tags,
              People,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              address,
              price,
              image_url,
              tags: values,
              People,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              address,
              price,
              image_url,
              tags,
              People: values,
            };
            const result = onChange(modelFields);
            values = result?.People ?? values;
          }
          setPeople(values);
          setCurrentPeopleValue(undefined);
          setCurrentPeopleDisplayValue("");
        }}
        currentFieldValue={currentPeopleValue}
        label={"People"}
        items={People}
        hasError={errors?.People?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("People", currentPeopleValue)
        }
        errorMessage={errors?.People?.errorMessage}
        getBadgeText={getDisplayValue.People}
        setFieldValue={(model) => {
          setCurrentPeopleDisplayValue(
            model ? getDisplayValue.People(model) : ""
          );
          setCurrentPeopleValue(model);
        }}
        inputFieldRef={PeopleRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="People"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search People"
          value={currentPeopleDisplayValue}
          options={peopleRecords
            .filter((r) => !PeopleIdSet.has(getIDValue.People?.(r)))
            .map((r) => ({
              id: getIDValue.People?.(r),
              label: getDisplayValue.People?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPeopleValue(
              peopleRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPeopleDisplayValue(label);
            runValidationTasks("People", label);
          }}
          onClear={() => {
            setCurrentPeopleDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.People?.hasError) {
              runValidationTasks("People", value);
            }
            setCurrentPeopleDisplayValue(value);
            setCurrentPeopleValue(undefined);
          }}
          onBlur={() => runValidationTasks("People", currentPeopleDisplayValue)}
          errorMessage={errors.People?.errorMessage}
          hasError={errors.People?.hasError}
          ref={PeopleRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "People")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || homeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || homeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
