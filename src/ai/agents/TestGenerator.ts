import { llm } from '../llm/OpenAIClient';

export async function generateTestCase(requirement: string) {

  const response = await llm.invoke(`
    Convert this requirement into Playwright test code.

    Requirement:
    ${requirement}

    Use:
    - TypeScript
    - Playwright
    - Best practices
  `);

  return response.content;
}