import React from "react";

import { MantineProvider } from '@mantine/core';
import Fixtures from "./Fixtures";


export default function page() {
  return(
    <>
      <MantineProvider>

        <Fixtures />
      </MantineProvider>
    </>
  )
}
