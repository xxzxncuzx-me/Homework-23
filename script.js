"use strict";

class Article {
    constructor({id, name, color, description, maxAmount} = {}) { // 1
      this.id = id
      this.name = name
      this.color = color
      this.description = description
      this.maxAmount = maxAmount
    }
  }
  
   const oldArticles = [
    new Article({id: '1', name: 'Bag', color: 'black', description: '', maxAmount: 10}), // 2
    new Article({id: '2', name: 'Chair', color: 'grey', description: 'Great chair', maxAmount: 5}), // 3
    new Article({id: '3', name: 'Lamp', color: 'blue', description: 'Bright & cheap', maxAmount: 20}), // 4
    new Article({id: '4', name: 'Monitor', color: 'black', description: 'Full HD', maxAmount: 10}), // 5
  ]
  
  
  const newArticles = [
    new Article({id: '5', name: 'VR glasses', color: 'white', description: '', maxAmount: 10}), // 6
    new Article({id: '6', name: 'Powerbank', color: 'grey', description: '', maxAmount: 15}), // 7
  ]
  
  const allArticles = [...oldArticles, ...newArticles]// 8
  
  let allArticlesMessage = `There are articles currenty available:\n`
  allArticles.forEach(function({name, color, maxAmount}) { // 9
    allArticlesMessage += `${name} (${color}) - ${maxAmount}pc\n` // 10
  })
  
  alert(allArticlesMessage)


  