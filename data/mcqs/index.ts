import type { MCQ } from "../types";
import { securityMcqs } from "./security";
import { resilientMcqs } from "./resilient";
import { performanceMcqs } from "./performance";
import { costMcqs } from "./cost";
import { patternsMcqs } from "./patterns";

export const MCQS: MCQ[] = [
  ...securityMcqs,
  ...resilientMcqs,
  ...performanceMcqs,
  ...costMcqs,
  ...patternsMcqs,
];
