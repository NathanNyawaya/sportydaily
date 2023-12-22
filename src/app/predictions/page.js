"use client"

import React from "react";
import Predictions from "./Predictions";
import { MantineProvider } from "@mantine/core";


export default function page() {
  
  return (
    <MantineProvider>
     
          <Predictions />
      

    </MantineProvider>
  )
}
