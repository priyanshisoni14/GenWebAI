const openRouterUrl="https://openrouter.ai/api/v1/chat/completions"
const model="deepseek/deepseek-chat-v3-0324"

const generateResponse= async (prompt)=>{
    const res= await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: model,
    messages: [
        {
            role: 'system',
            content: 'You must return valid JSON. Do not add any other text.',
        },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.2,
  }),
});

if(!res.ok){
    const err=await res.text()
    throw new Error("OpenRouter error "+err)
}

const data=await res.json()
return data.choices[0].message.content
}

export default generateResponse