package com.goetzrobin.trainmebe.app.trainingsession.service;

import com.goetzrobin.trainmebe.app.trainingsession.dao.TrainingSessionDAO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionGetDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPatchDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPostDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.mapper.TrainingSessionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class TrainingSessionServiceImpl implements TrainingSessionService {
    private final TrainingSessionDAO trainingSessionDAO;
    private final TrainingSessionMapper trainingSessionMapper;

    @Autowired
    public TrainingSessionServiceImpl(TrainingSessionDAO trainingSessionDAO, TrainingSessionMapper trainingSessionMapper) {
        this.trainingSessionDAO = trainingSessionDAO;
        this.trainingSessionMapper = trainingSessionMapper;
    }

    @Override
    public TrainingSessionGetDTO save(TrainingSessionPostDTO trainingSessionPostDTO) {
        return trainingSessionMapper.trainingSessionToTrainingSessionGetDTO(
                trainingSessionDAO.save(trainingSessionMapper.trainingSessionPostDTOToTrainingSession(trainingSessionPostDTO))
        );
    }

    @Override
    public List<TrainingSessionGetDTO> findAll() {
        return trainingSessionMapper.trainingSessionsToTrainingSessionGetDTOs(trainingSessionDAO.findAll());
    }

    @Override
    public List<TrainingSessionGetDTO> findAllForUserWithEmail(String email) {
        return trainingSessionMapper.trainingSessionsToTrainingSessionGetDTOs(trainingSessionDAO.findAllForUserWithEmail(email));
    }

    @Override
    public Optional<TrainingSessionGetDTO> findById(Long id) {
        return trainingSessionDAO.findById(id).map(trainingSessionMapper::trainingSessionToTrainingSessionGetDTO);
    }

    @Override
    public TrainingSessionGetDTO update(TrainingSessionPatchDTO trainingSessionPatchDTO) {
        return trainingSessionMapper.trainingSessionToTrainingSessionGetDTO(
                trainingSessionDAO.update(trainingSessionMapper.trainingSessionPatchDTOToTrainingSession(trainingSessionPatchDTO))
        );
    }
}
