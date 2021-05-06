package com.goetzrobin.trainmebe.app.exercise.dao;

import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;

import java.util.List;

public interface ExerciseDAO {
    List<Exercise> findAll();
    Exercise save(Exercise exercise);
    List<Exercise> findAllForUserWithEmail(String email);
}
