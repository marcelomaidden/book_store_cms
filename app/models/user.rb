class User < ApplicationRecord
  has_secure_password
  has_many :books, foreign_key: :author_id, inverse_of: :author
end
