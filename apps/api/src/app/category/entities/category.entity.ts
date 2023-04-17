import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

import { Product } from '../../product/entities/product.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';

/**
 * Category class.
 *
 * This entity handles the category information.
 */
@Entity('categories')
@Tree('closure-table', { closureTableName: 'categories_closure' })
export class Category {
  /**
   * This variable contains the category's id.
   *
   * @member {string} uuid - the category's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the category's title of the user.
   *
   * @member {string} title - the category's title.
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  title: string;

  /**
   * This variable is `true` when the category is activated.
   *
   * @member {boolean} is_activated - is true when the entity is activated
   */
  @Column({
    name: 'is_activated',
    type: 'boolean',
    default: true,
  })
  isActivated: boolean;

  /**
   * This variable contains the date when the category is created.
   *
   * @member {Date} createdAt - the create date.
   */
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /**
   * This variable contains the date when the category is updated.
   *
   * @member {Date} updatedAt - the update date.
   */
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * This variable contains the date when the category is deleted.
   *
   * @member {Date} deletedAt - the delete date.
   */
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date;

  /**
   * This variable contains the relation whit product entity.
   *
   * @member {Product} product - the relation with product entity.
   */
  @ManyToOne(() => Product, (product) => product.categories, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'uuid',
  })
  product: Product;

  /**
   * This variable contains a reference with the children.
   *
   * @member {array} children - the reference with the children.
   */
  @TreeChildren()
  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];

  /**
   * This variable contains the relation whit parent.
   *
   * @member {Category} parent - the relation with parent.
   */
  @TreeParent()
  @ManyToOne(() => Category, (category) => category.children, {
    onDelete: 'SET NULL',
    nullable: true,
    orphanedRowAction: 'nullify',
  })
  @JoinColumn({
    name: 'parent_id',
    referencedColumnName: 'uuid',
  })
  parent: Category;

  /**
   * This variable contains the reference of the many to many relation whit ticket entity.
   *
   * @member {array} tickets - the reference with ticket entity.
   */
  @ManyToMany(() => Ticket, (ticket) => ticket.categories, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinTable({
    name: 'categories_has_tickets',
    joinColumn: {
      name: 'category_id',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'ticket_id',
      referencedColumnName: 'uuid',
    },
  })
  tickets: Ticket[];
}
