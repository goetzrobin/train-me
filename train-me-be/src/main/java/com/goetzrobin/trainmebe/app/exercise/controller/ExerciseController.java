package com.goetzrobin.trainmebe.app.exercise.controller;

import com.goetzrobin.trainmebe.app.exercise.model.dto.ExerciseGetDTO;
import com.goetzrobin.trainmebe.app.exercise.model.dto.ExercisePostDTO;
import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import com.goetzrobin.trainmebe.app.exercise.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercises")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @PostMapping("")
    public ResponseEntity<ExerciseGetDTO> createNewExercise(@RequestBody ExercisePostDTO exercisePostDTO) {
        try {
            return ResponseEntity.ok(exerciseService.save(exercisePostDTO));
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

    @GetMapping("/{email}")
    public ResponseEntity<List<ExerciseGetDTO>> getAllExercisesForUserWithEmail(@PathVariable String email) {
        try {
            return ResponseEntity.ok(exerciseService.findAllForUserWithEmail(email));
        } catch (Exception e) {
            return null;
        }
    }
}
