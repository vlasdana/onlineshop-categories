import Category from "../models/categoryModel.js";

export async function getCategoryList(req, res) {
  try {
    const categories = await Category.getAllCategories();
    res.render("categoryList", { categories });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

export async function getEditCategoryForm(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await Category.getCategoryById(categoryId);
    res.render("categoryEditSingle", { category });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

export async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const { categoryName, categoryDescription, image_url, priority } = req.body;
    const isActive = req.body.is_active === "on";

    const existingCategoryData = await Category.getCategoryById(id);
    const existingCategory = new Category({ ...existingCategoryData });

    Object.assign(existingCategory, {
      name: categoryName,
      description: categoryDescription,
      is_active: isActive,
      image_url: image_url,
      priority,
    });

    console.log("existingCategory before update: ", existingCategory);

    const categoryUpdateSuccessful = await existingCategory.update(id);

    console.log("existingCategory after update: ", existingCategory);
    if (categoryUpdateSuccessful) {
      res.render("categoryUpdateSuccess");
    } else {
      res.status(500).send("Internal Server Error: Category update failed.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error: " + error);
  }
}

export async function saveCategory(req, res) {
  try {
    const { name, description, image_url, priority } = req.body;
    const is_active = req.body.is_active === "on";
    const categoryName = req.body.name;
    const category = new Category(
      name,
      description,
      is_active,
      image_url,
      priority
    );
    await category.save();
    res.render("categoryCreateSuccess", { categoryName });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
