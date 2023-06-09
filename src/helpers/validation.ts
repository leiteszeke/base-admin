import { FormikErrors } from "formik";
import * as yup from "yup";

type FormikValue = string | Date | number | null | boolean;
type FormikError = FormikErrors<any> | string;

export const isValid = (value?: FormikValue, error?: FormikError) => {
  if (value?.toString().length === 0 && typeof error === "undefined") {
    return false;
  }

  return !!value && typeof error === "undefined";
};

export const isInvalid = (error?: FormikError) => {
  if (typeof error === "undefined") {
    return false;
  }

  return typeof error !== "undefined";
};

export const getValidity = (value?: FormikValue, error?: FormikError) => ({
  valid: isValid(value, error),
  invalid: isInvalid(error),
});

yup.addMethod(yup.string, "integer", function (message: string) {
  return this.test(
    "integer",
    message,
    (value) => (value?.match(/^[1-9]\d*(\.\d+)?$/)?.length ?? 0) > 0 ?? false
  );
});

yup.addMethod(yup.string, "numeric", function (message: string) {
  return this.test(
    "numeric",
    message,
    (value) => (value?.match(/^[1-9]\d*(\.\d+)?$/)?.length ?? 0) >= 0 ?? false
  );
});

yup.addMethod(yup.string, "dniOrCuit", function (message: string) {
  return this.test("dniOrCuit", message, (value) => {
    const matchDni = (value?.match(/^[0-9]{7,8}$/)?.length ?? 0) > 0;
    const matchCuit = (value?.match(/^[0-9]{10,11}$/)?.length ?? 0) > 0;

    return matchDni || matchCuit;
  });
});

yup.addMethod(yup.date, "afterThan", function (ref, message) {
  return this.test({
    name: "greaterThan",
    message: message || "La fecha debe ser mayor a la fecha de inicio",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      if (this.schema.spec.nullable && !value) {
        return true;
      }

      return value ? value > this.resolve(ref) : false;
    },
  });
});

export default yup;
