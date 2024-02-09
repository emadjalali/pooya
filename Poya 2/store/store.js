import { useState } from "react";
import { createStore } from "reusable";
import { usePersistedState } from "./usePersistedState";
// import { useState } from "react";

export const lang = createStore(() => useState("Lang", "EN"));
