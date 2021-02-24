class ChangeAuthorToAuthorId < ActiveRecord::Migration[6.1]
  def change
    rename_column :books, :author, :author_id
  end
end
