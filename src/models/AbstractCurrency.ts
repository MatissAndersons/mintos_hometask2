export default class AbstractCurrency {
  name: string;
  selected: boolean;

  constructor (name: string, selected: boolean = false) {
    this.name = name
    this.selected = selected
  }
}
