"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
export default function TypeEffect({ children }) {
  return <Typewriter words={[children]} loop={1} />;
}
