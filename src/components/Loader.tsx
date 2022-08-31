import { CContainer, CRow, CSpinner } from "@coreui/react-pro";

const AppLoader = () => (
  <div className="bg-light vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CSpinner color="primary" />
      </CRow>
    </CContainer>
  </div>
);

export const Loader = () => (
  <div className="d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CSpinner color="primary" />
      </CRow>
    </CContainer>
  </div>
);

export default AppLoader;
