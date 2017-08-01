class CreateTestimonials < ActiveRecord::Migration[5.1]
  def change
    create_table :testimonials do |t|
      t.string :subject
      t.text :body
      t.date :date

      t.timestamps
    end
  end
end
