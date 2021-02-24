class Book < ApplicationRecord
  has_one :category
  belongs_to :author, foreign_key: :author_id, class_name: 'User'
end
