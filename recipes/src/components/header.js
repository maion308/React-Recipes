import React, { Component } from 'react';

class Header extends Component {
  render() {
  return (
    <div class="flex-container">
    <header>
    <h1>{this.props.title}</h1>
      <cite class="contributors">
            <div>By {this.props.author}</div>
            <div><a href={this.props.source} target="_blank">Source</a></div>
            </cite>
      <ul id="recipe_meta_data" class="list-group">
        <li class="list-group-item">Active: {this.props.prepTime}</li>
        <li class="list-group-item">Total: {this.props.totalTime}</li>
        <li class="list-group-item">{this.props.servingSize} Servings</li>
      </ul>
    </header>
    
  </div>
  );
  }
};

export default Header;