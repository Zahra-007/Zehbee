// src/lib/writingEngine.ts

// Helper: Pick random elements from an array
function pickRandom<T>(arr: T[], n: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Helper: Capitalize first letter of string
function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- 1. REWRITE TEXT LOGIC ---
const SYNONYMS: Record<string, string[]> = {
    "good": ["excellent", "superb", "outstanding", "great", "exceptional"],
    "bad": ["poor", "substandard", "unacceptable", "flawed"],
    "big": ["large", "substantial", "significant", "massive"],
    "small": ["minor", "modest", "compact", "limited"],
    "use": ["utilize", "leverage", "employ", "apply"],
    "help": ["assist", "support", "facilitate", "guide"],
    "make": ["create", "develop", "produce", "generate"],
    "do": ["perform", "execute", "accomplish", "carry out"],
    "get": ["obtain", "acquire", "secure", "gain"],
    "show": ["demonstrate", "illustrate", "reveal", "display"],
    "idea": ["concept", "notion", "thought", "perspective"],
    "important": ["crucial", "essential", "vital", "significant"],
};

export function rewriteText(text: string): string[] {
    if (!text.trim()) return [];

    const variations: string[] = [];

    // Variation 1: Clarity & Grammar Fix (simulated by fixing capitalization and basic spacing)
    let v1 = text
        .replace(/\s+/g, " ")
        .replace(/ ([.?!,])/g, "$1") // remove space before punctuation
        .replace(/([.?!])([a-zA-Z])/g, "$1 $2"); // add space after punctuation
    
    // Capitalize first letters of sentences
    v1 = v1.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    variations.push(v1);

    // Variation 2: Vocabulary Upgrade (replace common words with stronger synonyms)
    let v2 = v1;
    const words = Object.keys(SYNONYMS);
    for (const word of words) {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        if (regex.test(v2)) {
            const choices = SYNONYMS[word];
            const replacement = choices[Math.floor(Math.random() * choices.length)];
            v2 = v2.replace(regex, (match) => {
                // preserve casing
                if (match === match.toUpperCase()) return replacement.toUpperCase();
                if (match[0] === match[0].toUpperCase()) return capitalize(replacement);
                return replacement;
            });
        }
    }
    // Add a transition word to variation 2 if it's multiple sentences
    if (v2 !== v1 && v2.includes(". ")) {
        v2 = "Furthermore, " + v2.charAt(0).toLowerCase() + v2.slice(1);
    } else if (v2 === v1) {
        v2 = "Essentially, " + v2.charAt(0).toLowerCase() + v2.slice(1);
    }
    variations.push(capitalize(v2));

    // Variation 3: Concise version
    let v3 = v1
        .replace(/\b(in order to)\b/gi, "to")
        .replace(/\b(due to the fact that)\b/gi, "because")
        .replace(/\b(at this point in time)\b/gi, "now")
        .replace(/\b(as a matter of fact)\b/gi, "in fact")
        .replace(/\b(very|really|quite|extremely)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();
    if (v3 === v1) {
        v3 = "In summary: " + v3;
    }
    variations.push(capitalize(v3));

    return variations;
}

// --- 2. TONE CHANGER LOGIC ---
const TONE_MODIFIERS: Record<string, { prefix: string[], swap: Record<string, string> }> = {
    formal: {
        prefix: ["To whom it may concern,", "Please note that", "It is important to highlight that"],
        swap: {
            "thanks": "I appreciate it",
            "sorry": "I apologize",
            "need": "require",
            "want": "would like",
            "buy": "purchase",
            "give": "provide",
            "job": "position",
            "boss": "manager",
            "can't": "cannot",
            "don't": "do not",
            "i'm": "I am",
            "you're": "you are"
        }
    },
    casual: {
        prefix: ["Hey!", "Just wanted to say,", "So, basically:"],
        swap: {
            "hello": "hey",
            "apologize": "sorry",
            "require": "need",
            "purchase": "buy",
            "provide": "give",
            "manager": "boss",
            "cannot": "can't",
            "do not": "don't",
            "i am": "I'm",
            "you are": "you're",
            "therefore": "so",
            "however": "but"
        }
    },
    persuasive: {
        prefix: ["Imagine this:", "Here is why this matters:", "You don't want to miss this:"],
        swap: {
            "good": "incredible",
            "nice": "outstanding",
            "try": "experience",
            "buy": "invest in",
            "think": "know",
            "maybe": "definitely",
            "help": "transform"
        }
    },
    confident: {
        prefix: ["Without a doubt,", "I am confident that", "The facts show that"],
        swap: {
            "i think": "I know",
            "i believe": "I am certain",
            "maybe": "definitely",
            "probably": "undeniably",
            "try": "will do",
            "hope": "expect"
        }
    }
};

export function changeTone(text: string, tone: string): string[] {
    if (!text.trim()) return [];
    
    const modifier = TONE_MODIFIERS[tone.toLowerCase()];
    if (!modifier) return [text]; // fallback

    const variations: string[] = [];

    // Base cleanup
    let base = text.replace(/\s+/g, " ").trim();

    // Perform swaps
    for (const [find, replace] of Object.entries(modifier.swap)) {
        const regex = new RegExp(`\\b${find}\\b`, "gi");
        base = base.replace(regex, (match) => {
            if (match === match.toUpperCase()) return replace.toUpperCase();
            if (match[0] === match[0].toUpperCase()) return capitalize(replace);
            return replace;
        });
    }

    // Variation 1: Just swaps
    variations.push(capitalize(base));

    // Variation 2: Swap + Prefix 1
    variations.push(`${modifier.prefix[0]} ${base.charAt(0).toLowerCase()}${base.slice(1)}`);

    // Variation 3: Swap + Prefix 2
    if (modifier.prefix.length > 1) {
        variations.push(`${modifier.prefix[1]} ${base.charAt(0).toLowerCase()}${base.slice(1)}`);
    }

    return variations;
}

// --- 3. CAPTION GENERATOR LOGIC ---
const CAPTION_TEMPLATES = [
    "Ready to dive into {topic}? 🚀 Let me know your thoughts below! 👇 #{tag} #explore",
    "Unlocking the secrets of {topic} today! 💡 What’s your biggest takeaway? ✨ #{tag} #learning",
    "Just thinking about {topic}... 🤔 Can anyone else relate? Drop a 💯 if you agree! #{tag} #community",
    "The ultimate guide to {topic} is here! 🔥 Swipe to see more. 👉 #{tag} #tips",
    "Who else loves {topic} as much as I do? ❤️ Let’s chat in the comments! 💬 #{tag} #passion",
    "Transforming the way we look at {topic}. 🌟 #inspiration #{tag}",
    "A little {topic} appreciation post today! 🙌 Because why not? #{tag} #vibes",
    "Behind the scenes of {topic} 🎬 It’s not always easy, but it’s worth it! 💪 #{tag} #grind",
];

export function generateCaption(topic: string): string[] {
    if (!topic.trim()) return [];

    const cleaned = topic.trim();
    // Create a tag by taking the first word and removing non-alphanumeric
    const tag = cleaned.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "").toLowerCase() || "awesome";

    const selectedTemplates = pickRandom(CAPTION_TEMPLATES, 3);
    
    return selectedTemplates.map(template => {
        return template
            .replace(/\{topic\}/g, cleaned)
            .replace(/\{tag\}/g, tag);
    });
}

// --- 4. PROMPT GENERATOR LOGIC (Migrated) ---
const QUALITY_TAGS: Record<string, string[]> = {
    "photorealistic": ["ultra-realistic", "sharp focus", "professional photography", "8K resolution", "DSLR quality"],
    "digital art": ["highly detailed", "vibrant colors", "sharp edges", "trending on ArtStation"],
    "oil painting": ["textured brushstrokes", "rich color palette", "classical composition", "museum quality"],
    "watercolor": ["soft edges", "translucent layers", "delicate washes", "fine art"],
    "anime": ["clean line art", "vibrant colors", "expressive eyes", "cel shaded"],
    "cinematic": ["cinematic composition", "anamorphic lens flare", "film grain", "color graded"],
    "3D render": ["octane render", "physically based rendering", "4K resolution"],
    "concept art": ["detailed illustration", "ArtStation quality", "trending", "professional concept art"],
    "sketch": ["fine pencil lines", "detailed cross-hatching", "hand-drawn", "graphite on paper"],
};

const MJ_PARAMS: Record<string, string> = {
    "photorealistic": "--v 6 --ar 16:9 --q 2",
    "digital art": "--v 6 --ar 1:1 --stylize 750",
    "oil painting": "--v 6 --ar 4:3 --stylize 500",
    "watercolor": "--v 6 --ar 4:3 --stylize 600",
    "anime": "--niji 6 --ar 16:9 --stylize 500",
    "cinematic": "--v 6 --ar 21:9 --stylize 400",
    "3D render": "--v 6 --ar 1:1 --q 2 --stylize 300",
    "concept art": "--v 6 --ar 16:9 --stylize 750",
    "sketch": "--v 6 --ar 1:1 --stylize 200",
};

const SD_SUFFIXES: Record<string, string> = {
    "photorealistic": ", (masterpiece:1.2), (best quality:1.2), ultra realistic, 8k uhd, DSLR, soft lighting, high quality",
    "hyper-detailed": ", intricate details, hyperrealistic, sharp focus, 8k, professional photography",
    "anime": ", anime style, (masterpiece:1.2), vibrant colors, cel shading, studio ghibli",
    "concept art": ", concept art, detailed illustration, artstation, trending, professional",
    "fantasy art": ", epic fantasy, magical, detailed, vibrant, digital painting, artstation",
    "gothic": ", dark atmosphere, gothic architecture, moody, detailed shadows, high contrast",
    "cyberpunk": ", cyberpunk city, neon lights, rain reflections, futuristic, high tech",
};

export function generatePrompt(
    platform: string,
    subject: string,
    style: string,
    mood: string,
    lighting: string,
    camera: string,
    extra: string
): string[] {
    if (!subject.trim()) return [];

    let cleaned = subject
        .replace(/^(give me a prompt (to |for )?(generate |create |make |render )?|generate (a |an )?(prompt for )?|create (a |an )?|make (a |an )?|prompt for |a prompt (to |for )?)/i, "")
        .replace(/\bphoto[- ]realistic\b/gi, "photorealistic")
        .trim();

    const isImage = ["Midjourney", "DALL·E 3", "Stable Diffusion"].includes(platform);

    if (isImage) {
        const moodActive = mood && mood !== "normal";
        const quality = QUALITY_TAGS[style] || ["highly detailed", "sharp focus", "professional"];

        if (platform === "Midjourney") {
            const parts: string[] = [cleaned, style];
            if (moodActive) parts.push(`${mood} atmosphere`);
            if (lighting) parts.push(lighting);
            if (camera) parts.push(camera);
            parts.push(...quality.slice(0, 3));
            if (extra) parts.push(extra);
            const param = MJ_PARAMS[style] || "--v 6 --ar 16:9 --stylize 500";
            return [`${parts.join(", ")} ${param}`];
        }

        if (platform === "DALL·E 3") {
            const moodStr = moodActive ? `with a ${mood} mood` : "";
            const lightStr = lighting ? `lit by ${lighting}` : "";
            const camStr = camera ? `captured with a ${camera}` : "";
            const qualStr = quality.slice(0, 2).join(", ");
            const extras = [moodStr, lightStr, camStr, qualStr, extra].filter(Boolean).join(", ");
            return [`A ${style} image of ${cleaned}${extras ? ", " + extras : ""}. Highly detailed and professional quality.`];
        }

        if (platform === "Stable Diffusion") {
            const parts: string[] = [cleaned];
            if (moodActive) parts.push(`${mood} atmosphere`);
            if (lighting) parts.push(lighting);
            if (camera) parts.push(camera);
            if (extra) parts.push(extra);
            const suffix = SD_SUFFIXES[style] || ", masterpiece, best quality, highly detailed";
            return [`${parts.join(", ")}${suffix}\n\nNegative prompt: ugly, blurry, low quality, watermark, signature, deformed, extra limbs, bad anatomy`];
        }
    } else {
        // Text platforms
        const formatMap: Record<string, string> = {
            "formal": "Write in a formal, professional tone with complete sentences.",
            "casual": "Use a casual, conversational tone like talking to a friend.",
            "bullet points": "Structure the entire response using clear bullet points.",
            "step-by-step": "Break down the response into numbered steps in logical order.",
            "storytelling": "Use a narrative storytelling format with a beginning, middle, and end.",
            "persuasive": "Write persuasively with strong arguments and a clear call to action.",
            "technical": "Use precise technical language and include concrete examples.",
            "analytical": "Provide a structured analytical breakdown with evidence and reasoning.",
            "creative": "Be inventive, original, and think outside the box.",
            "concise": "Be concise and direct. No filler words. Every sentence adds value.",
            "detailed": "Provide a thorough, comprehensive, and detailed response.",
            "conversational": "Keep it natural, warm, and conversational.",
            "structured": "Use clear headings and organized sections.",
        };

        const moodMap: Record<string, string> = {
            "professional": "Maintain a polished, professional tone throughout.",
            "friendly": "Keep the tone warm, approachable, and encouraging.",
            "motivating": "Be inspiring — energize and motivate the reader.",
            "empathetic": "Show genuine understanding and empathy.",
            "direct": "Be direct. Get straight to the point. No fluff.",
            "humorous": "Add light, appropriate humor where it fits naturally.",
            "thoughtful": "Be thoughtful, nuanced, and carefully considered.",
            "analytical": "Prioritize logic, data, and evidence-based reasoning.",
        };

        const lines: string[] = [
            `You are an expert assistant. Your task:`,
            `"${cleaned}"`,
            ``,
            `Instructions:`,
        ];
        if (formatMap[style]) lines.push(`- ${formatMap[style]}`);
        if (mood !== "normal" && moodMap[mood]) lines.push(`- ${moodMap[mood]}`);
        if (extra) lines.push(`- Additional context: ${extra}`);
        lines.push(`- Provide a high-quality, well-structured response that fully addresses the task.`);

        return [lines.join("\n")];
    }

    return [cleaned];
}
