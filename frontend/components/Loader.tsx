"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Loader() {
  return (
    <ProgressBar
      height="4px"
      color="#00A789"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
