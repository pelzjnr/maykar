import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ASPECT_RATIOS = {
  "16:9": "1792x1024",
  "2:1": "1792x1024",
  "1:1": "1024x1024",
} as const;

type AspectRatio = keyof typeof ASPECT_RATIOS;

export async function POST(req: Request) {
  try {
    const { prompt, aspectRatio } = await req.json();

    if (!prompt || !process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing prompt or API key" },
        { status: 400 }
      );
    }

    const dimensions = ASPECT_RATIOS[aspectRatio as AspectRatio] || ASPECT_RATIOS["16:9"];

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Create a compelling YouTube thumbnail: ${prompt}. Make it eye-catching, bold, with high contrast and readable text if appropriate. Style: professional thumbnail design.`,
      n: 4,
      size: dimensions,
      style: "vivid",
      quality: "standard",
    });

    const images = response.data.map((img) => ({
      url: img.url,
      revised_prompt: img.revised_prompt,
    }));

    return NextResponse.json({ images });
  } catch (error: any) {
    console.error("DALL-E error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate images" },
      { status: 500 }
    );
  }
}
