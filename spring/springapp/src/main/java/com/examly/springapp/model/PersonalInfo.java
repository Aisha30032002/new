package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String middleName;
    
    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private String gender;

    @Column
    private Long phone;


    @Column
    private String coverLetter;

    @Column
    private int date;

    @Column
    private int month;

    @Column
    private Long year;

    @Column
    private String street;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private Long postalCode;

}