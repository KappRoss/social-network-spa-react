export const required = (value) => {
    if(value) return undefined

    return "field is required";
} 

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) return `max length is ${maxLength} symbols`;
    
        return undefined;
    } 
} 