package com.goetzrobin.trainmebe.app.exercise.controller;

import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;
import com.goetzrobin.trainmebe.app.exercise.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/exercises")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @PostMapping("")
    public ResponseEntity<ExerciseGetDTO> createNewExercise(@RequestBody @Valid ExercisePostDTO exercisePostDTO) {
        try {
            return ResponseEntity.ok(exerciseService.save(exercisePostDTO));
        } catch (Exception e) {
            return null;
        }
    }

    @PatchMapping("")
    public ResponseEntity<ExerciseGetDTO> updateExercise(@RequestBody @Valid ExercisePatchDTO exercisePatchDTO) {
        try {
            return ResponseEntity.ok(exerciseService.update(exercisePatchDTO));
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("")
    public ResponseEntity<List<ExerciseGetDTO>> getAllExercises() {
        try {
            return ResponseEntity.ok(exerciseService.findAll());
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/all/{email}")
    public ResponseEntity<List<ExerciseGetDTO>> getAllExercisesForUserWithEmail(@PathVariable String email) {
        try {
            return ResponseEntity.ok(exerciseService.findAllForUserWithEmail(email));
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseGetDTO> getExerciseById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(exerciseService.findById(id));
        } catch (Exception e) {
            return null;
        }
    }
}
