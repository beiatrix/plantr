const db = new Sequelize('postgres://localhost:5432/plantr');
module.exports = db;

//gardener
const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

//plot
const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

//vegetable
const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    date: Sequelize.DATE
  }
})

const plotVegetables = db.define('plotVegetables', {
  foreignKey: {
    ''
  }
})

Plot.belongsToMany(Vegetable, { foreignKey: '' })
Vegetable.belongsToMany(Plot, { foreignKey: '' })


