let search_term=document.querySelector("#search");
let submit=document.querySelector("#submit");
let result=document.querySelector("#result");
let meals_element = document.querySelector("#meals");
let single_meal= document.querySelector(".single-meal")

function getMealbyID(mealID){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {console.log(data)
    // single_meal.innerHTML=data.meals.map(meal=>`<div class='meal' > 
    //     <img src="${meal.strMealThumb} " alt="${meal.strMeal}">
    //     </img>
    //     <div class='meal-info' data-mealID="${meal.idMeal}" >
    //     <h3>
    //     ${meal.strMeal}
    //     </h3>
    //     </div>
    //     <p>${meal.strInstructions}</P>
    //     </div>`).join('')

    const meal= data.meals[0]
    addMealToDOM(meal)
       
        
  }) // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors  
    
}
function addMealToDOM(meal){
const ingredients=[]
for (let i = 1;  i<=20; i++) {
   if(meal[`strIngredient${i}`]){
    ingredients.push(`${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`)

   }else{
    break
   }
    
}
console.log(ingredients);

single_meal.innerHTML=`
<div class='single-meal'>
<h1>${meal.strMeal}</h1>
<img src='${meal.strMealThumb}' alt='${meal.strMeal}'></img>
<div class='single-meal-info'>
${meal.strCategory?`<p>
    ${meal.strCategory}
    </p>`:''}

    ${meal.strArea?`<p>
    ${meal.strArea}
    </p>`:''}
    
</div>
<div class='main'>
<p>
${meal.strInstructions}
</p>
<h2>
Ingredients
</h2>
<ul> ${ingredients.map(ing=>`<li>
    ${ing}
    </li>`).join('')}</ul>
</div>
</div>
`
}

meals_element.addEventListener('click', (e)=>{
    // console.log(e.composedPath());
    const mealInfo = e.composedPath().find(item =>{
        // console.log(item.classList);
        if (item.classList) {
            return item.classList.contains('meal-info')
            
        }else{
            return false
        }
        
    })
    console.log(mealInfo);
    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid')
        console.log(mealID);
        getMealbyID(mealID)
        
    }



})

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

