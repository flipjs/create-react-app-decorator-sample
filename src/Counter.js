import { action, observable, computed } from 'mobx'

class Counter {
  @observable count = 0

  @computed
  get isOdd () {
    return this.count % 2 === 1
  }

  @action
  increment () {
    this.count++
  }

  @action
  decrement () {
    this.count--
  }
}

export default Counter

