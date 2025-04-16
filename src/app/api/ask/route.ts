import { NextResponse } from "next/server";


export  async function POST(request: Request) {
	const body = await request.json();
	const { question } = body;

	try {
		const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
				"Content-Type": "application/json"
			}, 
			body: JSON.stringify({
				model: "shisa-ai/shisa-v2-llama3.3-70b:free",
				messages: [
					{ role: "user", content: "Kamu misalnya seorang pandita yang tau mendalam seputar Dhammapada dan Sutta dalam Buddhisme" },
					{ role: "user", content: question },
				],
			})
		});

		const data = await response.json();
		console.log(data);
		// return "";
		return NextResponse.json({ response: data.choices[0].message.content });
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ error: 'Failed to fetch response', status: 500 });
	}

}