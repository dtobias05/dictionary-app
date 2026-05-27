import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
       let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=64ofdd2839a217b0bata43ae0163f76c`;
        axios.get(apiUrl).then(handleResponse); 
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
        </div>
        );
    } else {
        load();
        return "Loading";
    }
}