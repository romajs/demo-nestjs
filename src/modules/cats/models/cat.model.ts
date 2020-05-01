import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Cat extends Model<Cat> {
  @AutoIncrement
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
