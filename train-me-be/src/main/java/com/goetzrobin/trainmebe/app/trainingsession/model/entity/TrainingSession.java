package com.goetzrobin.trainmebe.app.trainingsession.model.entity;

import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "training_session")
public class TrainingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "training_session_sysid")
    private Long trainingSessionSysId;

    @Column(name = "training_session_name")
    private String name;

    @Column(name = "training_session_description")
    private String description;

    @ManyToMany(cascade = { CascadeType.DETACH })
    @JoinTable(
            name = "exercise_training_session",
            joinColumns = { @JoinColumn(name = "exercise_sysid") },
            inverseJoinColumns = { @JoinColumn(name = "training_session_sysid") }
    )
    private Set<Exercise> exercises = new HashSet<>();

    @Column(name = "create_ts")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createTS;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="create_user_sysid", nullable=false)
    private User createUser;

    @Column(name = "update_ts")
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updateTS;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="update_user_sysid", nullable=false)
    private User updateUser;
}
