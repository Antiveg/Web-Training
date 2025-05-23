"use client"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type WeatherData = {
    location: {
        name: string
        country: string
        localtime: string
    }
    current: {
        temperature: number
        feelslike: number
        weather_icons: string[]
        weather_descriptions: string[]
        wind_speed: number
        wind_dir: string
        wind_degree: number
        pressure: number
        precip: number
        humidity: number
        cloudcover: number
        uv_index: number
        visibility: number
        astro?: {
        sunrise: string
        sunset: string
        moonrise: string
        moonset: string
        moon_phase: string
        moon_illumination: number
        }
        air_quality?: {
            co: string
            no2: string
            o3: string
            so2: string
            pm2_5: string
            pm10: string
            'us-epa-index': string
            'gb-defra-index': string
        }
    }
}

type ApiError = {
    code: number
    type: string
    info: string | null
}

type WeatherShowcaseProps = {
    searched: string | null
}

export default function Weather(){

    const [place, setPlace] = useState<string>('')
    const [searched, setSearched] = useState<string | null>(null)

    return (
        <div className="flex flex-col items-start w-full pl-20 pr-20 gap-4 h-auto">
            <div className="flex flex-row w-full gap-4">
                <Input 
                    type="text" 
                    placeholder='search any place ...' 
                    value={place} 
                    onChange={(e) => setPlace(e.target.value)}
                />
                <Button
                className='bg-gray-100 hover:bg-gray-400'
                onClick={() => setSearched(place)}>
                    <FaSearch className="text-black"/>
                </Button>
            </div>
            <WeatherShowcase searched={searched}/>
        </div>
    )
}

const WeatherShowcase: React.FC<WeatherShowcaseProps> = ({ searched }) => {

    if(!searched){
        return (
            <div className="w-full h-full flex justify-center items-center rounded-md bg-gray-100 p-4">
                No place has been chosen ...
            </div>
        )
    }

    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(`/api/weather?query=${encodeURIComponent(searched)}`)
                const data = await response.json()

                if(data.error){
                    setError(data.error)
                    setWeather(null)
                }else{
                    setWeather(data)
                }
            }catch(err){
                setError({
                    code: 500,
                    type: 'network_error',
                    info: (err as Error).message || 'Network request failed'
                })
            }finally{
                setLoading(false)
            }
        }
        fetchWeather()
    }, [searched])

    if(loading){
        return (
            <div className="w-full h-full flex justify-center items-center rounded-md bg-gray-100 p-4">
                Fetching Weather Info ...
            </div>
        )
    }

    if(!weather || error){
        return (
            <div className="w-full h-full flex flex-col justify-center items-center rounded-md bg-gray-100 p-4">
                <h1 className="text-[100px] leading-none"><b>{error?.code}</b></h1>
                <p className="text-lg"><b>{error?.type}</b></p>
                <p className="text-sm text-gray-500 pt-2">{error?.info}</p>
            </div>
        )
    }

    const { location, current } = weather!

    return (
        <div className="w-full h-auto rounded-md bg-gray-100 p-4 relative overflow-hidden">
            <img
            src={current.weather_icons[0]}
            alt="No BG"
            className="absolute bottom-0 right-0 h-full"
            style={{
                WebkitMaskImage: 'linear-gradient(to right,transparent,black)',
                maskImage: 'linear-gradient(to right,transparent,black)',
                objectFit: 'cover',
            }}
            />

            <h2 className="text-xl font-bold mb-2">{location.name}, {location.country}</h2>
            <p className="text-gray-600">Local Time: {location.localtime}</p>
            
            <div className="mt-4 flex items-center gap-4">
                <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className="w-12 h-12" />
                <div>
                    <p className="text-lg font-semibold">{current.weather_descriptions[0]}</p>
                    <p className="text-sm">Temperature: {current.temperature}°C (Feels like {current.feelslike}°C)</p>
                </div>
            </div>

            <div className="flex w-full h-auto gap-12 flex-col md:flex-row">
                <div className="mt-4 text-md text-gray-700 flex flex-col h-auto">
                    <p>Humidity: {current.humidity}%</p>
                    <p>Wind: {current.wind_speed} km/h {current.wind_dir} ({current.wind_degree}°)</p>
                    <p>Pressure: {current.pressure} mb</p>
                    <p>Cloud Cover: {current.cloudcover}%</p>
                    <p>Precipitation: {current.precip} mm</p>
                    <p>UV Index: {current.uv_index}</p>
                    <p>Visibility: {current.visibility} km</p>
                </div>

                {current?.astro && (
                    <div className="flex flex-col h-auto">
                        <h3 className="mt-4 font-semibold text-sm">Astro Info:</h3>
                        <ul className="text-md text-gray-700 list-disc list-inside">
                            <li>Sunrise: {current.astro.sunrise}</li>
                            <li>Sunset: {current.astro.sunset}</li>
                            <li>Moonrise: {current.astro.moonrise}</li>
                            <li>Moonset: {current.astro.moonset}</li>
                            <li>Moon Phase: {current.astro.moon_phase}</li>
                            <li>Moon Illumination: {current.astro.moon_illumination}%</li>
                        </ul>
                    </div>
                )}

                {current?.air_quality && (
                    <div className="flex flex-col h-auto">
                        <h3 className="mt-4 font-semibold text-sm">Air Quality:</h3>
                        <ul className="text-md text-gray-700 list-disc list-inside">
                            <li>CO: {current.air_quality.co}</li>
                            <li>NO₂: {current.air_quality.no2}</li>
                            <li>O₃: {current.air_quality.o3}</li>
                            <li>SO₂: {current.air_quality.so2}</li>
                            <li>PM2.5: {current.air_quality.pm2_5}</li>
                            <li>PM10: {current.air_quality.pm10}</li>
                            <li>US EPA Index: {current.air_quality["us-epa-index"]}</li>
                            <li>GB DEFRA Index: {current.air_quality["gb-defra-index"]}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}