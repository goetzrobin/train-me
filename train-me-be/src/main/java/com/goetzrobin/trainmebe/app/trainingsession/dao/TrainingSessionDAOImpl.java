package com.goetzrobin.trainmebe.app.trainingsession.dao;

import com.goetzrobin.trainmebe.app.trainingsession.model.entity.TrainingSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class TrainingSessionDAOImpl implements TrainingSessionDAO {
    private final TrainingSessionRepository trainingSessionRepository;

    @Override
    public List<TrainingSession> findAll() {
        return trainingSessionRepository.findAll();
    }

    @Override
    public TrainingSession save(TrainingSession exercise) {
        return null;
    }

    @Override
    public List<TrainingSession> findAllForUserWithEmail(String email) {
        return Collections.emptyList();
    }

    @Override
    public Optional<TrainingSession> findById(Long id) {
        return trainingSessionRepository.findById(id);
    }

    @Override
    public TrainingSession update(TrainingSession exercise) {
        return trainingSessionRepository.saveAndFlush(exercise);
    }
}
