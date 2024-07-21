"use client";
import chatStore from "@/store/chatStore";
import React, { createContext, useContext, ReactNode } from "react";

export const store = new chatStore();
export const useStore = () => store;
