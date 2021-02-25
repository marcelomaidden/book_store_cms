class Category < ApplicationRecord
  def books
    Book.find_by(category_id: id)
  end
end
