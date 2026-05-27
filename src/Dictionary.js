import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
       let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=64ofdd2839a217b0bata43ae0163f76c`;
        axios.get(apiUrl).then(handleDictionaryResponse); 

        let pexelsApiKey = "rHXKBMt8QyMfx8K0svItFxzDBxaciwAW6VMbBtltuQMRRvsHku9TrYMt";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: pexelsApiKey };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
        <div className="dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword} />
        </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>
        );
    } else {
        load();
        return "Loading";
    }
}