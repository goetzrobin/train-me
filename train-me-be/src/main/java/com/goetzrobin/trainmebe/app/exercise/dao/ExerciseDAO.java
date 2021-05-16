package com.goetzrobin.trainmebe.app.exercise.dao;

import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;

import java.util.List;
import java.util.Optional;

public interface ExerciseDAO {
    List<Exercise> findAll();
    Exercise save(Exercise exercise);
    List<Exercise> findAllForUserWithEmail(String email);
    Optional<Exercise> findById(Long id);
    Exercise update(Exercise exercise);
}
