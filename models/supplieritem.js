'use strict';
module.exports = (sequelize, DataTypes) => {
  var SupplierItem = sequelize.define('SupplierItem', {
    SupplierId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  SupplierItem.associate = model => {
    SupplierItem.belongsTo(model.Item)
    SupplierItem.belongsTo(model.Supplier)
  }

  return SupplierItem;
};
