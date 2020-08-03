const ADD = "ADD";
const SUB = "SUB";

add = (text) => {
    return {
        type: ADD,
        text: text
    }
}

sub = (text) => {
    return {
        type: SUB,
        text: text
    }
}

export default {add, sub};