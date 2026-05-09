import React, { useRef,useState} from "react";

interface fieldProps {
    inputId: string;
    placeholder?: string;
    mainContainerClass?: string;
    value?: any;
    onChange?: any;
    name?: string;
    error?: boolean;
    required?: boolean;
    array?: any;
    label?: string;
    className?: string;
     containerClassName?: string;
    labelClassName?: string;
    disabled?: boolean;
    dropdownArray?: any;
    mainDropdownCon?: string;
    hide?: any;
}

export default function Dropdown2 ({inputId, name, onChange, placeholder, value, label, 
                    className, containerClassName,labelClassName, required, 
                    disabled, dropdownArray, mainDropdownCon, hide}:fieldProps) {    
    const inputRef = useRef<any>(null);
    const [errMsg, setErrMsg] = useState("");
  
    const handleClick = () => {
      if (inputRef && inputRef.current) inputRef?.current.focus();
    };
  
    return (
        <div className={mainDropdownCon}>
            {!hide &&
            <>
                <label className={labelClassName} htmlFor={inputId}>{label}<span style={{color:"red"}}>{required && label != "" ? "*" : "" }</span></label>
                <div id={`con${inputId}`} onClick={()=>handleClick()} className={containerClassName}> 
                    <select
                        name={name} 
                        id={inputId} 
                        onChange={(e)=>onChange(e)}
                        className={className}
                        value={value}
                        disabled={disabled}
                        autoComplete="off"
                        >
                            <option value="Please Choose..." hidden>{placeholder}</option>
                            {dropdownArray != undefined &&  dropdownArray != null &&
								dropdownArray.map((eachItem:any, ind:number)=>{
									
                                return(
									<option key={ind} id={eachItem.id} className="dropdown-item" value={eachItem.id}>{eachItem.name}</option>
									)
                            })};              
                    </select>
                     
                </div>
                 <div id={`err${inputId}`} className="inputErrorMsgCon"><span id={`errmsg${inputId}`} className="inputErrorMsg">{errMsg}</span></div>
            </>
            }
        </div>
    )
};
