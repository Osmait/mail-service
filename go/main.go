package main

import (
	"log"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}
	USER_EMAIL := os.Getenv("USER_EMAIL")
	PASS_EMAIL := os.Getenv("PASS_EMAIL")

	from := USER_EMAIL
	password := PASS_EMAIL

	toEmailAddress := "prueba@gmail.com"
	to := []string{toEmailAddress}

	host := "smtp.gmail.com"
	port := "587"
	address := host + ":" + port

	subject := "Subject: This is the subject of the mail\n"
	body := "This is the body of the mail"
	message := []byte(subject + body)

	auth := smtp.PlainAuth("", from, password, host)

	err = smtp.SendMail(address, auth, from, to, message)

	if err != nil {
		panic(err)
	}

}
