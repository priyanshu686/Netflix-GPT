import OpenAI from 'openai';

const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

const openaicall = new OpenAI({
  apiKey: OPEN_AI_KEY, 
  dangerouslyAllowBrowser: true

});

export default openaicall;