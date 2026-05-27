import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div>
            <p>{props.phonetic}</p>
        </div>
    );
}