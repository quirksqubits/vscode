// scripts.js

function findRecipes() {
    const ingredientsInput = document.getElementById('ingredients');
    const resultContainer = document.getElementById('result');
    const enteredIngredients = ingredientsInput.value.toLowerCase().split(',').map(item => item.trim());

    if (enteredIngredients.length === 0) {
        resultContainer.innerHTML = '<p>Please enter some ingredients.</p>';
        return;  // Correctly placed return statement
    }

    // Display loading message
    resultContainer.innerHTML = '<p>Loading...</p>';

    // Simulate a delay (you can remove this in a real-world scenario)
    setTimeout(() => {
        const matchingRecipes = filterRecipes(enteredIngredients);

        if (matchingRecipes.length === 0) {
            resultContainer.innerHTML = '<p>No recipes found with the entered ingredients.</p>';
            return;  // Correctly placed return statement
        }

        const resultHTML = matchingRecipes.map(recipe => {
            return `
                <div>
                    <h2>${recipe.name}</h2>
                    <p>${recipe.instructions}</p>
                </div>
            `;
        }).join('');

        resultContainer.innerHTML = resultHTML;
    }, 1000); // Simulated delay of 1 second (remove in a real-world scenario)
}

function filterRecipes(enteredIngredients) {
    return recipes.recipes.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(item => item.toLowerCase());
        return enteredIngredients.every(ingredient => recipeIngredients.includes(ingredient));
    });
}


