package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.PersonalInfo;
import com.examly.springapp.model.WorkExperience;
import com.examly.springapp.repository.PersonalInfoRepository;
import com.examly.springapp.repository.WorkExperienceRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/job-applications")
    public class JobApplicationController {
        private final PersonalInfoRepository personalInfoRepository;
        private final WorkExperienceRepository workExperienceRepository;
    
        public JobApplicationController(PersonalInfoRepository personalInfoRepository,
                                        WorkExperienceRepository workExperienceRepository) {
            this.personalInfoRepository = personalInfoRepository;
            this.workExperienceRepository = workExperienceRepository;
        }
    
        @PostMapping("/personal-info")
        public PersonalInfo createPersonalInfo(@RequestBody PersonalInfo personalInfo) {
            return personalInfoRepository.save(personalInfo);
        }
    
        @PostMapping("/work-experience")
        public WorkExperience createWorkExperience(@RequestBody WorkExperience workExperience) {
            return workExperienceRepository.save(workExperience);
        }

		public PersonalInfoRepository getPersonalInfoRepository() {
			return personalInfoRepository;
		}

		public WorkExperienceRepository getWorkExperienceRepository() {
			return workExperienceRepository;
		}
    
        // Other methods for updating, deleting, etc.
    }
    
    