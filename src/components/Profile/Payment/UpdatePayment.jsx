import { useState } from "react";
import ProfileHeader from "../Header/ProfileHeader";
import UpdateCreditCardFrom from "../../Payment/UpdateCreditCard/UpdateCreditCard";
import UpdateReceivePayment from "../../Payment/UpdateReceivePayment/UpdateReceivePayment";
import ModalComponent from "../../shared/modal/ModalComponent";

export default function UpdatePayment() {
  const [modal, setModal] = useState(false);
  const [updateReceiveModal, setUpdateReceiveModal] = useState(false);

  const update = () => {};

  return (
    <div>
      {modal && (
        <>
          <ModalComponent
            btnCaption="Save"
            title="Update card payment"
            close={() => setModal(false)}
            onClick={update}
            noPadding
            bordered
          >
            <UpdateCreditCardFrom />
          </ModalComponent>
        </>
      )}
      {updateReceiveModal && (
        <>
          <ModalComponent
            btnCaption="Save"
            title="Update receive payment"
            close={() => setUpdateReceiveModal(false)}
            onClick={update}
            noPadding
            bordered
          >
            <UpdateReceivePayment />
          </ModalComponent>
        </>
      )}
      <ProfileHeader title="Update payment" />
      <div className="pa-20 gray-list" style={{ marginTop: "28px" }}>
        <p className="font-bold text-uppercase mt-20">Make payment</p>
        <li
          className="mt-10 flex justify-content-between items-center pointer-event"
          onClick={() => setModal(true)}
        >
          <div className="flex items-center">
            <img src="./assets/images/profile/wallet.png" alt="Post a task" />
            <div className="pl-10">
              <div>**** 2863</div>
              <div>Expires 5/2028</div>
            </div>
          </div>
          <button className="bg-transparent border-0">
            <img src="./assets/images/icons/close.svg" alt="close" />
          </button>
        </li>
        <p className="font-bold text-uppercase mt-20">Receive payment</p>
        <li
          className="mt-10 flex justify-content-between items-center"
          onClick={() => setUpdateReceiveModal(true)}
        >
          <div className="flex items-center">
            <img src="./assets/images/bank-accont.png" alt="Post a task" />
            <span className="pl-10">
              Bank account: <b>****-7001</b>
            </span>
          </div>
          <button className="bg-transparent border-0">
            <img src="./assets/images/icons/close.svg" alt="close" />
          </button>
        </li>
      </div>
    </div>
  );
}
