import { IntlShape, useIntl } from "react-intl";
import { ReactNode } from "react";

let intl: IntlShape;
export const IntlGlobalProvider = ({
  children,
}: {
  children: ReactNode;
}): any => {
  intl = useIntl();
  // Keep the 'intl' service reference
  return children;
};

export const appIntl = () => {
  return intl;
};