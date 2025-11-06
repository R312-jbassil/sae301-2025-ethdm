// src/pages/api/generate-svg.js
import { OpenAI } from 'openai';

// Récupération du token d'accès à partir des variables d'environnement
const HF_TOKEN = import.meta.env.HF_TOKEN;

// Fonction exportée pour gérer les requêtes POST
export const POST = async ({ request }) => {
    try {
        console.log('Requête reçue');
        
        // Extraction du prompt du corps de la requête
        const { prompt } = await request.json();
        
        if (!prompt || !prompt.trim()) {
            return new Response(JSON.stringify({ 
                error: 'Prompt vide',
                svg: "" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        
        console.log('Prompt reçu:', prompt);
        
        // Initialisation du client OpenAI avec l'URL de base et le token d'API
        const client = new OpenAI({
            baseURL: import.meta.env.HF_URL,
            apiKey: HF_TOKEN,
        });
        
        // Appel à l'API OpenAI pour générer le SVG
        const chatCompletion = await client.chat.completions.create({
            model: "openai/gpt-oss-20b:free",
            messages: [
                {
                    role: "system", 
                    content: "You are an SVG code generator. Generate ONLY valid SVG code for the following prompt. Return only the SVG tag and its content, nothing else."
                },
                {
                    role: "user",
                    content: prompt,    
                },
            ],
        });
        
        // Récupération du message généré par l'API
        const message = chatCompletion.choices[0].message.content || "";
        console.log('Message reçu:', message);
        
        // Recherche d'un élément SVG dans le message généré
        const svgMatch = message.match(/<svg[\s\S]*?<\/svg>/i);
        const svg = svgMatch ? svgMatch[0] : "";
        
        console.log('SVG extrait:', svg ? 'Oui' : 'Non');
        
        // Retourne une réponse JSON contenant le SVG ou une chaîne vide si aucun SVG n'est trouvé
        return new Response(JSON.stringify({ svg: svg }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error('Erreur API:', error.message);
        return new Response(JSON.stringify({ 
            error: error.message,
            svg: "" 
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
