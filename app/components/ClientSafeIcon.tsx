"use client";

import { useEffect, useState } from "react";
import React from "react";

interface ClientSafeIconProps {
  icon: React.ComponentType<any>;
  className?: string;
  style?: React.CSSProperties;
}

export function ClientSafeIcon({
  icon: Icon,
  className,
  style,
}: ClientSafeIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder div with the same dimensions during SSR
    return <div className={`inline-block ${className}`} style={style} />;
  }

  return <Icon className={className} style={style} />;
}
