// handlers/user.go

package handlers

import (
	"errors"
	"fmt"
	"net/http"

	"gharpeti/cmd/db"
	"gharpeti/models"

	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func CreateUser(c echo.Context) error {
	u := new(models.User)

	if err := c.Bind(u); err != nil {
		fmt.Println(err)
		return err
	}

	// Check if the user already exists
	var existingUser models.User
	result := db.DB.Where("email = ? OR username = ?", u.Email, u.Username).First(&existingUser)
	if result.Error != nil {
		if !errors.Is(result.Error, gorm.ErrRecordNotFound) {

			fmt.Println(result.Error)
			return c.JSON(http.StatusInternalServerError, map[string]interface{}{
				"error": "Internal server error",
			})
		}
	} else {

		if result.RowsAffected > 0 {

			return c.JSON(http.StatusBadRequest, map[string]interface{}{
				"error": "Email or username is already in use",
			})
		}
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"error": "Internal server error",
		})
	}

	u.Password = string(hashedPassword)

	err = db.DB.Create(u).Error
	if err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"error": "Internal server error",
		})
	}

	u.Password = ""

	return c.JSON(http.StatusCreated, u)
}

func GetUser(c echo.Context) error {
	var users []models.User
	result := db.DB.Find(&users)
	if result.Error != nil {
		fmt.Println(result.Error)
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"error": "Internal server error",
		})
	}

	return c.JSON(http.StatusOK, users)
}
