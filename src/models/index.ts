// src/models/index.ts

import { Category } from './Category';
import { Course } from './Course';

Category.hasMany(Course)
Category.belongsTo(Category)

export {
  Category,
  Course
}