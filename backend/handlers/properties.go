package handlers

import (
	"fmt"
	"gharpeti/cmd/db"
	"gharpeti/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func CreateProperty(c echo.Context) error {
	property := new(models.Property)

	if err := c.Bind(property); err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request body"})
	}

	if err := db.DB.Create(property).Error; err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to create property"})
	}

	return c.JSON(http.StatusCreated, property)
}

func GetProperties(c echo.Context) error {
	var properties []models.Property
	result := db.DB.Preload("Owner").Find(&properties)
	if result.Error != nil {
		fmt.Println(result.Error)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Internal server error"})
	}
	return c.JSON(http.StatusOK, properties)
}

func GetProperty(c echo.Context) error {
	var property models.Property
	id := c.Param("id")
	result := db.DB.Preload("Owner").First(&property, id)
	if result.Error != nil {
		fmt.Println(result.Error)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Internal server error"})
	}
	return c.JSON(http.StatusOK, property)
}
