const filterItems = ({predictions, threshold}) => {
    var filteredPredictions = predictions.filter(item => item.value >= threshold)
    filteredPredictions = filteredPredictions.map((item) => {
        item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return item;
    })
    return filteredPredictions
}

export default filterItems

