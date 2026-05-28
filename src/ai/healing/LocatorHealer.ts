import { llm } from '../llm/OpenAIClient';

export async function healLocator(html: string, failedLocator: string) {

  const response = await llm.invoke(`
    A Playwright locator failed.

    Failed locator:
    ${failedLocator}

    HTML:
    ${html}

    Suggest a better Playwright locator.
  `);

  return response.content;
}