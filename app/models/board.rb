class Board < ApplicationRecord
  has_one :mood, dependent: :destroy
  has_many :manner, dependent: :destroy
  has_many :wave, dependent: :destroy
  has_many :middles, dependent: :destroy
  validates :location, presence: true
  belongs_to :user
end
