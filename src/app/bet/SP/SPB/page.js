import React from "react";

import { MantineProvider } from '@mantine/core';
import SportsBookHome from "./Home";


export default function page() {
  return(
    <>
      <MantineProvider>
        <SportsBookHome />
      </MantineProvider>
    </>
  )
}
