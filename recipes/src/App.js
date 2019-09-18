import React from 'react';
import recipes from './data/recipes';
import Nav from './components/nav';
import Header from './components/header';
import Article from './components/article';
import Footer from './components/footer';

const recipe = recipes[0];
const App = () => {
  return (
    <div class="flex-container">
      <Nav {...recipe} />
      <Header {...recipe}/>
      <Article
        pic={recipe}
        item1={recipe}
        item2={recipe}
        item3={recipe}
        item4={recipe}
        item5={recipe}
        item6={recipe}
        item7={recipe}
        item8={recipe}
        item9={recipe}
        prep={recipe}
      />
      <Footer />
    </div>
  )
};





export default App;