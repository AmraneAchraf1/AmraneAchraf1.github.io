import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/reducer/ui/ModalSlice";
import ContactMe from "../ContactMe/ContactMe";

import styles from './styles.module.css';
const AppModal = () => {
  const { isOpen, componentName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

    const handelClose = () => { 
        dispatch(closeModal())
    }

  const components = {
    ContactMe,
  };

  let Component;

  if (componentName) {
    const SelectedComponent = components[componentName];
    Component = <SelectedComponent />;
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box className={styles.overlay} >{Component}</Box>
      </Modal>
    </div>
  );
};

export default AppModal;
