package com.goetzrobin.trainmebe.app.exercise.service;

import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;

import java.util.List;
import java.util.Optional;

public interface ExerciseService {
    ExerciseGetDTO save(ExercisePostDTO exercise);
    List<ExerciseGetDTO> findAll();
    List<ExerciseGetDTO> findAllForUserWithEmail(String email);
    Optional<ExerciseGetDTO> findById(Long id);
    ExerciseGetDTO update(ExercisePatchDTO exercise);
}
