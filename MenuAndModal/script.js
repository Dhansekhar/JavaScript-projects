let search_term=document.querySelector("#search");
let submit=document.querySelector("#submit");
let result=document.querySelector("#result");
let meals_element = document.querySelector("#meals");

function searchMeal(e){
     console.log("it is working ",search_term.value);
    e.preventDefault();
    meals_element.innerHTML=''
    if(search_term.value.trim()){
        //fetch API

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_term.value}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {console.log(data)
  if(data.meals===null){
    result.innerHTML=`<p> There is no search result  and search one more</p>`
  }else{
    console.log(search_term);
    
    result.innerHTML=`<h2> Search Results for '${search_term.value}' </h2>`
    meals_element.innerHTML=data.meals.map(meal=>`<div class='meal' > 
        <img src="${meal.strMealThumb} " alt="${meal.strMeal}">
        </img>
        <div class='meal-info' data-mealID="${meal.idMeal}" >
        <h3>
        ${meal.strMeal}
        </h3>
        </div>
        </div>`).join('')

  }
   search_term.value=''
    })
    
  .catch(error => console.error('Error:', error));   
  
    } else{
        alert("Please Enter a Meal ")
    }


    //clear search values
    
    
    
}
submit.addEventListener("submit",searchMeal);

