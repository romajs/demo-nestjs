import {
  Table,
  Column,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Cat extends Model<Cat> {
  @PrimaryKey
  @Column
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  age: number;

  @Column({ allowNull: false })
  breed: string;
}
