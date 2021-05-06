package com.goetzrobin.trainmebe.app.exercise.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

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
