import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import css from './Logout.module.css';
import logout from '../../images/sprite.svg';
import Modal from 'components/Modal/Modal';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';


export default function Logout() {

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
  };

  const close = () => {
    setModalActive(false);

  };

  const userLogout = () => {
    dispatch(logOut());
    setModalActive(false);
  };


  return (
    <>
      <button className={css.btn} type="button" onClick={openModal}>
      Log out
      <svg className={css.logout} width="24" height="24">
        <use href={logout + '#logout'}></use>
      </svg>
    </button>
    <Modal isOpen={modalActive} onClose={close}>
        <ModalApproveAction logo={'#logout'} close={close} action={userLogout}>
            Already leaving?
        </ModalApproveAction>
    </Modal>
    </>

  );
}
