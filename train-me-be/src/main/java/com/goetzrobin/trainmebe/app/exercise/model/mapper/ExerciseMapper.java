package com.goetzrobin.trainmebe.app.exercise.model.mapper;

import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;
import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExerciseMapper {
    @Mapping(target = "creator", ignore = true)
    @Mapping(target = "id", source = "exerciseSysId")
    ExerciseGetDTO exerciseToExerciseGetDTO(Exercise exercise);

    @Mapping(target = "exerciseSysId", ignore = true)
    @Mapping(target = "trainingSessions", ignore = true)
    @Mapping(target = "createUser", ignore = true)
    @Mapping(target = "createTS", ignore = true)
    @Mapping(target = "updateTS", ignore = true)
    @Mapping(target = "updateUser", ignore = true)
    Exercise exercisePostDTOToExercise(ExercisePostDTO exercise);

    @Mapping(target = "exerciseSysId", source = "id")
    @Mapping(target = "trainingSessions", ignore = true)
    @Mapping(target = "createUser", ignore = true)
    @Mapping(target = "createTS", ignore = true)
    @Mapping(target = "updateTS", ignore = true)
    @Mapping(target = "updateUser", ignore = true)
    Exercise exercisePatchDTOToExercise(ExercisePatchDTO exercise);

    List<ExerciseGetDTO> exercisesToExerciseGetDTOs(List<Exercise> exercises);

    @AfterMapping
    default void setExerciseCreator(@MappingTarget ExerciseGetDTO exerciseGetDTO, Exercise exercise) {
        User creator = exercise.getCreateUser();
        if (creator != null) {
            exerciseGetDTO.setCreator(creator.getFirstName() + " " + creator.getLastName());
        }
    }
}