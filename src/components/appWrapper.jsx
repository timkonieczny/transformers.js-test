import React from "react"

export default function AppWrapper() {

    const ai = async () => {
        window.screenRecorder.runAI("hello")
    }

    return (<>
        <button className="btn btn-info" onClick={ai}>AI ✨</button>
    </>
    )
}