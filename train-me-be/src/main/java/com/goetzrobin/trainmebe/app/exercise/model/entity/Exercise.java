package com.goetzrobin.trainmebe.app.exercise.model.entity;

import com.goetzrobin.trainmebe.app.trainingsession.model.entity.TrainingSession;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Exercise implements Serializable {
    private static final long serialVersionUID = -8994873863428597308L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exercise_sysid")
    private Long exerciseSysId;

    @Column(name = "exercise_name")
    private String name;

    @Column(name = "exercise_description")
    private String description;

    @ManyToMany(mappedBy = "exercises")
    private transient Set<TrainingSession> trainingSessions = new HashSet<>();

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
