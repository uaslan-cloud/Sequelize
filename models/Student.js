module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        class: {
            type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        }
    });


    return Student;
}