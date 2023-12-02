"use client";

import { useSession } from "next-auth/react";

export function Auth({
  component,
  children,
}: {
  component: any;
  children: any;
}) {
  const { data: session } = useSession();
  return session ? children : component;
}
