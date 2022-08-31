import { cilPlus, cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CForm, CFormInput, CRow } from "@coreui/react-pro";
import { useFormik } from "formik";
import { Children, cloneElement, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Generic } from "src/types";

type SearchRowProps = {
  addRoute?: string;
  customSearch?: JSX.Element;
  placeholder?: string;
  onSubmit: (values: Generic) => void;
  searchKey?: string;
  withAdd?: boolean;
};

const SearchRow = memo(
  ({
    addRoute,
    customSearch,
    placeholder,
    onSubmit,
    searchKey = "search",
    withAdd,
  }: SearchRowProps) => {
    const navigate = useNavigate();
    const formik = useFormik<Generic & { query: string }>({
      initialValues: {
        query: "",
      },
      onSubmit: (values: Generic) => {
        const { query, ...rest } = values;

        onSubmit({
          [searchKey]: query,
          ...rest,
        });
      },
    });

    return (
      <CForm onSubmit={formik.handleSubmit} className="mb-3">
        <CRow className="align-items-center justify-content-center">
          <CCol sm={12} className="row flex">
            <CFormInput
              placeholder={placeholder ?? "Buscar..."}
              name="query"
              onChange={formik.handleChange}
              value={formik.values.query}
              className="flex h-9 font-4"
            />
            {customSearch && (
              <>
                {Children.map(customSearch, (element) => {
                  if (element.props.name) {
                    const name = element.props.name as string;

                    return cloneElement(element, {
                      onChange: formik.handleChange,
                      value: formik.values[name],
                    });
                  }

                  return element;
                })}
              </>
            )}
            <CButton type="submit" className="ml-3 h-9 w-9 p-0">
              <CIcon icon={cilSearch} className="h-4 w-4 p-0" />
            </CButton>
            {addRoute && withAdd && (
              <CButton
                color="success"
                type="button"
                onClick={() => navigate(addRoute)}
                className="ml-3 h-9 w-9 p-0"
              >
                <CIcon icon={cilPlus} className="h-4 w-4 p-0" />
              </CButton>
            )}
          </CCol>
        </CRow>
      </CForm>
    );
  }
);

export default SearchRow;
