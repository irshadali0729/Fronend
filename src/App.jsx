import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [profile, SetProfile] = useState([])
    const BASE_URL = '/api'


    async function getProfile() {
        const response = await fetch(`${BASE_URL}/profile`);
        const jsonRes = await response.json();
        console.log("#", jsonRes)
        SetProfile(jsonRes.profile)
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <>
            <section id="center">
                <h1>React Frontend </h1>
                <h2>Frontend deployement using CI CD </h2>
                <h3>Finally</h3>

                {profile && <h1>{profile?.name}</h1>}
            </section>
        </>
    )
}

export default App
