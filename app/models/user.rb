class User < ApplicationRecord
  validates :name, length: {minimum:3}
  validates :email, presence: :true, length: {minimum:3, maximum:50}
  validates :password, length: {minimum:3, maximum:20}

  has_secure_password
  has_many :books, foreign_key: :author_id, inverse_of: :author
end
