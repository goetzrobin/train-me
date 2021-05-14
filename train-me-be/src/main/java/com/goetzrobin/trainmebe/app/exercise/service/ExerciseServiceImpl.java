package com.goetzrobin.trainmebe.app.exercise.service;

import com.goetzrobin.trainmebe.app.exercise.dao.ExerciseDAO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;
import com.goetzrobin.trainmebe.app.exercise.model.mapper.ExerciseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseDAO exerciseDAO;
    private final ExerciseMapper exerciseMapper;

    @Autowired
    public ExerciseServiceImpl(ExerciseDAO exerciseDAO, ExerciseMapper exerciseMapper) {
        this.exerciseDAO = exerciseDAO;
        this.exerciseMapper = exerciseMapper;
    }

    @Override
    public ExerciseGetDTO save(ExercisePostDTO exercisePostDTO) {
        return exerciseMapper.exerciseToExerciseGetDTO(
                exerciseDAO.save(exerciseMapper.exercisePostDTOToExercise(exercisePostDTO))
        );
    }

    @Override
    public List<ExerciseGetDTO> findAll() {
        return exerciseMapper.exercisesToExerciseGetDTOs(exerciseDAO.findAll());
    }

    @Override
    public List<ExerciseGetDTO> findAllForUserWithEmail(String email) {
        return exerciseMapper.exercisesToExerciseGetDTOs(exerciseDAO.findAllForUserWithEmail(email));
    }

    @Override
    public ExerciseGetDTO findById(Long id) {
        return exerciseMapper.exerciseToExerciseGetDTO(exerciseDAO.findById(id));
    }

    @Override
    public ExerciseGetDTO update(ExercisePatchDTO exercisePatchDTO) {
        return exerciseMapper.exerciseToExerciseGetDTO(
                exerciseDAO.update(exerciseMapper.exercisePatchDTOToExercise(exercisePatchDTO))
        );
    }
}
