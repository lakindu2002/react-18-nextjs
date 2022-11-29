import { Suspense } from "react";
import FeedComponent from "./Components/Feed";
import WeatherComponent from "./Components/Weather";

export default async function IndexPage() {
    return (
        <>
            <h1>
                Hello from Index Page!
            </h1>
            <div style={{ display: 'flex', gap: 5 }}>
                <div>
                    <Suspense fallback={<>
                        Loading Weather
                    </>}>
                        <WeatherComponent />
                    </Suspense>
                </div>
                <div>
                    <Suspense fallback={<>
                        Loading Feed
                    </>}>
                        <FeedComponent />
                    </Suspense>
                </div>
            </div>
        </>
    )
}