package com.goetzrobin.trainmebe.app.exercise.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ExercisePostDTO {
    @NotNull
    @JsonProperty("name")
    private String name;
    @NotNull
    @JsonProperty("description")
    private String description;
}
