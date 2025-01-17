import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InterestList } from "./interest/InterestList";
import { InterestCreate } from "./interest/InterestCreate";
import { InterestEdit } from "./interest/InterestEdit";
import { InterestShow } from "./interest/InterestShow";
import { UserInterestList } from "./userInterest/UserInterestList";
import { UserInterestCreate } from "./userInterest/UserInterestCreate";
import { UserInterestEdit } from "./userInterest/UserInterestEdit";
import { UserInterestShow } from "./userInterest/UserInterestShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { UserUpdateInputList } from "./userUpdateInput/UserUpdateInputList";
import { UserUpdateInputCreate } from "./userUpdateInput/UserUpdateInputCreate";
import { UserUpdateInputEdit } from "./userUpdateInput/UserUpdateInputEdit";
import { UserUpdateInputShow } from "./userUpdateInput/UserUpdateInputShow";
import { NotificationCreateInputList } from "./notificationCreateInput/NotificationCreateInputList";
import { NotificationCreateInputCreate } from "./notificationCreateInput/NotificationCreateInputCreate";
import { NotificationCreateInputEdit } from "./notificationCreateInput/NotificationCreateInputEdit";
import { NotificationCreateInputShow } from "./notificationCreateInput/NotificationCreateInputShow";
import { MessageDtoList } from "./messageDto/MessageDtoList";
import { MessageDtoCreate } from "./messageDto/MessageDtoCreate";
import { MessageDtoEdit } from "./messageDto/MessageDtoEdit";
import { MessageDtoShow } from "./messageDto/MessageDtoShow";
import { UserInterestDtoList } from "./userInterestDto/UserInterestDtoList";
import { UserInterestDtoCreate } from "./userInterestDto/UserInterestDtoCreate";
import { UserInterestDtoEdit } from "./userInterestDto/UserInterestDtoEdit";
import { UserInterestDtoShow } from "./userInterestDto/UserInterestDtoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnonymousMessagingBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Interest"
          list={InterestList}
          edit={InterestEdit}
          create={InterestCreate}
          show={InterestShow}
        />
        <Resource
          name="UserInterest"
          list={UserInterestList}
          edit={UserInterestEdit}
          create={UserInterestCreate}
          show={UserInterestShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="UserUpdateInput"
          list={UserUpdateInputList}
          edit={UserUpdateInputEdit}
          create={UserUpdateInputCreate}
          show={UserUpdateInputShow}
        />
        <Resource
          name="NotificationCreateInput"
          list={NotificationCreateInputList}
          edit={NotificationCreateInputEdit}
          create={NotificationCreateInputCreate}
          show={NotificationCreateInputShow}
        />
        <Resource
          name="MessageDto"
          list={MessageDtoList}
          edit={MessageDtoEdit}
          create={MessageDtoCreate}
          show={MessageDtoShow}
        />
        <Resource
          name="UserInterestDto"
          list={UserInterestDtoList}
          edit={UserInterestDtoEdit}
          create={UserInterestDtoCreate}
          show={UserInterestDtoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
