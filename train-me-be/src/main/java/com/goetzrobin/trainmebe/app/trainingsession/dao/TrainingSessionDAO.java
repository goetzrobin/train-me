package com.goetzrobin.trainmebe.app.trainingsession.dao;

import com.goetzrobin.trainmebe.app.trainingsession.model.entity.TrainingSession;

import java.util.List;
import java.util.Optional;

public interface TrainingSessionDAO {
    List<TrainingSession> findAll();
    TrainingSession save(TrainingSession exercise);
    List<TrainingSession> findAllForUserWithEmail(String email);
    Optional<TrainingSession> findById(Long id);
    TrainingSession update(TrainingSession exercise);
}
