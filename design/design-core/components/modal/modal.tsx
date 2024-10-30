import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import stylex from "@stylexjs/stylex";
import { styles } from "./modal.stylex";
import { ModalProps } from "./modal.types";
import { Space } from "../space";
import { Button } from "../button";
import { ModalContext } from "./modal.context";
import "@design/icon/close";
import "@design/icon/info-circle-filled";
import "@design/icon/check-circle-filled";
import "@design/icon/close-circle-filled";
import "@design/icon/warning-filled";
import "@design/icon/question-circle-filled";

const iconsConfig = {
  info: <is-info-circle-filled />,
  success: <is-check-circle-filled />,
  warning: <is-warning-filled />,
  error: <is-close-circle-filled />,
  confirm: <is-question-circle-filled />,
};

export const Modal: React.FC<ModalProps> = (props) => {
  const context = useContext(ModalContext);
  const nextProps = Object.assign({}, props, context);
  const {
    type,
    visible,
    closable = true,
    title,
    content,
    children,
    confirmText = "确认",
    cancelText = "取消",
    icon,
    iconColor,
    closeIcon = <is-close />,
    header,
    footer,
    onConfirm,
    onCancel,
    onClosed,
  } = nextProps;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);

  const handleConfirm = () => {
    const promiseOrVoid = onConfirm?.();
    if (promiseOrVoid instanceof Promise) {
      setConfirmLoading(true);
      promiseOrVoid.finally(() => {
        setConfirmLoading(false);
      });
    }
  };

  const handleCancel = () => {
    const promiseOrVoid = onCancel?.();
    if (promiseOrVoid instanceof Promise) {
      setCancelLoading(true);
      promiseOrVoid.finally(() => {
        setCancelLoading(false);
      });
    }
  };

  const handleClickClose = () => {
    setInnerVisible(false);
    onClosed?.();
  };

  useEffect(() => {
    if (typeof visible === "boolean") {
      setInnerVisible(visible);
    }
  }, [visible]);

  const renderIcon = () => {
    if (!icon && !type) return null;

    return (
      <span {...stylex.props(styles.modal$header$icon$wrap)}>
        <span
          {...stylex.props(
            styles.modal$header$icon(iconColor),
            type === "info" && styles.modal$info,
            type === "success" && styles.modal$success,
            type === "warning" && styles.modal$warning,
            type === "error" && styles.modal$error,
            type === "confirm" && styles.modal$confirm
          )}
        >
          {icon ? icon : iconsConfig[type!]}
        </span>
      </span>
    );
  };

  const renderCloseIcon = () => {
    return closable ? (
      <Button
        theme="ghost"
        color="rgba(28,31,35,.8)"
        stylex={styles.modal$header$close}
        icon={closeIcon}
        onClick={handleClickClose}
      ></Button>
    ) : null;
  };

  const renderHeader = () => {
    if (header === null) return null;
    if (header === undefined) {
      return (
        <div {...stylex.props(styles.modal$header)}>
          {renderIcon()}
          <div {...stylex.props(styles.modal$header$title)}>{title}</div>
          {renderCloseIcon()}
        </div>
      );
    }
    return <div {...stylex.props(styles.modal$header)}>{header}</div>;
  };

  const renderFooter = () => {
    if (footer === null) {
      return null;
    }
    if (footer === undefined) {
      return (
        <div {...stylex.props(styles.modal$footer)}>
          <Space>
            <Button onClick={handleCancel} loading={cancelLoading}>
              {cancelText}
            </Button>
            <Button
              theme="solid"
              onClick={handleConfirm}
              loading={confirmLoading}
            >
              {confirmText}
            </Button>
          </Space>
        </div>
      );
    }

    return <div {...stylex.props(styles.modal$footer)}>{footer}</div>;
  };

  const renderModal = () => {
    return createPortal(
      <div {...stylex.props(styles.modal$portal)}>
        <div {...stylex.props(styles.modal$mask)}></div>
        <div {...stylex.props(styles.modal$wrap)}>
          <div {...stylex.props(styles.modal())}>
            <div {...stylex.props(styles.modal$content)}>
              {renderHeader()}
              <div {...stylex.props(styles.modal$body)}>
                {content ?? children}
              </div>
              {renderFooter()}
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return <>{innerVisible ? renderModal() : null}</>;
};
