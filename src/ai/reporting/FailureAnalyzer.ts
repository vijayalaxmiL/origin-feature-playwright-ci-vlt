import { llm } from '../llm/OpenAIClient';

export async function analyzeFailure(error: string) {

  const response = await llm.invoke(`
    Analyze this Playwright automation failure.
    
    Error:
    ${error}

    Provide:
    1. Root Cause
    2. Possible Fix
    3. Severity
    4. Retry recommendation
  `);

  return response.content;
}