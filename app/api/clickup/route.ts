export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data = await request.json();

    const url = `https://api.clickup.com/api/v2/list/${process.env.CLICKUP_LIST_ID}/task`;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `${process.env.CLICKUP_API_KEY}`
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        return NextResponse.json(json);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}

export function GET(request: Request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

