import { MarketingLayout } from '#components/layout'
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
