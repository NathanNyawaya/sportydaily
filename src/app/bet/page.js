import React from "react";

import { MantineProvider } from '@mantine/core';
import Betting from "./Betting";


export default function page() {
  return(
    <>
      <MantineProvider>

        <Betting />
      </MantineProvider>
    </>
  )
}
