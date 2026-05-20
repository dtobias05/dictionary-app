import React from "react";

export default function Results(props) {
    if (props.result.length) {
    return <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function(meaning, index) {
            return meaning.definition[0].definition;
        })}
    </div>;
    } else {
        return null;
    }
}