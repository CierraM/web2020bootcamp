import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes"


export default function App() {
    return <div>
    <Header></Header>
    {notes.map(note => {
        return <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    })}
    <Footer />
</div>
}
