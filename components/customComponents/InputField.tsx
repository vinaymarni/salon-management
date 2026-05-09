import React from 'react';

interface InputProp {
    inputId: string;
    inputType: string;
    placeholder?: string;
    labelName?: string;
    labelClassName?:string
    inputClassName?: string;
    required?: boolean;
    containerClass?: string;
    value?: any;
    onChange?: any;
    name?: string;
}

export default function InputField ({inputId, inputType, placeholder, labelName, labelClassName, 
                    inputClassName, required, containerClass, value, onChange, name}: InputProp) {
    return (
        <div className={containerClass}>
            {labelName != undefined && labelName != "" &&
            <label htmlFor={inputId} className={labelClassName}>{labelName}</label>
            }
            <input 
                name={name}
                id={inputId}
                type={inputType}
                className={inputClassName}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            
        </div>
    )
};

