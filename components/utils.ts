export const ScrollToTop = () => {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
        return;
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const sortArrayOfObjects = (arr: any[], sortinProperty: string, order: 'ascending' | 'decending') => {
    const compare = (a: any, b: any) => {
        if (a[sortinProperty] > b[sortinProperty] && order === "ascending")
            return -1;
        if (a[sortinProperty] < b[sortinProperty] && order === "ascending")
            return 1;
        if (a[sortinProperty] < b[sortinProperty] && order === "decending")
            return -1;
        if (a[sortinProperty] > b[sortinProperty] && order === "decending")
            return 1;
        return 0;
    };

    return arr.sort(compare);
}