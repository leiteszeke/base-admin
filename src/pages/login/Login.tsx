import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useFormik } from "formik";
import { LoginSchema, LoginUser } from "src/api/auth";
import { useMutation } from "@apollo/client";
import Api from "src/api";
import { useAdminStore } from "src/store";
import { UserWithToken } from "src/types";

const Login = () => {
  const { setUser } = useAdminStore();
  const [mutation, { loading }] = useMutation(Api.Auth.LOGIN, {
    onCompleted: (data: { user: UserWithToken }) => {
      setUser(data.user);
    },
  });

  const onSubmit = (data: LoginUser) => {
    if (!loading) {
      setUser({
        id: 1,
        isAdmin: true,
        image: "https://picsum.photos/200/300",
        name: "John",
        lastname: "Doe",
        email: data.email,
        accessToken: "jwt-token",
        createdAt: new Date(),
      });

      // mutation({
      //   variables: {
      //     user: data,
      //   },
      // });
    }
  };

  const formik = useFormik<LoginUser>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: LoginSchema,
    validateOnChange: false,
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol lg={6} md={8}>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={formik.handleSubmit}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      invalid={!!formik.errors.email}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      invalid={!!formik.errors.password}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton
                        disabled={loading}
                        type="submit"
                        color="primary"
                        className="px-4"
                      >
                        Login
                      </CButton>
                    </CCol>
                    <CCol xs={6} className="text-right">
                      <CButton
                        disabled={loading}
                        type="button"
                        color="link"
                        className="px-0"
                      >
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
