package com.goetzrobin.trainmebe.app.exercise.controller;

import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePatchDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;
import com.goetzrobin.trainmebe.app.exercise.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/exercises")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @PostMapping("")
    public ResponseEntity<ExerciseGetDTO> createNewExercise(@RequestBody @Valid ExercisePostDTO exercisePostDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(exerciseService.save(exercisePostDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PatchMapping("")
    public ResponseEntity<ExerciseGetDTO> updateExercise(@RequestBody @Valid ExercisePatchDTO exercisePatchDTO) {
        try {
            return ResponseEntity.ok(exerciseService.update(exercisePatchDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("")
    public ResponseEntity<List<ExerciseGetDTO>> getAllExercises() {
        try {
            return ResponseEntity.ok(exerciseService.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all/{email}")
    public ResponseEntity<List<ExerciseGetDTO>> getAllExercisesForUserWithEmail(@PathVariable String email) {
        try {
            List<ExerciseGetDTO> exercisesByEmail = exerciseService.findAllForUserWithEmail(email);
            return !exercisesByEmail.isEmpty() ? ResponseEntity.ok(exercisesByEmail) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseGetDTO> getExerciseById(@PathVariable Long id) {
        try {
            Optional<ExerciseGetDTO> exerciseFound = exerciseService.findById(id);
            return exerciseFound.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
