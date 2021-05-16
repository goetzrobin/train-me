package com.goetzrobin.trainmebe.app.exercise.dao;


import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import com.goetzrobin.trainmebe.shared.modules.security.SecurityHelper;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ExerciseDAOImpl implements ExerciseDAO {
    private final ExerciseRepository exerciseRepository;

    @Override
    public List<Exercise> findAll() {
        return exerciseRepository.findAll();
    }

    @Override
    public Exercise save(Exercise exercise) {
        User currentUser = User.from(SecurityHelper.getCurrentUserSysId());
        exercise.setUpdateUser(currentUser);
        exercise.setCreateUser(currentUser);
        return exerciseRepository.saveAndFlush(exercise);
    }

    @Override
    public List<Exercise> findAllForUserWithEmail(String email) {
        return exerciseRepository.getExercisesOfUserWithEmail(email);
    }

    @Override
    public Optional<Exercise> findById(Long id) {
        return exerciseRepository.findById(id);
    }

    @Override
    public Exercise update(Exercise exercise) {
        exerciseRepository.updateExercise(exercise.getExerciseSysId(), exercise.getDescription(), SecurityHelper.getCurrentUserSysId());
        exerciseRepository.flush();
        return exercise;
    }
}
