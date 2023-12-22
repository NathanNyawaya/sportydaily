"use client"

import React, { useEffect, useState } from "react";
import Predictions from "./Predictions";
import { MantineProvider } from "@mantine/core";


export default function page() {
  
  return (
    <MantineProvider>
     
          <Predictions />
      

    </MantineProvider>
  )
}