const recipes = {
    "recipes": [
        {
            "ingredients": ["tomato", "cheese"],
            "name": "Tomato and Cheese Sandwich",
            "instructions": "1. Place sliced tomato and cheese between two slices of bread.\n2. Grill until cheese is melted and bread is toasted."
        },
        {
            "ingredients": ["chicken", "rice"],
            "name": "Chicken and Rice Bowl",
            "instructions": "1. Cook chicken until golden brown.\n2. Serve chicken over a bed of cooked rice."
        },
        {
            "ingredients": ["pasta", "tomato sauce", "cheese"],
            "name": "Pasta with Tomato Sauce and Cheese",
            "instructions": "1. Cook pasta according to package instructions.\n2. Heat tomato sauce in a pan and mix in cooked pasta.\n3. Serve topped with grated cheese."
        },
        {
            "ingredients": ["egg", "bacon", "bread"],
            "name": "Egg and Bacon Breakfast Sandwich",
            "instructions": "1. Fry bacon until crispy and cook eggs to your preference.\n2. Place bacon and eggs between two slices of bread.\n3. Enjoy your breakfast sandwich!"
        },
        {
            "ingredients": ["salmon", "lemon", "spinach"],
            "name": "Salmon and Spinach Salad",
            "instructions": "1. Grill or bake salmon until cooked through.\n2. Toss spinach leaves with lemon juice.\n3. Serve salmon over spinach and drizzle with olive oil."
        },
        {
            "ingredients": ["beef", "potato", "carrot", "onion"],
            "name": "Beef Stew",
            "instructions": "1. Brown beef in a pot with onions.\n2. Add carrots, potatoes, and enough water to cover.\n3. Simmer until beef and vegetables are tender."
        },
        {
            "ingredients": ["shrimp", "garlic", "butter", "parsley"],
            "name": "Garlic Butter Shrimp",
            "instructions": "1. Saute minced garlic in butter until fragrant.\n2. Add shrimp and cook until pink.\n3. Garnish with chopped parsley before serving."
        },
        {
            "ingredients": ["chickpeas", "tomato", "cucumber", "feta cheese"],
            "name": "Greek Chickpea Salad",
            "instructions": "1. Combine chickpeas, diced tomatoes, diced cucumber, and crumbled feta cheese in a bowl.\n2. Drizzle with olive oil and lemon juice.\n3. Toss to combine and serve chilled."
        },
        {
            "ingredients": ["tofu", "soy sauce", "sesame oil", "green onion"],
            "name": "Tofu Stir Fry",
            "instructions": "1. Press tofu to remove excess water, then cut into cubes.\n2. Stir fry tofu in sesame oil until golden.\n3. Add soy sauce and green onions, and cook until heated through."
        },
        {
            "ingredients": ["ground beef", "taco seasoning", "lettuce", "tomato", "cheddar cheese"],
            "name": "Beef Taco Salad",
            "instructions": "1. Brown ground beef with taco seasoning.\n2. Serve over a bed of lettuce with diced tomatoes and shredded cheddar cheese.\n3. Enjoy with your favorite taco toppings."
        },
        {
            "ingredients": ["quinoa", "black beans", "corn", "bell pepper", "avocado"],
            "name": "Quinoa and Black Bean Salad",
            "instructions": "1. Cook quinoa according to package instructions.\n2. Combine cooked quinoa with black beans, corn, diced bell pepper, and diced avocado.\n3. Toss with lime juice and cilantro before serving."
        },
        {
            "ingredients": ["chicken breast", "bbq sauce", "red onion", "cilantro"],
            "name": "BBQ Chicken Pizza",
            "instructions": "1. Preheat oven and roll out pizza dough.\n2. Spread BBQ sauce on the dough.\n3. Top with cooked chicken, sliced red onion, and chopped cilantro.\n4. Bake until crust is golden and toppings are heated through."
        },
        {
            "ingredients": ["pork chops", "apple", "onion", "thyme"],
            "name": "Pork Chops with Apples",
            "instructions": "1. Season pork chops with salt, pepper, and thyme.\n2. Sear pork chops until browned, then remove from pan.\n3. Saute sliced apples and onions until softened.\n4. Return pork chops to the pan and simmer until cooked through."
        },
        {
            "ingredients": ["spinach", "ricotta cheese", "lasagna noodles", "marinara sauce", "mozzarella cheese"],
            "name": "Spinach Lasagna",
            "instructions": "1. Cook lasagna noodles according to package instructions.\n2. Layer noodles with marinara sauce, ricotta cheese, spinach, and mozzarella cheese.\n3. Repeat layers and bake until bubbly and golden."
        },
        {
            "ingredients": ["tuna", "mayonnaise", "celery", "onion", "bread"],
            "name": "Tuna Salad Sandwich",
            "instructions": "1. Mix tuna with mayonnaise, diced celery, and diced onion.\n2. Spread tuna salad on bread slices.\n3. Top with lettuce and another slice of bread.\n4. Enjoy your tuna salad sandwich!"
        },
        {
            "ingredients": ["pumpkin", "flour", "eggs", "milk", "cinnamon"],
            "name": "Pumpkin Pancakes",
            "instructions": "1. Mix pumpkin puree, flour, eggs, milk, and cinnamon until smooth.\n2. Heat a skillet and pour batter to form pancakes.\n3. Cook until golden brown on both sides.\n4. Serve with maple syrup."
        },
        {
            "ingredients": ["spaghetti squash", "marinara sauce", "parmesan cheese"],
            "name": "Spaghetti Squash with Marinara",
            "instructions": "1. Roast spaghetti squash until tender.\n2. Scrape out the squash strands and toss with marinara sauce.\n3. Serve topped with grated parmesan cheese."
        },
        {
            "ingredients": ["sweet potato", "black beans", "bell pepper", "lime", "cilantro"],
            "name": "Sweet Potato and Black Bean Tacos",
            "instructions": "1. Roast sweet potato cubes until tender.\n2. Warm black beans and bell pepper strips.\n3. Fill taco shells with sweet potatoes, black beans, and bell peppers.\n4. Squeeze lime juice and garnish with cilantro."
        },
        {
            "ingredients": ["salmon", "honey", "soy sauce", "garlic"],
            "name": "Honey Garlic Salmon",
            "instructions": "1. Mix honey, soy sauce, and minced garlic.\n2. Marinate salmon fillets in the mixture for 30 minutes.\n3. Grill or bake salmon until cooked through.\n4. Serve with additional sauce if desired."
        },
        {
            "ingredients": ["chicken thighs", "lemon", "rosemary", "garlic"],
            "name": "Lemon Rosemary Chicken",
            "instructions": "1. Season chicken thighs with salt, pepper, minced garlic, and chopped rosemary.\n2. Sear chicken until golden brown.\n3. Finish cooking in the oven until juices run clear.\n4. Serve with lemon wedges."
        },
        {
            "ingredients": ["broccoli", "bell pepper", "carrot", "soy sauce", "sesame oil"],
            "name": "Stir Fried Vegetables",
            "instructions": "1. Stir fry broccoli florets, sliced bell peppers, and shredded carrots in sesame oil.\n2. Add soy sauce and cook until vegetables are tender.\n3. Serve as a side dish or over rice."
        },
        {
            "ingredients": ["ground turkey", "bell pepper", "onion", "tomato sauce", "chili powder"],
            "name": "Turkey Chili",
            "instructions": "1. Brown ground turkey with diced onions and bell peppers.\n2. Stir in tomato sauce, chili powder, and any desired seasonings.\n3. Simmer until flavors are blended and chili has thickened."
        },
        {
            "ingredients": ["cod", "lemon", "butter", "parsley"],
            "name": "Baked Lemon Butter Cod",
            "instructions": "1. Place cod fillets in a baking dish.\n2. Drizzle with melted butter and lemon juice.\n3. Season with chopped parsley, salt, and pepper.\n4. Bake until fish is flaky and cooked through."
        },
        {
            "ingredients": ["cucumber", "yogurt", "garlic", "dill"],
            "name": "Tzatziki Sauce",
            "instructions": "1. Grate cucumber and squeeze out excess moisture.\n2. Mix cucumber with yogurt, minced garlic, chopped dill, and a splash of lemon juice.\n3. Serve chilled as a dip or sauce."
        },
        {
            "ingredients": ["ground beef", "macaroni", "tomato sauce", "cheddar cheese"],
            "name": "Beef and Macaroni Casserole",
            "instructions": "1. Cook macaroni according to package instructions.\n2. Brown ground beef and mix with tomato sauce.\n3. Combine cooked macaroni with beef mixture in a baking dish.\n4. Top with shredded cheddar cheese and bake until bubbly."
        },
        {
            "ingredients": ["chicken breast", "pesto", "mozzarella cheese", "tomato"],
            "name": "Pesto Stuffed Chicken",
            "instructions": "1. Cut a pocket into each chicken breast.\n2. Stuff with pesto, sliced tomatoes, and mozzarella cheese.\n3. Secure with toothpicks and bake until chicken is cooked through."
        },
        {
            "ingredients": ["potato", "bacon", "cheddar cheese", "sour cream"],
            "name": "Loaded Baked Potatoes",
            "instructions": "1. Bake potatoes until tender.\n2. Cut a slit in each potato and stuff with cooked bacon and shredded cheddar cheese.\n3. Top with a dollop of sour cream before serving."
        },
        {
            "ingredients": ["ground pork", "cabbage", "carrot", "ginger", "soy sauce"],
            "name": "Pork and Cabbage Stir Fry",
            "instructions": "1. Stir fry ground pork with shredded cabbage and carrots.\n2. Season with grated ginger and soy sauce.\n3. Cook until vegetables are tender and pork is cooked through."
        },
        {
            "ingredients": ["chickpeas", "lemon", "tahini", "garlic"],
            "name": "Homemade Hummus",
            "instructions": "1. Blend chickpeas, lemon juice, tahini, and minced garlic until smooth.\n2. Season with salt and pepper to taste.\n3. Serve with pita bread, vegetables, or as a dip."
        },
        {
            "ingredients": ["ground beef", "onion", "green beans", "cream of mushroom soup", "cheddar cheese"],
            "name": "Green Bean Casserole",
            "instructions": "1. Brown ground beef with diced onions.\n2. Combine cooked green beans with cream of mushroom soup and half of the shredded cheddar cheese.\n3. Spread beef mixture in a baking dish and top with remaining cheese.\n4. Bake until cheese is melted and bubbly."
        },
        {
            "ingredients": ["chicken thighs", "coconut milk", "curry paste", "bell pepper"],
            "name": "Coconut Curry Chicken",
            "instructions": "1. Brown chicken thighs in a pan.\n2. Add curry paste, coconut milk, and sliced bell peppers.\n3. Simmer until chicken is cooked through and sauce is thickened.\n4. Serve over rice."
        },
        {
            "ingredients": ["penne pasta", "spinach", "sun-dried tomatoes", "pine nuts", "parmesan cheese"],
            "name": "Penne with Spinach and Sun-Dried Tomatoes",
            "instructions": "1. Cook penne pasta according to package instructions.\n2. Saute spinach and sun-dried tomatoes in olive oil until wilted.\n3. Toss cooked pasta with spinach mixture, toasted pine nuts, and grated parmesan cheese."
        },
        {
            "ingredients": ["tilapia", "lime", "cilantro", "jalapeno"],
            "name": "Grilled Tilapia with Lime-Cilantro Sauce",
            "instructions": "1. Season tilapia fillets with salt and pepper.\n2. Grill fish until cooked through.\n3. Mix chopped cilantro, lime juice, and minced jalapeno for the sauce.\n4. Serve fish with lime-cilantro sauce."
        },
        {
            "ingredients": ["ground turkey", "zucchini", "bell pepper", "tomato sauce", "italian seasoning"],
            "name": "Turkey Zucchini Boats",
            "instructions": "1. Cut zucchinis in half lengthwise and scoop out the seeds.\n2. Brown ground turkey with diced bell peppers.\n3. Fill zucchini halves with turkey mixture and top with tomato sauce.\n4. Bake until zucchini is tender."
        },
        {
            "ingredients": ["lentils", "onion", "carrot", "celery", "vegetable broth"],
            "name": "Lentil Soup",
            "instructions": "1. Saute diced onions, carrots, and celery in olive oil until softened.\n2. Add lentils and vegetable broth.\n3. Simmer until lentils are tender.\n4. Season with salt, pepper, and any desired herbs."
        },
        {
            "ingredients": ["chicken breast", "avocado", "bacon", "ranch dressing"],
            "name": "Chicken Bacon Avocado Wrap",
            "instructions": "1. Cook chicken breast until done.\n2. Cook bacon until crispy.\n3. Slice avocado.\n4. Assemble wraps with chicken, bacon, avocado, and ranch dressing."
        },
        {
            "ingredients": ["ground beef", "bell pepper", "onion", "tomato", "rice"],
            "name": "Stuffed Bell Peppers",
            "instructions": "1. Cook rice according to package instructions.\n2. Brown ground beef with diced onions and chopped tomatoes.\n3. Mix cooked rice with beef mixture.\n4. Stuff bell peppers with the mixture and bake until peppers are tender."
        },
        {
            "ingredients": ["chicken thighs", "soy sauce", "brown sugar", "ginger", "garlic"],
            "name": "Teriyaki Chicken",
            "instructions": "1. Marinate chicken thighs in soy sauce, brown sugar, minced garlic, and grated ginger.\n2. Grill or bake chicken until cooked through.\n3. Serve with steamed vegetables and rice."
        },
        {
            "ingredients": ["pork ribs", "bbq sauce", "apple cider vinegar", "brown sugar"],
            "name": "BBQ Pork Ribs",
            "instructions": "1. Rub pork ribs with a mixture of brown sugar, salt, and pepper.\n2. Cook ribs low and slow on the grill or in the oven.\n3. Baste with a mixture of BBQ sauce and apple cider vinegar.\n4. Continue cooking until tender and caramelized."
        },
        {
            "ingredients": ["chickpeas", "kale", "lemon", "garlic", "olive oil"],
            "name": "Garlicky Chickpea and Kale Salad",
            "instructions": "1. Saute minced garlic in olive oil until fragrant.\n2. Add chickpeas and kale, and cook until kale is wilted.\n3. Squeeze lemon juice over the salad before serving."
        },
        {
            "ingredients": ["beef", "mushrooms", "onion", "beef broth", "sour cream"],
            "name": "Beef Stroganoff",
            "instructions": "1. Brown beef in a pan with diced onions and sliced mushrooms.\n2. Add beef broth and simmer until beef is tender.\n3. Stir in sour cream and heat through.\n4. Serve over cooked egg noodles."
        },
        {
            "ingredients": ["salmon", "asparagus", "lemon", "butter"],
            "name": "Lemon Butter Salmon with Asparagus",
            "instructions": "1. Preheat oven and prepare a baking sheet.\n2. Season salmon fillets with salt, pepper, and lemon zest.\n3. Place salmon and asparagus on the baking sheet.\n4. Drizzle with melted butter and lemon juice.\n5. Bake until salmon is cooked through and asparagus is tender."
        },
        {
            "ingredients": ["chicken breast", "quinoa", "broccoli", "soy sauce", "sesame oil"],
            "name": "Chicken and Broccoli Quinoa Bowl",
            "instructions": "1. Cook quinoa according to package instructions.\n2. Stir fry sliced chicken breast with chopped broccoli.\n3. Season with soy sauce and sesame oil.\n4. Serve over cooked quinoa."
        }
    ]
}
;
