type Collection<T> = {
    content: T;
}

function identity<T>(value: T): Collection<T> {
    return {
        content: value
    };
}


console.log(identity(1)) // 1