import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const apiKey = process.env.WEATHERSTACK_API_KEY

    if(!query){
        return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
    }

    try{
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        return NextResponse.json(data)
    }catch(error){
        return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 })
    }
}