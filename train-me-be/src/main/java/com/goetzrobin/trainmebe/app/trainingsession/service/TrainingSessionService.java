package com.goetzrobin.trainmebe.app.trainingsession.service;

import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionGetDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPatchDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPostDTO;

import java.util.List;
import java.util.Optional;

public interface TrainingSessionService {
    TrainingSessionGetDTO save(TrainingSessionPostDTO trainingSession);
    List<TrainingSessionGetDTO> findAll();
    List<TrainingSessionGetDTO> findAllForUserWithEmail(String email);
    Optional<TrainingSessionGetDTO> findById(Long id);
    TrainingSessionGetDTO update(TrainingSessionPatchDTO trainingSession);
}
