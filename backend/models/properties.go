package models

import "gorm.io/gorm"

type Property struct {
	gorm.Model
	Title       string `json:"title" gorm:"not null;default:null"`
	Description string `json:"description" gorm:"not null;default:null"`
	Location    string `json:"location" gorm:"not null;size:255;default:null"`
	OwnerID     uint   `json:"ownerId" gorm:"not null;unique"`
	Owner       User   `json:"owner" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
