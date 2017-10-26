import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import DataWomen from '../assets/data/women.json';
import DataMen from '../assets/data/men.json';
import DataKids from '../assets/data/kids.json';
import Item from './ClothingItem';

export default class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    if( this.props.gender === 'women') {
      return {
        items: DataWomen.map(item => {
          // setting unique ids for each message
          return {
            id: uniqueId("item_"),
            // ... = merge and overwrite if already exists
            ...item
          };
        })
      };
    } else if( this.props.gender === 'men') {
      return {
        items: DataMen.map(item => {
          // setting unique ids for each message
          return {
            id: uniqueId("item_"),
            // ... = merge and overwrite if already exists
            ...item
          };
        })
      };
    } else if( this.props.gender === 'kids') {
      return {
        items: DataKids.map(item => {
          // setting unique ids for each message
          return {
            id: uniqueId("item_"),
            // ... = merge and overwrite if already exists
            ...item
          };
        })
      };
    }
  }

  render(props){
    return (
      <div>
        <Item items={this.state.items} />
      </div>
    )
  }
}
