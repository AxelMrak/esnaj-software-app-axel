'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {

  const router = useRouter();

  useEffect(() => {
    window.location.pathname === '/' && router.replace("/en");
  }, []);

  return <h1>404 - Page Not Found</h1>;
};


