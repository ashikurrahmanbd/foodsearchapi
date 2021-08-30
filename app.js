const findButton = document.getElementById('button-search');

findButton.addEventListener('click', function(){
        
        const inputField  = document.getElementById('input-text');

        const inputTextValue = inputField.value;

        fetchData(inputTextValue);

        inputField.value = ''

        
})

const fetchData = (inputValue) => {

        const url =    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        
        fetch(url)
                .then(response => response.json())
                        .then(data => displayFoodResults(data))


}

const displayFoodResults = (data) => {
        const cardContainer = document.getElementById('card-container');

        for(const singleMeal of data.meals){
                const cardCol = document.createElement('div');
                cardCol.classList.add('col');
                cardCol.innerHTML =     `

                <div class="card">
                        <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                                <h5 class="card-title">${singleMeal.strMeal}</h5>
                                <p class="card-text">${singleMeal.strInstructions.slice(0, 150)}</p>
                        </div>
                </div>
                
                `
                cardContainer.appendChild(cardCol);

        }
}





