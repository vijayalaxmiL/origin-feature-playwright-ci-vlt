import { Page } from '@playwright/test';
import { llm } from '../llm/OpenAIClient';

export class BrowserAgent {

  constructor(private page: Page) {}

  async execute(task: string) {

    const plan = await llm.invoke(`
      Convert this task into browser steps.

      Task:
      ${task}
    `);

    console.log(plan.content);

    // Execute dynamically
  }
}