import React, { useState } from "react";
import ProfileHeader from "../Header/ProfileHeader";
import "../../../assets/style/components/switch-button.scss";
import PopupComponent from "../../shared/popup-menu/PopupComponent";
let earnedData = [
  {
    date: "25 May 2023",
    id: 1,
    owner: {
      name: "Shivum C.",
      icon: "fly-dark",
    },
    price: 20,
    status: "Credited",
    title: "Task title Task title Task title",
    bankReference: "TAK 76253",
    company: "Taklief corp",
    cRNumber: 10385465,
    netProfile: 90,
    serviceFee: -10,
  },
  {
    date: "25 May 2023",
    id: 2,
    owner: {
      name: "Shivum C.",
      icon: "fly-dark",
    },
    price: 20,
    status: "Credited",
    title: "Task title Task title Task title",
    bankReference: "TAK 76253",
    company: "Taklief corp",
    cRNumber: 10385465,
    netProfile: 90,
    serviceFee: -10,
  },
];
let paidData = [
  {
    date: "25 May 2023",
    releaseAt: "25 May 2023",
    id: 1,
    owner: {
      name: "Shivum C.",
      icon: "fly-dark",
    },
    price: 20,
    status: "Credited",
    title: "Task title Task title Task title",
    gate: {
      title: "Pay",
    },
  },
  {
    date: "25 May 2023",
    id: 2,
    owner: {
      name: "Shivum C.",
      icon: "fly-dark",
    },
    gate: {
      title: "Pay",
    },
    price: 20,
    releaseAt: "25 May 2023",
    status: "Credited",
    title: "Task title Task title Task title",
  },
];

export default function TransactionsPage() {
  const [activeTab, toggleActiveTab] = useState("Earned");
  const [transactions, setTransactionContent] = useState("All times");
  const [updateNow, setUpdateNow] = useState(true);
  const [isVisblePopup, setIsVisble] = useState(false);
  const [expansion, setExpansion] = useState(
    earnedData.map(({ id }) => {
      return {
        id,
        isOpened: false,
      };
    })
  );

  const toggle = (id) => {
    let temp = [...expansion];
    let index = temp.findIndex((item) => item.id === id);

    temp[index].isOpened = !temp[index].isOpened;

    setExpansion(temp);
    setUpdateNow(!updateNow);
  };

  const transactionsList = (transactions, type) => {
    return (
      <>
        {transactions.map((item, index) => {
          return (
            <ul className="mt-10 mb-0" key={index}>
              <li className="large d-flex flex-column font-bold mb-10">
                <div className="w-100" onClick={() => toggle(item.id)}>
                  <div className="d-flex mt-10 justify-content-between align-items-center">
                    <span className="size-13">{item.date}</span>
                    <span className="text-green size-15">{item.status}</span>
                  </div>
                  <div className="d-flex mt-10 justify-content-between align-items-center">
                    <span className="font-bold size-13">{item.title}</span>
                    <span className="font-bold size-15">SR {item.price}</span>
                  </div>
                  <div className="d-flex mt-10 justify-content-between align-items-center">
                    <span className="size-13">
                      {type === "Earned" ? "Poster by" : "Assigned to"}
                    </span>
                    <p className="d-flex align-items-center">
                      <img
                        src={`./assets/images/icons/${item.owner.icon}.svg`}
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                        className="mr-10"
                      />
                      <span className="size-15">{item.owner.name}</span>
                    </p>
                  </div>
                </div>
                <>
                  {expansion.length > 0 &&
                    expansion.find((expItem) => expItem.id === item.id)
                      ?.isOpened && (
                      <div className="w-100">
                        {type === "Earned" ? (
                          <>
                            <div className="line my-10"></div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Gross earning</span>
                              <span>SR {item.price}</span>
                            </div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Service fee</span>
                              <span className="size-15">
                                SR {item.serviceFee}
                              </span>
                            </div>
                            <div className="line my-10"></div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Net profit</span>
                              <span className="size-15">
                                SR {item.netProfile}
                              </span>
                            </div>
                            <div className="line my-10"></div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Bank reference</span>
                              <span className="size-15">
                                SR {item.bankReference}
                              </span>
                            </div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Company</span>
                              <span className="size-15">SR {item.company}</span>
                            </div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">CR number</span>
                              <span className="size-15">
                                SR {item.cRNumber}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="line my-10"></div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="size-13">Funds secured on</span>
                              <span className="size-13">{item.releaseAt}</span>
                            </div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Funds release on</span>
                              <span className="size-13">{item.releaseAt}</span>
                            </div>
                            <div className="d-flex mt-10 justify-content-between align-items-center">
                              <span className="size-13">Payment mthod</span>
                              <span>{item.gate && item.gate.title}</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                </>
              </li>
            </ul>
          );
        })}
      </>
    );
  };

  const changeTab = (type) => {
    let data = type === "Earned" ? earnedData : paidData;
    setExpansion(
      data.map(({ id }) => {
        return {
          id,
          isOpened: false,
        };
      })
    );
    toggleActiveTab(type);
  };

  const tabView = () => {
    return (
      <div className="switch-button">
        <button
          className={
            "d-block btn btn-gray btn-w-350 mt-3 mx-0 " +
            (activeTab === "Earned" ? "active" : "")
          }
          onClick={() => changeTab("Earned")}
        >
          Earned
        </button>
        <button
          className={
            "d-block btn btn-gray btn-w-350 mt-3 mx-0 " +
            (activeTab === "Paid" ? "active" : "")
          }
          onClick={() => changeTab("Paid")}
        >
          Paid
        </button>
      </div>
    );
  };

  return (
    <>
      <ProfileHeader title="Transaction history" />
      <div className="pa-20 gray-list h-100 mt-3">
        {tabView()}
        <div className="mt-20">
          <div className="d-flex justify-content-between align-items-center">
            <p className="font-bold">Showing:</p>
            <div className="d-flex align-items-center">
              <img src="./assets/images/icons/history.svg" alt="close" />
              <span
                className="ml-10 text-blue size-15"
                onClick={() => setIsVisble(true)}
              >
                {transactions}
              </span>
              {/* popup */}
              <PopupComponent
                isVisblePopup={isVisblePopup}
                setIsVisble={setIsVisble}
                setTransactionContent={setTransactionContent}
                transactions={transactions}
              />
            </div>
          </div>
          <p className="mt-10 size-13">
            20 transactions for Thursday 25 May 2023{" "}
          </p>
          <li className="large font-bold mt-20 d-flex justify-content-between align-items-center">
            <span className="font-bold size-15">
              {activeTab === "Earned" ? "Net earnings:" : "Net outgoing:"}
            </span>
            <span className="font-bold size-15">SR 900.00</span>
          </li>
          <div className="d-flex mt-20 justify-content-between align-items-center">
            <p className="font-bold size-15">Records</p>
            <div className="d-flex align-items-center">
              <img
                src="./assets/images/icons/statistics.svg"
                alt="statistics"
              />
              <span className="ml-10 text-blue size-15">Download CSV file</span>
            </div>
          </div>
        </div>
        {activeTab === "Earned"
          ? transactionsList(earnedData, "Earned")
          : transactionsList(paidData, "Paid")}
      </div>
    </>
  );
}
