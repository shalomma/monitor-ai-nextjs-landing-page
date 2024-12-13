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
        if (!response.ok) {
            console.log(response)
            // Return error response with status code and message
            return NextResponse.json(
                { message: `Submission error. Please email us.` },
                { status: response.status }
            );
        }
        const json = await response.json();
        return NextResponse.json(json);
    } catch (err) {
        console.error(err);
        // Return a proper error response instead of NextResponse.error()
        return NextResponse.json(
            { message: 'Failed to connect.' },
            { status: 500 }
        );
    }
}