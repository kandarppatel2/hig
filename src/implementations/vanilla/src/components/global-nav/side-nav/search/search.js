import './search.scss';

const Template = require('./search.html');
const Interface = require('interface.json');
const Core = require('_core.js');

/**
 * Creates an Search
 *
 * @class
 */

class Search extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  hideClearIcon() {
    this._findDOMEl('.hig__global-nav__side-nav__search__clear', this.el).classList.remove('hig__global-nav__side-nav__search__clear--show');
  }

  onClearIconClick(fn) {
    return this._attachListener('click', '.hig__global-nav__side-nav__search__clear', this.el, fn);
  }

  onFocusIn(fn) {
    return this._attachListener('focusin', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  onFocusOut(fn) {
    return this._attachListener('focusout', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  onInput(fn) {
    return this._attachListener('input', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  setPlaceholder(placeholder) {
    this._findDOMEl('.hig__global-nav__side-nav__search__inputholder__input', this.el).setAttribute('placeholder', placeholder);
  }

  setValue(value) {
    this._findDOMEl('.hig__global-nav__side-nav__search__inputholder__input', this.el).value = value;
  }

  showClearIcon() {
    this._findDOMEl('.hig__global-nav__side-nav__search__clear', this.el).classList.add('hig__global-nav__side-nav__search__clear--show');
  }
}

Search._interface = Interface.components.GlobalNav.partials.SideNav.partials.Search;
Search._defaults = {
  value: '',
  placeholder: 'Search'
};
Search._partials = {};

module.exports = Search;