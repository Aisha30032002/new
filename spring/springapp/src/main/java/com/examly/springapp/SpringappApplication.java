package com.examly.springapp;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.data.jpa.repository.config.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;


@Configuration
@ComponentScan
@EnableAutoConfiguration


@SpringBootApplication

public class SpringappApplication {


	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

}