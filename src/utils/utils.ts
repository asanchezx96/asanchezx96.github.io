
export const switchCase = (response: string, options: any) => { //eslint-disable-line
    return options[response]
        ? options[response]()
        : options["DEFAULT"] && options["DEFAULT"]();
};