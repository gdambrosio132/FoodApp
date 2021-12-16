const CalculateCalories = ({items}) => {
    var sum = 0;
    items.map((item) => {
        if(item.calorie != null)
            sum += item.calorie
    })
    return sum;
}

export default CalculateCalories

