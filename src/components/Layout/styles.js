// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    min-height: 100%;
    width: 100%;
`;

export const SidebarOverlay = styled.div`
    background-color: rgba(0,0,0,.1);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1035;

    @media (max-width: 991.98px) {
        display: ${({ show }) => show ? 'block' : 'none' };
    }
`;

export const Content = styled.div`
    background: #f4f6f9;
    min-height: calc(100vh - 112px);

    @media (min-width: 576px) {
        transition: margin-left .3s ease-in-out;
        margin-left: ${({ opened }) => opened ? '250px' : 0 } ;
        z-index: 3000;
    }
`;