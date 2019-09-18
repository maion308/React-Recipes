import React from 'react'

const Article = (props) => {
    return (
        <article class="article">
        <img id="food_image" src={props.pic.img} alt="" class="img-thumbnail" />
        <div id="Ingredients_cont">
          <h1>Ingredients</h1>
          <ul>
            <li>{props.item1.ingredients[0]}</li>
            <li>{props.item2.ingredients[1]}</li>
            <li>{props.item3.ingredients[2]}</li>
            <li>{props.item4.ingredients[3]}</li>
            <li>{props.item5.ingredients[4]}</li>
            <li>{props.item6.ingredients[5]}</li>
            <li>{props.item7.ingredients[6]}</li>
            <li>{props.item8.ingredients[7]}</li>
            <li>{props.item9.ingredients[8]}</li>
          </ul>
        </div>
        <h1>Preparation</h1>
        <p>{props.prep.preparation}</p>
      </article>
    )
}

export default Article