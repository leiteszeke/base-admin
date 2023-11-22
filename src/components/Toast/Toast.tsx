import { CToast, CToastBody, CToastClose } from "@coreui/react-pro";
import { CToastProps } from "@coreui/react-pro/dist/components/toast/CToast";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export type ToastProps = Pick<CToastProps, "autohide" | "visible" | "color"> & {
  text: string;
};

export type ForwardedToastProps = {
  show: () => void;
  hide: () => void;
};

const Toast: ForwardRefRenderFunction<ForwardedToastProps, ToastProps> = (
  { color = "primary", text = "", visible = false, autohide = true },
  ref
) => {
  const [isVisible, setIsVisible] = useState<boolean>(visible);

  useImperativeHandle(
    ref,
    () => ({
      show: () => setIsVisible(true),
      hide: () => setIsVisible(false),
    }),
    []
  );

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <CToast
      autohide={autohide}
      visible={isVisible}
      color={color}
      delay={3000}
      onClose={() => setIsVisible(false)}
      className="text-white align-items-center stack-top-right"
    >
      <div className="d-flex">
        <CToastBody>{text}</CToastBody>
        {!autohide && (
          <CToastClose
            onClick={() => setIsVisible(false)}
            className="me-2 m-auto"
            white
          />
        )}
      </div>
    </CToast>
  );
};

export default forwardRef(Toast);
