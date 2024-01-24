import { query } from "../config/db.js";

class Category {
  constructor(name, description, is_active, image_url, priority) {
    this.name = name;
    this.description = description;
    this.is_active = is_active;
    this.image_url = image_url;
    this.priority = priority;
  }

  static async getAllCategories() {
    return await query("SELECT * FROM product_category");
  }

  static async getCategoryById(categoryId) {
    const result = await query("SELECT * FROM product_category WHERE id = ?", [
      categoryId,
    ]);
    return result[0];
  }

  async update(id) {
    if (!id) {
      console.log("No category ID specified for update");
      return;
    }

    const updateableProperties = [
      "name",
      "description",
      "is_active",
      "image_url",
      "priority",
    ];

    // Filter properties that have changed and map them to SQL update format
    const setClause = Object.entries(this)
      .filter(
        ([key, value]) =>
          updateableProperties.includes(key) && value !== undefined
      )
      .map(([key]) => `${key} = ?`)
      .join(", ");

    // Check if any properties have changed
    if (!setClause) {
      console.log("No changes detected. No need to update.");
      return;
    }

    // Build the SQL UPDATE query dynamically based on changed columns
    const updateQuery = `
        UPDATE product_category
        SET ${setClause}
        WHERE id = ?
      `;

    console.log("Update query:", updateQuery);

    // Extract values for the update query
    const updateValues = Object.entries(this)
      .filter(
        ([key, value]) =>
          updateableProperties.includes(key) && value !== undefined
      )
      .map(([key, value]) => value);

    // Execute the update query
    const result = await query(updateQuery, [...updateValues, id]);

    // Log the result
    console.log("Update result:", result);

    if (result && result.affectedRows > 0) {
      console.log("Update successful!");
      return true;
    } else {
      console.log("Update did not affect any rows or encountered an issue.");
      return false;
    }
  }

  async save() {
    await query(
      "INSERT INTO product_category (name, description, is_active, image_url, priority) VALUES (?, ?, ?, ?, ?)",
      [
        this.name,
        this.description,
        this.is_active,
        this.image_url,
        this.priority,
      ]
    );
  }
}

// Export the Category class directly
export default Category;
