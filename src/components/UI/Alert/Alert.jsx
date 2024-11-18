import React from "react";
import './Alert.css'
import { useEffect } from "react";
import { useState } from "react";

function Alert(props) {
    const [isDismiss, setIsDismiss] = useState(false)
    useEffect(() => {
        if (props.dismiss !== undefined) {
            setIsDismiss(true)
            return
        }
        setIsDismiss(false)
    }, [])
    return (
        <div
            onClick={isDismiss ? null : props.clickDismissable}
            className={['alert', props.type].join(' ')}
        >
            {props.children}
            {isDismiss
                ? <button
                    className="alert_button"
                    onClick={props.dismiss}
                >
                    X
                </button>
                : null
            }
        </div>
    )
}

export default Alert