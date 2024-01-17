package main

import (
	"gharpeti/cmd/db"
	"gharpeti/handlers"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	e.GET("/", handlers.Home)
	db.InitDB()
	e.POST("/users/create", handlers.CreateUser)
	e.GET("/users", handlers.GetUser)
	e.GET("/users/:id", handlers.GetOneUser)
	e.PUT("/users/update/:id", handlers.UpdateUser)
	e.POST("/auth/login", handlers.Login)
	e.Logger.Fatal(e.Start(":4000"))
}
