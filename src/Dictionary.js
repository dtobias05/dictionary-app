import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=64ofdd2839a217b0bata43ae0163f76c`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return <div className="dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} />
            <button type="submit">Search</button>
        </form>
        <Results results={results} />
        </div>;
}