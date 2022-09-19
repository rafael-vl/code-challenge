import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "robots",
})
export class Robot extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "number_of_arms",
  })
  numberOfArms!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: "manufactured_by",
  })
  manufacturedBy?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: "created_at",
  })
  createdAt?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: "updated_at",
  })
  updatedAt?: Date;
}
