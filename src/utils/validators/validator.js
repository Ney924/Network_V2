export const required = (value) => {
        if (value) return undefined;
        return "Поле обязательное для заполнения !!!!!"     ; 
}

export const maxLenghtCreator = (maxlenght) => (value) => {
        if (value.length > maxlenght) return `Максимальная длина поста ${maxlenght} символов !!!!`;
        return undefined; 
}