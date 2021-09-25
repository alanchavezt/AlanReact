export const sortArray = (rowData, key) =>{
    let sortedArray = rowData.sort((a, b) => {
        let fa = a[key].toLowerCase();
        let fb = b[key].toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    return sortedArray;
}
