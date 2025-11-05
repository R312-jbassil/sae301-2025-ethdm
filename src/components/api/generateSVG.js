import { OpenAI } from 'openai';

export const POST = async ({ request }) => {
    let messages;
    try {
        messages = await request.json();
        console.log("JSON reçu : ", messages);
    } catch (e) {
        return new Response(
            JSON.stringify({ error: "Invalid or empty JSON", details: e.message }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return new Response(
            JSON.stringify({ error: "No or invalid messages array received", received: messages }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const client = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: "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",
    });

    let systemMessage = {
        role: "system",
        content: "You are an SVG code generator. Generate SVG code for the following messages. Make sure to include ids for each part of the generated SVG.",
    };

    try {
        const chatCompletion = await client.chat.completions.create({
            model: "mistralai/mistral-small-3.2-24b-instruct:free",
            messages: [systemMessage, ...messages]
        });

        const message = chatCompletion.choices?.[0]?.message || { content: "" };
        const svgMatch = message.content.match(/<svg[\s\S]*?<\/svg>/i);
        message.content = svgMatch ? svgMatch[0] : "";

        return new Response(JSON.stringify({ svg: message }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to generate SVG", details: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
