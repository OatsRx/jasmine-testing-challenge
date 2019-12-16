whatCanIDrink = function(age) {
    if (age < 0) {
        return "Sorry. I can't tell you what to drink as yourthat age is incorrect";
    }
    else if (age < 14) {
        return "Drink juice";
    }
    else if (age < 18 && age >=14) {
        return "Drink fanta";
    }
    else if (age < 21 && age >=18) {
        return "Drink beer";
    }
    else if (age < 130) {
        return "Drink whiskey";
    }
    else {
        return "Sorry. I can't tell you what to drink as yourthat age is incorrect";
    }
}