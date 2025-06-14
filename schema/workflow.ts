"use client"

import { z } from "zod"

export const createWorkflowSchema = z.object({
  name: z.string().max(50),
  description: z.string().max(50).optional(), // 可選的
})