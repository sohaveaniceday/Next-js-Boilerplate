import React, { ReactNode } from 'react';

import { TabList, Tab, Tabs } from '@chakra-ui/react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      {props.children}
    </Tabs>
  </>
);

export { Main };
