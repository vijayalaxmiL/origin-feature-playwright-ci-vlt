import { llm } from '../ai/llm/OpenAIClient';

export async function validateApiResponse(response: any) {

  const result = await llm.invoke(`
    Validate this API response.

    Response:
    ${JSON.stringify(response)}

    Check:
    - Missing fields
    - Incorrect structure
    - Business validation
  `);

  return result.content;
}