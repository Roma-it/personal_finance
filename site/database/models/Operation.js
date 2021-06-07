module.exports = (sequelize, dataTypes){
    const alias = "Operation";
    const cols = {
        id: {type: dataTypes.INTEGER(), allownull:false, autoIncrement:true},
        concept: {type: dataTypes.STRING(255), allownull:false},
        amount: {type: dataTypes.DECIMAL(11,2), allownull:false},
        op_date: {type: dataTypes.DATE, allownull:false},
        categories_id: {type: dataTypes.INTEGER, allownull:false},
        op_type_id: {type: dataTypes.INTEGER, allownull:false}
    };
    const config = {
        timestamps: false,
        tableName: "operations"
    };
    const Operation = sequelize.define(alias, cols, config);

    Operation.association = function (model){
        Operation.belongsTo(model.OpType, {
            as: "operation_type",
            foreignkey: "op_type_id"
        });
        Operation.belongsTo(model.Category,{
            as: "category",
            foreignkey: "categories_id"
        })
    }
    return Operation;
}