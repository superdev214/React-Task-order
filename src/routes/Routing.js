import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "../components/Home/Home";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import EmptyLayout from "../components/Layouts/EmptyLayout";
import SecondaryLayout from "../components/Layouts/SecondaryLayout";
import Login from "../components/Login/Login";
import ChatView from "../components/Messages/chat-view/ChatView";
import Messages from "../components/Messages/Messages";
import NewTask from "../components/NewTask/NewTask";
import TaskPublished from "../components/NewTask/TaskPublished";
import PaymentApproval from "../components/Payment/PaymentApproval/PaymentApproval";
import UserAccount from "../components/Profile/Account/UserAccount";
import EditProfile from "../components/Profile/EditProfile/EditProfile";
import LanguageSetting from "../components/Profile/Language/LanguageSetting";
import NotificationPreferences from "../components/Profile/NotificationPreferences/NotificationPreferences";
import UpdatePayment from "../components/Profile/Payment/UpdatePayment";
import ProfilePage from "../components/Profile/Profile";
import SkillsPage from "../components/Profile/Skills/SkillsPage";
import TransactionsPage from "../components/Profile/Transactions/Transactions";
import UpdateNumber from "../components/Profile/UpdateNumber/UpdateNumber";
import SearchPage from "../components/Search/SearchPage";
import TaskDetails from "../components/Tasks/TaskDetails/TaskDetails";
import TasksPage from "../components/Tasks/TasksPage";

export default function Routing() {
  const [searchParams] = useSearchParams();

  return (
    <Routes>
      <Route path="*" element={<>not found</>} />
      <Route element={<DefaultLayout />}>
        <Route index path="/home" element={<Home />}></Route>
      </Route>
      <Route element={<EmptyLayout />}>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/new-task-published" element={<TaskPublished />}></Route>
        <Route path="/new-task" element={<NewTask />}></Route>
        <Route path="/task-details" element={<TaskDetails />}></Route>
        <Route path="/payment-approval" element={<PaymentApproval />}></Route>
        <Route path="/transactions" element={<TransactionsPage />}></Route>
        <Route path="/update-payment" element={<UpdatePayment />}></Route>
        <Route
          path="/notification-preferences"
          element={<NotificationPreferences />}
        ></Route>
        <Route path="/language-setting" element={<LanguageSetting />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="/update-number" element={<UpdateNumber />}></Route>
        <Route path="/message" element={<ChatView />}></Route>
      </Route>
      <Route element={<SecondaryLayout />}>
        <Route path="/tasks" element={<TasksPage />}></Route>
        <Route path="/account" element={<UserAccount />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route
          path="/search"
          element={<SearchPage query={searchParams.get("query")} />}
        ></Route>
      </Route>
    </Routes>
  );
}
