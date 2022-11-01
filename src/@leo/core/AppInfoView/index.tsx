import React, { useEffect } from "react";
import { message } from 'antd';

import AppLoader from "../../../@leo/core/AppLoader";
import useCommonStore from "../../../zustand/reducers/Common";

const AppInfoView = () => {
  const { error, loading, message: msg, hideMessage } = useCommonStore((state) => state)

  useEffect(() => {
    if (error) {
      message.error(error);
      hideMessage();
    }
  }, [error, hideMessage]);

  useEffect(() => {
    if (msg) {
      message.success(msg);
      hideMessage();
    }
  }, [msg, hideMessage]);

  return <>{loading ? <AppLoader /> : null}</>;
};

export default AppInfoView;
