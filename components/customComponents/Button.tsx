import React from "react";

interface ButtonProp {
    buttonId: string;
    title?: string;
    toolTip?:string
    buttonClassName?: string;
    icon?: any;
    buttonConClassName?: string;
    value?: any;
    onSubmit?: any;
    name?: string;
}

export default function Button ({ buttonId, buttonConClassName, buttonClassName, onSubmit, 
                title, value, name, icon, toolTip }: ButtonProp) {

    return(
        <div className={buttonConClassName}>
            <button 
                id={buttonId}
                className={buttonClassName}
                onClick={(e)=>onSubmit ? onSubmit(e) : ""}
                value={value}
                name={name}
                title={toolTip ? toolTip : ""}
            >
                {title}
                {icon}
            </button>
            
        </div>
    )
};

