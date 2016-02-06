define(function (require, exports, module) {
/** @jsx React.DOM */

'use strict';

var RC = require('react-canvas');
var React = RC.React;
var ReactCanvas = RC.ReactCanvas;

var Group = ReactCanvas.Group;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var Item = React.createClass({displayName: "Item",

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    itemIndex: React.PropTypes.number.isRequired,
  },

  statics: {
    getItemHeight: function () {
      return 80;
    }
  },

  render: function () {
    return (
      React.createElement(Group, {style: this.getStyle()}, 
        React.createElement(Image, {style: this.getImageStyle(), src: this.props.imageUrl}), 
        React.createElement(Text, {style: this.getTitleStyle()}, this.props.title), 
        React.createElement(Text, {style: this.getExcerptStyle()}, this.props.excerpt)
      )
    );
  },

  getStyle: function () {
    return {
      width: this.props.width,
      height: Item.getItemHeight(),
      backgroundColor: (this.props.itemIndex % 2) ? '#eee' : '#a5d2ee'
    };
  },

  getImageStyle: function () {
    return {
      top: 10,
      left: 10,
      width: 60,
      height: 60,
      backgroundColor: '#ddd',
      borderColor: '#999',
      borderWidth: 1
    };
  },

  getTitleStyle: function () {
    return {
      top: 18,
      left: 80,
      width: this.props.width - 90,
      height: 30,
      fontSize: 14,
      lineHeight: 30
    };
  },

  getExcerptStyle: function() {
    return {
      top: 48,
      left: 80,
      width: this.props.width - 90,
      height: 30,
      fontSize: 14,
      lineHeight: 30
    };
  }

});

module.exports = Item;

});