import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
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
  })
  manufacturedBy?: string;
}
