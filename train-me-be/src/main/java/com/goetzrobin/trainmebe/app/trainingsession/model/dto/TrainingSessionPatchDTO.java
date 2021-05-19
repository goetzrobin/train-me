package com.goetzrobin.trainmebe.app.trainingsession.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class TrainingSessionPatchDTO {
    @NotNull(message = "Id required for Update")
    @JsonProperty("id")
    private String id;
    @NotNull(message = "Name cannot be null")
    @JsonProperty("name")
    private String name;
    @NotNull(message = "Please enter a description")
    @JsonProperty("description")
    private String description;
}
