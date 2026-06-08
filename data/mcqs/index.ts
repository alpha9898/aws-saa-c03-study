import type { MCQ } from "../types";
import { securityMcqs } from "./security";
import { security2Mcqs } from "./security2";
import { resilientMcqs } from "./resilient";
import { resilient2Mcqs } from "./resilient2";
import { performanceMcqs } from "./performance";
import { performance2Mcqs } from "./performance2";
import { costMcqs } from "./cost";
import { cost2Mcqs } from "./cost2";
import { patternsMcqs } from "./patterns";
import { patterns2Mcqs } from "./patterns2";

export const MCQS: MCQ[] = [
  ...securityMcqs,
  ...security2Mcqs,
  ...resilientMcqs,
  ...resilient2Mcqs,
  ...performanceMcqs,
  ...performance2Mcqs,
  ...costMcqs,
  ...cost2Mcqs,
  ...patternsMcqs,
  ...patterns2Mcqs,
];
