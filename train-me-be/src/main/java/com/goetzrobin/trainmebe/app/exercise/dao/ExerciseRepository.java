package com.goetzrobin.trainmebe.app.exercise.dao;

import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    @Query( value = "select * from exercise e join usr u on e.create_user_sysid = u.user_sysid where u.user_email = :email", nativeQuery = true)
    List<Exercise> getExercisesOfUserWithEmail(@Param("email") String email);
}