class Manner < ApplicationRecord
  belongs_to :board
  validates :entry, presence: true
end
