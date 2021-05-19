package com.goetzrobin.trainmebe.app.trainingsession.dao;

import com.goetzrobin.trainmebe.app.trainingsession.model.entity.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {
}