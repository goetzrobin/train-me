package com.goetzrobin.trainmebe.app.trainingsession.model.mapper;

import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionGetDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPatchDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.dto.TrainingSessionPostDTO;
import com.goetzrobin.trainmebe.app.trainingsession.model.entity.TrainingSession;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TrainingSessionMapper {
    @Mapping(target = "creator", ignore = true)
    @Mapping(target = "id", source = "trainingSessionSysId")
    TrainingSessionGetDTO trainingSessionToTrainingSessionGetDTO(TrainingSession trainingSession);

    @Mapping(target = "trainingSessionSysId", ignore = true)
    @Mapping(target = "exercises", ignore = true)
    @Mapping(target = "createUser", ignore = true)
    @Mapping(target = "createTS", ignore = true)
    @Mapping(target = "updateTS", ignore = true)
    @Mapping(target = "updateUser", ignore = true)
    TrainingSession trainingSessionPostDTOToTrainingSession(TrainingSessionPostDTO trainingSession);

    @Mapping(target = "trainingSessionSysId", source = "id")
    @Mapping(target = "exercises", ignore = true)
    @Mapping(target = "createUser", ignore = true)
    @Mapping(target = "createTS", ignore = true)
    @Mapping(target = "updateTS", ignore = true)
    @Mapping(target = "updateUser", ignore = true)
    TrainingSession trainingSessionPatchDTOToTrainingSession(TrainingSessionPatchDTO trainingSession);

    List<TrainingSessionGetDTO> trainingSessionsToTrainingSessionGetDTOs(List<TrainingSession> trainingSessions);

    @AfterMapping
    default void setTrainingSessionCreator(@MappingTarget TrainingSessionGetDTO trainingSessionGetDTO, TrainingSession trainingSession) {
        User creator = trainingSession.getCreateUser();
        if (creator != null) {
            trainingSessionGetDTO.setCreator(creator.getFirstName() + " " + creator.getLastName());
        }
    }
}